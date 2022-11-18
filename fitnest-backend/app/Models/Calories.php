<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calories extends Model
{
    use HasFactory;
    protected $table = 'calories'; 

    protected $fillable = [
        'user_id',
        'remaining',
    ];
}
