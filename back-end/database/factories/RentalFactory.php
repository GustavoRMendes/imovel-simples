<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\Client;
use \App\Models\Property;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rental>
 */
class RentalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'client_id' => Client::factory(),
            'property_id' => Property::factory(),
            'start_date' => $this->faker->dateTimeBetween('-6 years', '-6 months')->format('Y-m-d'),
            'end_date' => null,
        ];
    }
}
