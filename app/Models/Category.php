<?php

namespace App\Models;

use App\Models\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory, UsesUuid;

    protected $fillable = [
        'id',
        'name',
        'slug',
        'uuid',
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function deals()
    {
        return $this->belongsToMany(Deal::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
