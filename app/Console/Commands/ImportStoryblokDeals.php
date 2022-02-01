<?php

namespace App\Console\Commands;

use App\Models\Deal;
use Illuminate\Console\Command;

class ImportStoryblokDeals extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storyblok:deals';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import Deals from Storyblok';

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
        $this->info('Importing deals');

        $client = new \Storyblok\Client(env('STORY_CLIENT_KEY'));

        $totalDeals = $client->getStories([
            'start_with' => "de/deals",
            'per_page' => 100,
        ])->responseHeaders['Total'][0];

        $totalPages = ceil($totalDeals / 25);

        for ($page = 1; $page <= $totalPages; $page++) {

            $data = collect($client->getStories([
                'start_with' => "de/deals",
                'per_page' => 25,
                'by_slugs' => 'de/deals/*',
                'page' => $page,
            ])->responseBody['stories']);

            $data->each(function ($data) {
                Deal::updateOrCreate(
                    [
                        'id' => $data['uuid']
                    ],
                    [
                        'user_id' => 1,
                        'name' => $data['name'],
                        'slug' => $data['slug'],
                        'created_at' =>  $data['created_at'],
                        'updated_at' =>  $data['published_at'],
                        'image' => $data['content']['gallery'],
                        'expires_at' => $data['content']['expired'],
                        'link' => $data['content']['link']['url'],
                        'price' => (float) $data['content']['price'],
                        'original_price' => (float) $data['content']['original_price'],
                        'html' => collect($data['content']['html']['content'])->toJson(),
                        'free_shipping' => $data['content']['free_shipping'],
                        'coupon_code' => $data['content']['coupon_code'],
                    ]
                )->categories()->attach($data['content']['categories']);
            });
        }

        $this->info('Deals successfully imported');
    }
}
