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
use App\Models\TrainerInfo;
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
        ], 200);
    }

    //function for user to add meal
    public function addMeal(Request $request) {
        $user_id = Auth::id();

        //adding meal info
        $meal = Meal::insert([
            'title' => $request->title,
            'calories' => $request->calories,
            'fats' => $request->fats,
            'protein' => $request->protein,
            'image' => $request->image,
            'category' => $request->category,
            'user_id' => $user_id
        ]);



        // meal ingredients
        $ingredients = $request->ingredients;
        $meal->ingredients()->attach($ingredients);

        return response()->json([
            'status' => 'success',
            'meal' => $meal
        ], 200);
    }

    public function deleteMeal($id) {
        if ($id) {
            MealIngredient::where('meal_id', $id)->delete();
            Save::where('meal_id', $id)->delete();
        }
        Meal::find($id)->delete();

        return response()->json([
            'status' => 'deleted'
        ], 200);
    }

    public function deleteIngredient($id) {
        if ($id) {
            MealIngredient::where('ingredient_id', $id)->delete();
        }
        Ingredient::find($id)->delete();

        return response()->json([
            'status' => 'deleted'
        ], 200);
    }

}
