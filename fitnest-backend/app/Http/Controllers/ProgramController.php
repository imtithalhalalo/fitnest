<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use App\Models\Exercise;
use App\Models\PersonalPlans;
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

    //function to get exercises of program
    public function getExercises() {
        $exercises = Exercise::orderBy('time', 'asc')
                            ->get();

        return response()->json([
            'status' => 'success',
            'exercises' => $exercises
        ], 200);
    }
    //function to get programs
    public function getPersonalPlans() {
        $user_id = Auth::id();
        $programs = PersonalPlans::get();

        return response()->json([
            'status' => 'success',
            'plans' => $programs
        ], 200);
    }

    //function to get exercises of program
    public function getExercisesOfPlan($id) {
        $program = PersonalPlans::where('user_id', Auth::id())->where('id', $id)->get();
        $exercise = [];
        foreach($program as $p) {
            
            $exercise =  $p->exercises;
        }
        

        return response()->json([
            'status' => 'success',
            'exercise' => $exercise
        ], 200);
    }

}
