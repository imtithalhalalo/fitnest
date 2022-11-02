<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use App\Models\Exercise;
use App\Models\ProgramExercise;
use Illuminate\Support\Facades\Auth;

class ProgramController extends Controller {

    //function to get programs
    public function getPrograms() {
        $programs = Program::orderBy('num_weeks', 'desc')
                            ->get();

        return response()->json([
            'status' => 'success',
            'programs' => $programs
        ], 200);
    }


    //function to get exercises of program
    public function getExercisesOfProgram($id) {
        $program = Program::find($id);
        $exercise = $program->exercises;

        return response()->json([
            'status' => 'success',
            'exercise' => $exercise
        ], 200);
    }
}
