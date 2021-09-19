<?php

namespace App\Http\Resources;

use App\Http\Resources\DealResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'name' => $this->name,
            'deals' => DealResource::collection($this->deals)
        ];
    }
}
