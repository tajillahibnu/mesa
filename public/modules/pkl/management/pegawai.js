var targetID = '';
$(() => {
    // Swal.fire("Welcome! to the cuba theme!");
    APP.combov1({
        el: ['#select_roles'],
        url: `${BASE_API_MENU}/combo/roles`,
        fild_id: 'name',
        fild_name: 'name',
        callback: (response) => {
            if (response.error) {
                console.error("Error:", response.error);
            } else {
                mainTable();
                // $('.form-select').select2();
                $('#select_roles').select2({
                    placeholder: "Select options", // Placeholder
                    allowClear: true, // Menambahkan opsi hapus semua
                    tags: true, // Mengizinkan pengguna menambahkan opsi baru jika diperlukan
                    closeOnSelect: false, // Dropdown tetap terbuka setelah pemilihan
                    width: '100%' // Mengatur lebar dropdown sesuai kebutuhan
                });
                // Custom Styling (Optional)
                $('#select_roles').on('select2:select', function (e) {
                    let data = e.params.data;
                    console.log(`Selected: ${data.id}`);
                });
            }
        }
    })
})

mainTable = () => {
    APP.initTable({
        el: '#maintable', // ID atau kelas elemen tabel HTML
        url: BASE_API_MENU + '/main-table', // URL endpoint API untuk mengambil data
        pageLength: 10, // Jumlah baris per halaman
        sorting: 'asc', // Urutan sorting default
        index: 1, // Kolom yang diurutkan
        columnDefs: [
            {
                targets: 1,
                data: 'name',
                render: function (data, type, full, meta) {
                    is_email_verified = full['email_verified_at'] == null ? '' : '<img class="mark-img" src="../assets/images/dashboard-6/author/mark.png" alt="mark icon">';
                    return `
                    <div class="d-flex align-items-center gap-2">
                        <div class="currency-icon warning"><img class="img-fluid" src="../assets/images/dashboard-2/order/sub-product/16.png" alt=""></div>
                        <div> <a class="f-14 mb-0 f-w-500 c-light" href="javacript:void(0)">${full['name']}</a>
                            <p class="c-o-light">
                                ${full['email']}
                                ${is_email_verified}
                            </p>
                        </div>
                    </div>
                    `
                },
            },
            {
                targets: 2,
                render: function (data, type, full, meta) {
                    return full['role_name'];
                },
            },
            {
                targets: 3,
                render: function (data, type, full, meta) {
                    return full['status'];
                },
            },
            {
                targets: 4,
                width: "50px", // Mengatur lebar kolom nomor urut
                // data: 'name',
                render: function (data, type, full, meta) {
                    return full['action'];
                },
            }
        ]
    });
}

newData = () => {
    targetID = '';
    $('#formMain').trigger('reset');
    $('#mainModal').modal('show');
}

editData = (el) => {
    var data = $(el).data('params')
    data = JSON.parse(atob(data));
    targetID = data['id'];
    $.each(data, (i, v) => {
        $(`[name="${i}"]`).val(v);
    })
    $('#mainModal').modal('show');
}

editRoles = (el) => {
    var data = $(el).data('params')
    data = JSON.parse(atob(data));
    targetID = data['id'];
    $.each(data, (i, v) => {
        $(`[name="${i}"]`).val(v);
    })
    $('#mainModal').modal('show');
}

onSaveIt = (name) => {
    var form = $(`#${name}`)[0];
    var formData = new FormData(form);
    var action = targetID == '' ? 'store' : 'update/' + targetID;

    APP.axiosRequest({
        url: `${BASE_API_MENU}/${action}`,
        data: formData,
    }).then(data => {
        APP.reloadTable();
        $('#mainModal').modal('hide');
        APP.notif({
            type: data.status,
            message: data.message,
        });
    }).catch(error => {
        console.error("Fetch error:", error);
    });
}

deleteData = (el) => {
    var data = $(el).data('params')
    data = JSON.parse(atob(data));
    targetID = data['id'];
    APP.confirm({
        title: 'Are you sure?',
        text: 'Do you want to delete this item?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            APP.axiosRequest({
                url: `${BASE_API_MENU}/delete`,
                data: {
                    id: targetID
                },
            }).then(data => {
                APP.reloadTable();
                APP.notif({
                    type: data.status,
                    message: data.message,
                });
            }).catch(error => {
                console.error("Fetch error:", error);
            });
        }
    });

}

