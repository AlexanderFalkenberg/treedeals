<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deals', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('user_id');
            $table->string('name');
            $table->string('slug')->nullable()->index();
            $table->integer('votes')->default(0);
            $table->float('price');
            $table->float('original_price')->nullable();
            $table->text('update')->nullable();
            $table->text('description')->nullable();
            $table->json('html')->nullable();
            $table->json('image')->nullable();
            $table->boolean('change_link')->default(false);
            $table->boolean('free_shipping')->default(false);
            $table->boolean('campaign')->default(false);
            $table->boolean('approved')->default(false)->index();
            $table->string('expires_at')->nullable()->default(null);
            $table->string('coupon_code')->nullable();
            $table->mediumText('link');
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
        Schema::dropIfExists('deals');
    }
}
