<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramExercise extends Model
{
    use HasFactory;

    protected $table = 'program_exercise'; 

    protected $fillable = [
        'program_id',
        'exercise_id',
    ];
}
