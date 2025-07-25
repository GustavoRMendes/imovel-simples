<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory;

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
