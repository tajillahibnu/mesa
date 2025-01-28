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
        Schema::create('pegawais', function (Blueprint $table) {
            $table->id();
            $table->string('nip', 20)->unique()->nullable(); // Nomor Induk Pegawai (opsional untuk karyawan non-guru)
            $table->string('nama', 100);
            $table->string('jenis_kelamin', 10);
            $table->string('jabatan', 50); // Jabatan, misalnya: Guru, TU, dll.
            $table->string('departemen', 100)->nullable(); // Departemen atau bidang kerja
            $table->string('telepon', 15)->nullable();
            $table->text('alamat')->nullable();
            $table->date('tanggal_lahir');
            $table->string('email', 100)->unique();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pegawais');
    }
};
