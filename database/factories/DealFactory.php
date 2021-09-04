<?php

namespace Database\Factories;

use App\Models\Deal;
use Illuminate\Database\Eloquent\Factories\Factory;

class DealFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Deal::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(),
            'description' => $this->faker->text(500),
            'original_price' => 100,
            'price' => 80,
            'image' => json_encode(
                [
                    "default" => 'Test'
                ]
            ),
            'expires_at' => null,
            'coupon_code' => $this->faker->word(),
            'campaign' => $this->faker->boolean(50),
            'approved' => $this->faker->boolean(50),
            'free_shipping' => $this->faker->boolean(50),
            'link' => 'https://google.de',
        ];
    }
}
