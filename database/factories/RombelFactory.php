<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rombel>
 */
class RombelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kode_rombel' => $this->faker->unique()->bothify('ROM-###'),
            'nama_rombel' => $this->faker->word(),
            'walikelas_id' => 1, // Update sesuai kebutuhan relasi
            'jurusan_id' => 1, // Update sesuai kebutuhan relasi
            'tingkat' => $this->faker->numberBetween(10, 12),
            'kapasitas' => $this->faker->numberBetween(20, 40),
            'tahun_ajaran' => '2024/2025',
        ];

    }
}
