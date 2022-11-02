<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainerInfo extends Model
{
    use HasFactory;

    protected $table = 'trainers_info'; 

    protected $fillable = [
        'user_id',
        'education',
        'experience',
        'working_hours',
    ];
}
