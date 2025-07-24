<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'name',
        'email',
        'cpf',
        'number',
        'sex',
        'birth_date',
        'status',
        'created_at',
        'updated_at',
    ];

    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }
}
