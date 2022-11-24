<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Exercise;
class PersonalPlans extends Model
{
    use HasFactory;
    protected $table = 'personal_plans'; 

    protected $fillable = [
        'user_id',
        'trainer_id',
        'title',
        'num_weeks',
        'image'
    ];

    public function exercises() {
        return $this->belongsToMany(Exercise::class, 'exercise_plan', 'plan_id', 'exercise_id');
    }
}
