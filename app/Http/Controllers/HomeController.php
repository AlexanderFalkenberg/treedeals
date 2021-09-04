<?php

namespace App\Http\Controllers;

use App\Models\Deal;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'deals' =>  Deal::limit(10)->get()
        ]);
    }
}
