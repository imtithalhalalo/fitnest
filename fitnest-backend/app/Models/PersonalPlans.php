<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
