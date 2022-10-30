<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ingredient;

class Meal extends Model
{
    use HasFactory;

    protected $fillable = [
        'ingredient',
        'calories',
        'fats',
        'protein',
        'image',
        'category',
        'user_id'
    ];
    
    public function ingredients() {
        return $this->belongsToMany(Ingredient::class, 'ingredient_meal');
    }

    public function users() {
        return $this->belongsToMany(User::class, 'saves');
    }

}
