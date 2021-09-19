<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        return Inertia::render('Categories/Show', [
            'category' => new CategoryResource(Category::where('slug', $slug)->first())
        ]);
    }
}
