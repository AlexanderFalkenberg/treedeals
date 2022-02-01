<?php

namespace App\Console\Commands;

use Throwable;
use App\Models\Category;
use App\Service\Storyblok;
use Illuminate\Console\Command;

class ImportStoryblokCategories extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storyblok:categories';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import Categories from Storyblok';

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
        $this->info('Importing categories');

        try {
            $client = new \Storyblok\Client(env('STORYBLOK_CLIENT_KEY'));

            $data = collect($client->getStories([
                'starts_with' => "de/kategorien",
                'per_page' => 100,
                'by_slugs' => 'de/kategorien/*',
            ])->responseBody['stories']);


            $data->each(function ($data) {
                Category::updateOrCreate(
                    [
                        'id' => $data['uuid']
                    ],
                    [
                        'id' => $data['uuid'],
                        'user_id' => 1,
                        'name' => $data['name'],
                        'slug' => $data['slug'],
                    ]
                );
            });
        } catch (Throwable $e) {
            $this->info($e);
        }

        $this->info('Categories successfully imported');
    }
}
