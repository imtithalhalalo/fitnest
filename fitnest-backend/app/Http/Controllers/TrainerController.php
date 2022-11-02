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

class TrainerController extends Controller
{

    //function to add trainer info
    public function addInfo(Request $request) {

        $trainer_info = TrainerInfo::create([
            'user_id' => Auth::id(),
            'education' => $request->education,
            'experience' => $request->experience,
            'working_hours' => $request->working_hours,
        ]);

        return response()->json([
            'message' => 'Added Successfully! ',
            'trainer_info' => $trainer_info
        ]);
    }

    public function updateInfo(Request $request) {
        //update trainer's info
        $id = Auth::id();

        if(!$id){
            return response()->json([
                "status" => "failed"
            ], 500);
        }

        $trainer_info = TrainerInfo::find($id);
        $trainer_info->education = $request->education;
        $trainer_info->experience = $request->experience;
        $trainer_info->working_hours = $request->working_hours;
        $trainer_info->save();

        return response()->json([
            "status" => "updated",
            "trainer_info" => $trainer_info
        ], 200);
    }

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

    //function to get info for specific user
    public function getInfo() {
        $id = Auth::id();
        $info = TrainerInfo::find($id);

        return response()->json([
            'status' => 'success',
            'trainer_info' => $info
        ], 200);
    }

    //function to add programs
    public function addProgram(Request $request) {
        $user_id = Auth::id();

        //adding program info
        $program = Program::create([
            'title' => $request->title,
            'num_weeks' => $request->num_weeks,
            'image' => $request->image,
            'user_id' => $user_id
        ]);

        return response()->json([
            'status' => 'success',
            'program' => $program
        ], 200);
    }
}
