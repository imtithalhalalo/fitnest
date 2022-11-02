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
}
