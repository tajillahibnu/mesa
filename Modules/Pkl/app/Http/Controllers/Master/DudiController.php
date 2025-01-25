<?php

namespace Modules\Pkl\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponseTrait;
use Exception;
use Illuminate\Http\Request;
use Modules\Pkl\Http\Requests\Master\DudiRequest;
use Modules\Pkl\Services\Master\DudiService;

class DudiController extends Controller
{
    use ApiResponseTrait;
    protected $mainServices;
    public function __construct(DudiService $mainServices)
    {
        $this->mainServices = $mainServices;
    }

    public function store(DudiRequest $request)
    {
        try {
            $aArrStore = $this->mainServices->store($request->input());
            return $this->apiResponse($aArrStore)
                ->send();
        } catch (\Throwable $th) {
            throw new Exception('Internal server malfunction.');
        }
    }

    public function update(DudiRequest $request, $id)
    {
        try {
            $aArrUpdate = $this->mainServices->update($id, $request->input());
            return $this->apiResponse($aArrUpdate)
                ->send();
        } catch (\Throwable $th) {
            throw new Exception('Internal server malfunction.');
        }
    }

    public function delete(Request $request)
    {
        try {
            $id = $request->input('id');
            $aArrDelete = $this->mainServices->delete($id);
            return $this->apiResponse($aArrDelete)
                ->send();
        } catch (\Throwable $th) {
            throw new Exception('Internal server malfunction.');
        }
    }

    public function mainTable()
    {
        return $this->mainServices->table();
    }
}
