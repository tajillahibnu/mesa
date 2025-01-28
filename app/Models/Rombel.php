<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rombel extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'kode_rombel',
        'nama_rombel',
        'walikelas_id',
        'jurusan_id',
        'tingkat',
        'kapasitas',
        'tahun_ajaran',
    ];

    public function waliKelas()
    {
        return $this->belongsTo(Pegawai::class, 'walikelas_id');
    }

    public function jurusan()
    {
        return $this->belongsTo(Jurusan::class, 'jurusan_id');
    }

}
