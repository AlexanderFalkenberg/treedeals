<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an admin user using Artisan';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $username = $this->ask('Username: ');
        $password = $this->ask('Password: ');
        $email = $this->ask('email');

        User::create([
            'username' => $username,
            'password' => Hash::make($password),
            'email' => $email,
        ]);

        $this->info('Admin user has been created!');
    }
}
