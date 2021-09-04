<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Deal extends Model
{
    use HasFactory, Sluggable, UsesUuid;

    protected $guarded = [
        'updated_at',
        'created_at'
    ];

    protected $hidden = ['id'];

    protected $casts = [
        'html' => 'json',
        'link' => 'json',
        'image' => 'json',
        'price' => 'json',
        'expires_at' => 'json',
        'original_price' => 'json',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function isExpired()
    {
        return empty($this->expired_at) ? null : Carbon::parse($this->expired_at) > Carbon::now();
    }

    public function getDiscount()
    {
        if ($this->price > 0 && $this->original_price > 0) {
            $discount = round((1 - ($this->price / $this->original_price)) * 100);
            return "-{$discount}%";
        }
        return null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
