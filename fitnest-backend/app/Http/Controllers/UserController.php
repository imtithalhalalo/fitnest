<?php

namespace App\Http\Controllers;

use App\Models\Done;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\WaterIntake;
use App\Models\Save;
use App\Models\Weight;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

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

        $water = WaterIntake::create([
            'user_id' => Auth::id(),
            'water_intake' => $request->water_intake,
            'date' => $request->date
        ]);

        return response()->json([
            'status' => 'success',
            'user_water' => $water
        ]);
    }

    public function getWaterLastWeek() {
        $previous_week = strtotime("-1 week +1 day");
        $start_week = strtotime("last sunday", $previous_week);
        $end_week = strtotime("next sunday", $start_week);
        $start_week = date("Y-m-d", $start_week);
        $end_week = date("Y-m-d", $end_week);

        return WaterIntake::select('*')->where('user_id', Auth::id())->whereBetween('created_at', [$start_week, $end_week])->get();
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

}
