<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryDealTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_deal', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('deal_id')->references('id')->on('deals')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUuid('category_id')->references('id')->on('categories')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_deal');
    }
}
