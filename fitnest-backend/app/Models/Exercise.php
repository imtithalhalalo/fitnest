<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Program;

class Exercise extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'time',
        'description',
        'image',
        'is_done'
    ];

    public function programs() {
        return $this->belongsToMany(Program::class, 'program_exercise');
    }

    public function plans() {
        return $this->belongsToMany(PersonalPlans::class, 'exercise_plan');
    }
}
