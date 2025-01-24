<?php

namespace Modules\Pkl\Services;

use App\Models\Role;

class ComboMasterService
{
    // public function tahun_pelajaran()
    // {
    //     $data = TahunAkademik::select('id', 'name')->get();
    //     return $data->map(function ($item) {
    //         return [
    //             'id' => $item->id,
    //             'name' => ucwords($item->name)
    //         ];
    //     });
    // }

    public function roles()
    {
        $data = Role::select('id', 'name')->get();
        return $data->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => ucwords($item->name)
            ];
        });
    }
}
