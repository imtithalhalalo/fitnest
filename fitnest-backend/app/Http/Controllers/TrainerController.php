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

}
