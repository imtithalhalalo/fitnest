<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use App\Models\Exercise;
use App\Models\ProgramExercise;
use App\Models\Meal;
use App\Models\Ingredient;
use App\Models\MealIngredient;
use App\Models\Save;
use Illuminate\Support\Facades\Auth;

class TrainerController extends Controller {

    //function for user to add ingredient
    public function addIngredient(Request $request) {
        
        $ingredient = new Ingredient;
        $ingredient->user_id = Auth::id();
        $ingredient->ingredient = $request->ingredient;
        $ingredient->save();

        return response()->json([
            'message' => 'added',
            'ingredient' => $ingredient
        ],200);
    }
    
    //function for user to add meal
    public function addMeal(Request $request) {
        $user_id = Auth::user()->id;

        //adding meal info
        $meal = new Meal;
        $meal->title = $request->title;
        $meal->calories = $request->calories;
        $meal->fats = $request->fats;
        $meal->protein = $request->protein;
        $meal->image = $request->image;
        $meal->category = $request->category;
        $meal->user_id = $user_id;
        $meal->save();

        // meal ingredients
        $ingredients = $request->ingredients;
        $meal->ingredients()->attach($ingredients);

        return response()->json([
            'status' => 'success',
            'meal' => $meal
        ],200);
    }

}
