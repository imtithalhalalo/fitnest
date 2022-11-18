<?php

namespace App\Http\Controllers;

use App\Models\Calories;
use App\Models\Done;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\WaterIntake;
use App\Models\Save;
use App\Models\Sleep;
use App\Models\Weight;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //function to add user info
    public function addInfo(Request $request)
    {

        $user_info = UserInfo::create([
            'user_id' => Auth::id(),
            'weight_goal' => $request->weight_goal,
            'calories_goal' => $request->calories_goal,
            'height' => $request->height,
            'age' => $request->age,
            'gender' => $request->gender,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude,
        ]);

        return response()->json([
            'message' => 'Added Successfully! ',
            'user_info' => $user_info
        ]);
    }

    public function updateInfo(Request $request)
    {
        //update user's info
        $id = Auth::id();

        if (!$id) {
            return response()->json([
                "status" => "failed"
            ], 500);
        }

        $user_info = UserInfo::find($id);
        $user_info->weight_goal = $request->weight_goal;
        $user_info->calories_goal = $request->calories_goal;
        $user_info->save();

        return response()->json([
            "status" => "updated",
            "user_info" => $user_info
        ], 200);
    }

    //function to get info for specific user
    public function getInfo()
    {
        $id = Auth::id();
        $info = UserInfo::find($id);

        return response()->json([
            'status' => 'success',
            'user_info' => $info
        ], 200);
    }

    public function getSpecificTrainerInfo($id)
    {
        $info = User::find($id);

        return response()->json([
            'status' => 'success',
            'trainer_info' => $info
        ], 200);
    }
    //function to add water intake by user
    public function addWaterIntake(Request $request)
    {
        //check if already exist
        if (
            WaterIntake::where('user_id', '=', Auth::id())->exists()
            && WaterIntake::where(DB::raw('DATE(`created_at`)'),  Carbon::now()->format('Y-m-d'))->exists()
        ) {
            $water_intake_exists = WaterIntake::where('user_id', '=', Auth::id())
            ->where(DB::raw('DATE(`created_at`)'),  Carbon::now()->format('Y-m-d'))->get();
            foreach($water_intake_exists as $key => $value){
                $value->water_intake += $request->water_intake;
                WaterIntake::where('user_id', Auth::id())
                ->where(DB::raw('DATE(`created_at`)'),  Carbon::now()->format('Y-m-d'))
                ->update(array('water_intake' => $value->water_intake));
            }

            
            
            return $water_intake_exists;
        }

        $water = new WaterIntake;
        $water->user_id = Auth::id();
        $water->water_intake = $request->water_intake;
        $water->save();

        return response()->json([
            'status' => 'success',
            'user_water' => $water
        ]);
    }

    public function getWaterLastWeek() {
        $date = Carbon::today()->subDays(7);
        $water = WaterIntake::where('created_at', '>=', $date)->get();
        return $water;
    }

    public function getWaterIntake() {
        $water_history = WaterIntake::where('user_id', '=', Auth::id())
            ->select('user_id','water_intake', DB::raw('DATE(`created_at`)'))
            ->get();
        $num = 0;
        foreach ($water_history as $key => $value) {
            $num += $value->water_intake;
        }
        return $num;
    }

    public function getWeightLast5Month() {
        return Weight::select('*')
            ->whereBetween(
                'created_at',
                [Carbon::now()->subMonth(6), Carbon::now()]
            )
            ->get();
    }

    public function addWeight(Request $request) {
        $weight = new Weight;
        $weight->user_id = Auth::id();
        $weight->weight = $request->weight;
        $weight->date = $request->date;
        $weight->save();

        return response()->json([
            'status' => 'saved',
        ], 200);
    }

    //function for user to save meal
    public function saveMeal(Request $request) {

        //check if already exist
        if (
            Save::where('user_id', '=', Auth::id())->exists()
            && Save::where('meal_id', '=', $request->meal_id)->exists()
        ) {
            return response()->json([
                'status' => 'already saved, check your saved meals',
            ], 200);
        }
        $save = new Save;
        $save->user_id = Auth::id();
        $save->meal_id = $request->meal_id;
        $save->save();

        return response()->json([
            'status' => 'saved',
        ], 200);
    }

    //function for user to save meal
    public function getSavedMeals()
    {
        $id = Auth::id();
        $user = User::find($id);
        $meals = $user->meals;
        return response()->json([
            'status' => 'success',
            'meals' => $meals
        ], 200);
    }

    //function for user to mark as done a step
    public function doneExercises(Request $request)
    {
        $done = new Done();
        $done->user_id = Auth::id();
        $done->exercise_id = $request->exercise_id;
        $done->save();

        return response()->json([
            'status' => 'done',
        ], 200);
    }

    public function addSleepDuration(Request $request)
    {

        $sleep = new Sleep();
        $sleep->user_id = Auth::id();
        $sleep->slept = $request->slept;
        $sleep->woke_up = $request->woke_up;
        $sleep->duration = $request->duration;
        $sleep->save();

        return response()->json([
            'status' => 'done',
            'duration' => $sleep->duration
        ], 200);
    }

    public function getSleepDuration() {
        $sleep = Sleep::latest('id')->first();

        return response()->json([
            'status' => 'done',
            'duration' => $sleep->duration
        ], 200);
    }

}
