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
        Schema::create('siswas', function (Blueprint $table) {
            $table->id();
            $table->string('nis', 20)->unique(); // Nomor Induk Siswa
            $table->string('nama', 100);
            $table->date('tanggal_lahir');
            $table->string('jenis_kelamin', 10);
            // $table->foreignId('rombel_id')->constrained('rombel')->onDelete('cascade'); // Relasi ke tabel Rombel
            $table->string('alamat')->nullable();
            $table->string('telepon', 15)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswas');
    }
};
