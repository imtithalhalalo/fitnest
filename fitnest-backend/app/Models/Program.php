<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Exercise;

class Program extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'num_weeks',
        'image'
    ];

    public function exercises() {
        return $this->belongsToMany(Exercise::class, 'program_exercise');
    }
}
