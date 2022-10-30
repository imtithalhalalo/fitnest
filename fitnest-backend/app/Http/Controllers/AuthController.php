<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller {
    
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
            'email' => 'required|string|email|max:100',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user,

        ], 201);
    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function profile() {
        return response()->json(auth()->user());
    }

    public function updateProfile(Request $request) {
        //update user's name and email and phone_num
        $id = Auth::user()->id;

        if(!$id){
            return response()->json([
                "status"=>"failed"
            ], 500);
        }

        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone_num = $request->phone_num;
        $user->save();

        return response()->json([
            "status"=>"success",
            "user" => $user
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

    public function logout() {
        auth()->logout();

        return response()->json(['message' => 'User successfully logged out.']);
    }

    protected function respondWithToken($token) {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            // 'expires_in' => Auth::factory()->getTTL() * 60
        ]);
    }
}
