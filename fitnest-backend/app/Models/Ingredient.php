<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Meal;

class Ingredient extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'meal_id',
        'ingredient_id',
        'user_id'
    ];

    public function meals() {
        return $this->belongsToMany(Meal::class, 'ingredient_meal');
    }
}
