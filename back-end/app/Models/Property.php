<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'floor',
        'contact',
        'status',
        'created_at',
        'updated_at',
    ];

    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }
}
