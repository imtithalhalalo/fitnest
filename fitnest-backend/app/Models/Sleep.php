<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sleep extends Model
{
    use HasFactory;
    protected $table = 'sleep_duration'; 

    protected $fillable = [
        'user_id',
        'slept',
        'woke_up',
        'duration',
    ];
}
