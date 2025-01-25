<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Dudi extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'address',
        'phone',
        'email',
        'description',
        'website',
        'is_active',
        'latitude',
        'longitude',
    ];
    /**
     * Relasi dengan DudiRule
     */
    public function rules()
    {
        return $this->hasMany(DudiRules::class);
    }
}
