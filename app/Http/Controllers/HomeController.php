<?php

namespace App\Http\Controllers;

use App\Models\Deal;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\DealResource;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\Index\HomeResource;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'newest' => DealResource::collection(Deal::limit(5)->get()),
            'budget' => DealResource::collection(Deal::where('price', '<', 30)->limit(5)->get()),
            'beauty' => DealResource::collection(Deal::whereHas('categories', function (Builder $query) {
                $query->where('slug', 'beauty-pflege');
            })->limit(5)->get()),
        ]);
    }
}
