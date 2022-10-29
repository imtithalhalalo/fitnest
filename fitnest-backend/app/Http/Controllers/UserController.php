<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\Water;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //function to add user info
    public function addInfo(Request $request) {

        $user_info = UserInfo::create([
            'user_id' => Auth::user()->id,
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
}
