<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ChatController extends Controller {

    //function to get trainers
    public function getTrainers() {
        $trainers = User::where('user_type', 'trainer')
            ->orderBy('name', 'asc')
            ->get();

        return response()->json([
            'status' => 'success',
            'trainers' => $trainers
        ], 200);
    }

    //function to get users
    public function getUsers() {
        $users = User::where('user_type', 'user')
            ->orderBy('name', 'asc')
            ->get();

        return response()->json([
            'status' => 'success',
            'users' => $users
        ], 200);
    }
}
