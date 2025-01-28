<?php

use Illuminate\Support\Facades\Route;
use Modules\Pkl\Http\Controllers\MenuPageController;
use Modules\Pkl\Http\Controllers\PklController;

/*
 *--------------------------------------------------------------------------
 * API Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register API routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * is assigned the "api" middleware group. Enjoy building your API!
 *
*/

// Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
//     Route::apiResource('pkl', PklController::class)->names('pkl');
// });

Route::group(['prefix' => 'pkl', 'middleware' => ['web', 'auth','PageAccess']], function () {
    Route::post('load-page', [MenuPageController::class, 'getMenuPage'])->name('load-page');
});

Route::group(['prefix' => 'pkl', 'middleware' => ['web', 'auth']], function () {
    Route::group(['prefix' => 'setting'], function () {
        require_once(__DIR__ . '/api/setting/app.php');
    });

    Route::group(['prefix' => 'management'], function () {
        require_once(__DIR__ . '/api/management/mansi.php');
        require_once(__DIR__ . '/api/management/manpeg.php');
    });

    Route::group(['prefix' => 'master'], function () {
        require_once(__DIR__ . '/api/master/Dudi.php');
        require_once(__DIR__ . '/api/master/Jurusan.php');
    });
});