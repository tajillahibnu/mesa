<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Siswa extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'nis',
        'nama',
        'tanggal_lahir',
        'jenis_kelamin',
        'rombel_id',
        'alamat',
        'telepon',
    ];

    public function rombel()
    {
        return $this->belongsTo(Rombel::class);
    }
}
