var targetID = '';
$(() => {
    // $('#maintable').DataTable({
    //     dom:
    //         '<"card-header d-flex border-top rounded-0 flex-wrap py-0 flex-column flex-md-row align-items-start"' +
    //         '<"me-5 ms-n4 pe-5 mb-n6 mb-md-0"f>' +
    //         '<"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex flex-column align-items-start align-items-sm-center justify-content-sm-center pt-0 gap-sm-4 gap-sm-0 flex-sm-row"lB>>' +
    //         '>t' +
    //         '<"row"' +
    //         '<"col-sm-12 col-md-6"i>' +
    //         '<"col-sm-12 col-md-6"p>' +
    //         '>',
    //     lengthMenu: [7, 10, 20, 50, 70, 100], //for length of menu
    //     language: {
    //         sLengthMenu: '_MENU_',
    //         search: '',
    //         searchPlaceholder: 'Search Product',
    //         info: 'Displaying _START_ to _END_ of _TOTAL_ entries',
    //         paginate: {
    //             next: '<i class="ti ti-chevron-right ti-sm"></i>',
    //             previous: '<i class="ti ti-chevron-left ti-sm"></i>'
    //         }
    //     },
    //     // Buttons with Dropdown
    //     buttons: [
    //         {
    //             extend: 'collection',
    //             className: 'btn btn-label-secondary dropdown-toggle me-4 waves-effect waves-light',
    //             text: '<i class="ti ti-upload me-1 ti-xs"></i>Export',
    //             buttons: [
    //                 {
    //                     extend: 'print',
    //                     text: '<i class="ti ti-printer me-2" ></i>Print',
    //                     className: 'dropdown-item',
    //                     exportOptions: {
    //                         columns: [1, 2, 3, 4, 5, 6, 7],
    //                         format: {
    //                             body: function (inner, coldex, rowdex) {
    //                                 if (inner.length <= 0) return inner;
    //                                 var el = $.parseHTML(inner);
    //                                 var result = '';
    //                                 $.each(el, function (index, item) {
    //                                     if (item.classList !== undefined && item.classList.contains('product-name')) {
    //                                         result = result + item.lastChild.firstChild.textContent;
    //                                     } else if (item.innerText === undefined) {
    //                                         result = result + item.textContent;
    //                                     } else result = result + item.innerText;
    //                                 });
    //                                 return result;
    //                             }
    //                         }
    //                     },
    //                     customize: function (win) {
    //                         // Customize print view for dark
    //                         $(win.document.body)
    //                             .css('color', headingColor)
    //                             .css('border-color', borderColor)
    //                             .css('background-color', bodyBg);
    //                         $(win.document.body)
    //                             .find('table')
    //                             .addClass('compact')
    //                             .css('color', 'inherit')
    //                             .css('border-color', 'inherit')
    //                             .css('background-color', 'inherit');
    //                     }
    //                 },
    //                 {
    //                     extend: 'csv',
    //                     text: '<i class="ti ti-file me-2" ></i>Csv',
    //                     className: 'dropdown-item',
    //                     exportOptions: {
    //                         columns: [1, 2, 3, 4, 5, 6, 7],
    //                         format: {
    //                             body: function (inner, coldex, rowdex) {
    //                                 if (inner.length <= 0) return inner;
    //                                 var el = $.parseHTML(inner);
    //                                 var result = '';
    //                                 $.each(el, function (index, item) {
    //                                     if (item.classList !== undefined && item.classList.contains('product-name')) {
    //                                         result = result + item.lastChild.firstChild.textContent;
    //                                     } else if (item.innerText === undefined) {
    //                                         result = result + item.textContent;
    //                                     } else result = result + item.innerText;
    //                                 });
    //                                 return result;
    //                             }
    //                         }
    //                     }
    //                 },
    //                 {
    //                     extend: 'excel',
    //                     text: '<i class="ti ti-file-export me-2"></i>Excel',
    //                     className: 'dropdown-item',
    //                     exportOptions: {
    //                         columns: [1, 2, 3, 4, 5, 6, 7],
    //                         format: {
    //                             body: function (inner, coldex, rowdex) {
    //                                 if (inner.length <= 0) return inner;
    //                                 var el = $.parseHTML(inner);
    //                                 var result = '';
    //                                 $.each(el, function (index, item) {
    //                                     if (item.classList !== undefined && item.classList.contains('product-name')) {
    //                                         result = result + item.lastChild.firstChild.textContent;
    //                                     } else if (item.innerText === undefined) {
    //                                         result = result + item.textContent;
    //                                     } else result = result + item.innerText;
    //                                 });
    //                                 return result;
    //                             }
    //                         }
    //                     }
    //                 },
    //                 {
    //                     extend: 'pdf',
    //                     text: '<i class="ti ti-file-text me-2"></i>Pdf',
    //                     className: 'dropdown-item',
    //                     exportOptions: {
    //                         columns: [1, 2, 3, 4, 5, 6, 7],
    //                         format: {
    //                             body: function (inner, coldex, rowdex) {
    //                                 if (inner.length <= 0) return inner;
    //                                 var el = $.parseHTML(inner);
    //                                 var result = '';
    //                                 $.each(el, function (index, item) {
    //                                     if (item.classList !== undefined && item.classList.contains('product-name')) {
    //                                         result = result + item.lastChild.firstChild.textContent;
    //                                     } else if (item.innerText === undefined) {
    //                                         result = result + item.textContent;
    //                                     } else result = result + item.innerText;
    //                                 });
    //                                 return result;
    //                             }
    //                         }
    //                     }
    //                 },
    //                 {
    //                     extend: 'copy',
    //                     text: '<i class="ti ti-copy me-2"></i>Copy',
    //                     className: 'dropdown-item',
    //                     exportOptions: {
    //                         columns: [1, 2, 3, 4, 5, 6, 7],
    //                         format: {
    //                             body: function (inner, coldex, rowdex) {
    //                                 if (inner.length <= 0) return inner;
    //                                 var el = $.parseHTML(inner);
    //                                 var result = '';
    //                                 $.each(el, function (index, item) {
    //                                     if (item.classList !== undefined && item.classList.contains('product-name')) {
    //                                         result = result + item.lastChild.firstChild.textContent;
    //                                     } else if (item.innerText === undefined) {
    //                                         result = result + item.textContent;
    //                                     } else result = result + item.innerText;
    //                                 });
    //                                 return result;
    //                             }
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             text: '<i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span class="d-none d-sm-inline-block">Add Product</span>',
    //             className: 'add-new btn btn-primary ms-2 ms-sm-0 waves-effect waves-light',
    //             action: function () {
    //                 window.location.href = productAdd;
    //             }
    //         }
    //     ],
    // })
    mainTable();
})

mainTable = () => {
    APP.initTable({
        el: '#maintable', // ID atau kelas elemen tabel HTML
        url: BASE_API_MENU + '/main-table', // URL endpoint API untuk mengambil data
        // pageLength: 10, // Jumlah baris per halaman
        // sorting: 'asc', // Urutan sorting default
        // index: 1, // Kolom yang diurutkan
        columnDefs: [
            {
                targets: 1,
                data: 'name',
                render: function (data, type, full, meta) {
                    return full['name'];
                },
            },
            {
                targets: 2,
                data: 'phone',
                render: function (data, type, full, meta) {
                    return full['phone'];
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
    console.log(data)
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