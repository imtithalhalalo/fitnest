<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\WaterIntake;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //function to add user info
    public function addInfo(Request $request) {

        $user_info = UserInfo::create([
            'user_id' => Auth::id(),
            'weight_goal' => $request->weight_goal,
            'height' => $request->height,
            'dob' => $request->dob,
            'age' => $request->age,
            'country' => $request->country,
        ]);

        return response()->json([
            'message' => 'Added Successfully! ',
            'user_info' => $user_info
        ]);

    }

    public function updateInfo(Request $request) {
        //update user's info
        $id = Auth::id();

        if(!$id){
            return response()->json([
                "status"=>"failed"
            ], 500);
        }

        $user_info = UserInfo::find($id);
        $user_info->weight_goal = $request->weight_goal;
        $user_info->height = $request->height;
        $user_info->dob = $request->dob;
        $user_info->age = $request->age;
        $user_info->country = $request->country;
        $user_info->save();

        return response()->json([
            "status"=>"updated",
            "user_info" => $user_info
        ], 200);
    }

    //function to upload user image
    public function uploadImage(Request $request) {
        $id = Auth::user()->id;
        $user = User::find($id);
        $user->image = $request->image;
        $user->save();

        return response()->json([
            'status' => 'uploaded',
        ],200);
    }

    //function to add water intake by user
    public function addWaterIntake(Request $request) {
        
        $water = WaterIntake::create([
            'user_id' => Auth::user()->id,
            'water_intake' => $request->water_intake,
        ]);

        return response()->json([
            'message' => 'Added Successfully! ',
            'user_water' => $water
        ]);
    }
}
