# Laravel Modular Education Solution Application (MESA)

## Introduction
This project is a modular Laravel application designed for school management. It provides a flexible and scalable architecture to manage data related to students, teachers, and classes. This README includes instructions for setup, usage, and standard operating procedures (SOP).

---

## Requirements

- PHP >= 8.1
- Composer
- Laravel >= 10.x
- MySQL or other supported database

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tajillahibnu/mesa.git
   cd mesa
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```
   Configure your `.env` file with the appropriate database and application settings.

4. Generate an application key:
   ```bash
   php artisan key:generate
   ```

5. Run migrations with seeders:
   ```bash
   php artisan migrate:fresh --seed
   ```

6. Start the development server:
   ```bash
   php artisan serve
   ```
   Access the application at `http://localhost:8000`.

---

## Common Artisan Commands

### Create a Model with Migration and Seeder
To create a new model, migration, and seeder:
```bash
php artisan make:model Tingkat -m -s
```

- `-m`: Generates a migration file.
- `-s`: Generates a seeder file.

### Create a Factory
To create a factory:
```bash
php artisan make:factory PostFactory
```
This command generates a factory class for seeding your models.

### Recreate Database with Seeders
To reset the database and run seeders:
```bash
php artisan migrate:fresh --seed
```

This command drops all tables, recreates them, and seeds the database with initial data.

---

## SOP: Standard Operating Procedures

### Create a Request
To create a request in a specific module:
```bash
php artisan module:make-request Management/PegawaiRequest pkl
```
- `Management/PegawaiRequest`: The location and name of the request class.
- `pkl`: The name of the module.

### Create a Controller
To create a controller in a specific module:
```bash
php artisan module:make-controller Master/TahunController pkl
```
- `Master/TahunController`: The location and name of the controller.
- `pkl`: The name of the module.

### Create a Service
To create a service in a specific module:
```bash
php artisan module:make-service Master/TahunService pkl
```
- `Master/TahunService`: The location and name of the service class.
- `pkl`: The name of the module.

### Create a Repository
To create a repository in a specific module:
```bash
php artisan module:make-repository TahunRepository pkl
```
- `TahunRepository`: The name of the repository.
- `pkl`: The name of the module.

---

## Directory Structure
The project uses a modular approach. Below is the general directory structure:

```
app/
  Modules/
    pkl/
      Controllers/
      Models/
      Repositories/
      Services/
      Requests/
    ...
resources/
  views/
public/
config/
routes/
  api.php
  web.php
```
