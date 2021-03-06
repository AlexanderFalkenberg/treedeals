<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DealController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Home


Route::get('/', [HomeController::class, 'index']);

// Deals

Route::get('/deals/{deal}', [DealController::class, 'show'])->name('deal.show');


// Categories

Route::get('/{categories}', [CategoryController::class, 'show'])->name('category.show');
