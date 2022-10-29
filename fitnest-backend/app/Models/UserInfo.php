<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class UserInfo extends Model
{
    use HasFactory;

    protected $table = 'users_info'; 

    protected $fillable = [
        'user_id',
        'weight_goal',
        'height',
        'dob',
        'age',
        'country'
    ];
}
