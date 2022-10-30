<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Meal;
use App\Models\Ingredient;

class MealController extends Controller {
    
    //function to get meals by category
    public function getMealsByCategory($category) {
        $meals = Meal::where('category', '=', $category)
                        ->orderBy('title', 'asc')
                        ->get();
        return response()->json($meals);
    }

}
