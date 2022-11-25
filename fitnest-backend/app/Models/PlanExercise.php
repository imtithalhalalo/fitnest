<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanExercise extends Model
{
    use HasFactory;

    protected $table = 'exercise_plan'; 

    protected $fillable = [
        'plan_id',
        'exercise_id',
    ];
}
