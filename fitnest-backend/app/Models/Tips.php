<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tips extends Model
{
    use HasFactory;
    protected $table = 'meal_tips'; 

    protected $fillable = [
        'meal_id',
        'tip'
    ];
}
