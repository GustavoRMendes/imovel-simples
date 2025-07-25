<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\RentalController;

Route::apiResource('/clientes', ClientController::class);
Route::apiResource('/imoveis', PropertyController::class);
