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
use App\Models\Tips;
use App\Models\TrainerInfo;
use Illuminate\Support\Facades\Auth;

class TrainerController extends Controller {

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

        if (!$id) {
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

        $meal = new Meal;
        $meal->user_id = Auth::id();
        $meal->category = $request->category;
        $meal->title = $request->title;
        $meal->fats = $request->fats;
        $meal->protein = $request->protein;
        $meal->calories = $request->calories;
        $meal->image = $request->image;
        $meal->save();

        $meal_id = $meal->id;

        //meal tips
        $tips = json_decode($request->tips);
        foreach($tips as $tip) {
            $req = new Tips;
            $req->meal_id = $meal_id;
            $req->tip = $tip->text;
            $req->save();
        }

        if ($request->ingredients != []) {
            // meal ingredients
            $ingredients = $request->ingredients;
            $meal->ingredients()->attach($ingredients);
        }


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


    //function to add exercises
    public function addExercise(Request $request) {
        $user_id = Auth::id();

        //adding exercise info
        $exercise = Exercise::create([
            'user_id' => $user_id,
            'title' => $request->title,
            'time' => $request->time,
            'description' => $request->description,
            'image' => $request->image
        ]);

        return response()->json([
            'status' => 'success',
            'exercise' => $exercise
        ], 200);
    }

    public function connectExerciseToProgram(Request $request) {
        $user_id = Auth::id();

        //connecting exercise to program
        $connect = ProgramExercise::create([
            'user_id' => $user_id,
            'program_id' => $request->program_id,
            'exercise_id' => $request->exercise_id,
        ]);

        return response()->json([
            'status' => 'success',
            'connected' => $connect
        ], 200);
    }
}
