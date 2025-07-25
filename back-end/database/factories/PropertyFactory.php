<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Apartamento ' . $this->faker->randomNumber(1),
            'floor' => $this->faker->randomElement([1, 2]),
            'status' => $this->faker->randomElement(['available', 'rented']),
        ];
    }
}
