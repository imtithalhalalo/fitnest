<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Meal;
use App\Models\Ingredient;
use App\Models\MealIngredient;

class MealController extends Controller {
    
    //function to get meals by category
    public function getMealsByCategory($category) {
        $meals = Meal::where('category', $category)
                        ->orderBy('title', 'asc')
                        ->get();

        return response()->json([
            'status' => 'success',
            'meals' => $meals
        ],200);
    }
    public function getMealsById($id) {
        $meal = Meal::find($id);

        return $meal;
    }
    //function to get meals details
    public function getMealIngredients($id) {
        $meal = Meal::find($id);
        $ingredients = $meal->ingredients;
        return response()->json([
            'status' => 'success',
            'ingredients' => $ingredients
        ],200);
    }

    public function getLastIngredient() {
        $ingredient = Ingredient::latest()->first();

        return $ingredient;
    }
}
