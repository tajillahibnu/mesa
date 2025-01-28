<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rombels', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('kode_rombel', 20)->unique(); // Unique code for the rombel
            $table->string('nama_rombel', 100); // Name of the rombel
            $table->unsignedBigInteger('walikelas_id'); // Relation to the teacher who manages the rombel
            $table->unsignedBigInteger('jurusan_id'); // Relation to a specific department or major
            $table->integer('tingkat'); // Grade level, e.g., 10, 11, 12
            $table->integer('kapasitas')->default(0); // Capacity of the rombel
            $table->string('tahun_ajaran', 9); // Academic year, e.g., 2024/2025
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('walikelas_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('jurusan_id')->references('id')->on('jurusans')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rombels');
    }
};
