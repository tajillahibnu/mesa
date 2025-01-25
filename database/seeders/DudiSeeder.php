<?php

namespace Database\Seeders;

use App\Models\Dudi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DudiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Membuat Dudi beserta DudiRule menggunakan factory
        Dudi::factory()
            ->count(5) // Membuat 5 Dudi
            ->create()
            ->each(function ($dudi) {
                $dudi->rules()->createMany([
                    ['rule_type' => 'max_siswa_motor', 'value' => 5],
                    ['rule_type' => 'max_siswa_perempuan', 'value' => 3],
                ]);
            });
    }
}
