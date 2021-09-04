<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DealResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public static $wrap = null;

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'sustainable' => $this->sustainable,
            'free_shipping' => $this->free_shipping,
            'link' => $this->link,
            'price' => $this->price,
            'original_price' => $this->original_price,
            'published_at' => $this->created_at->diffForHumans(),
            'coupon_code' => $this->coupon_code,
            'image' => $this->image,
            'discount' => $this->getDiscount(),
            'expired' => $this->isExpired(),
            'html' => $this->html,
        ];
    }
}
