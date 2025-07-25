<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'cpf' => $this->faker->unique()->numerify('###########'),
            'number' => $this->faker->phoneNumber(),
            'sex' => $this->faker->randomElement(['male', 'female', 'other']),
            'birth_date' => $this->faker->dateTimeBetween('-70 years', '-18 years')->format('Y-m-d'),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}
