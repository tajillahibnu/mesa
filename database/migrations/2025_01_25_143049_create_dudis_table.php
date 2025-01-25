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
        Schema::create('dudis', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nama DUDI
            $table->string('address'); // Alamat
            $table->string('phone')->nullable(); // Nomor Telepon
            $table->string('email')->unique()->nullable(); // Email
            $table->text('description')->nullable(); // Deskripsi DUDI
            $table->string('website')->nullable(); // Situs web DUDI
            $table->decimal('latitude', 10, 8)->nullable(); // Koordinat Latitude
            $table->decimal('longitude', 11, 8)->nullable(); // Koordinat Longitude
            $table->boolean('is_active')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dudis');
    }
};
