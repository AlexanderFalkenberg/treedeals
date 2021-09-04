<?php

namespace Database\Seeders;

use App\Models\Deal;
use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->count(10)
            ->has(Deal::factory()->has(Category::factory()))
            ->create();
    }
}
