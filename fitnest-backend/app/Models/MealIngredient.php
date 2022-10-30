<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealIngredient extends Model
{
    use HasFactory;

    protected $table = 'ingredient_meal'; 

    protected $fillable = [
        'meal_id',
        'ingredient_id'
    ];
}
