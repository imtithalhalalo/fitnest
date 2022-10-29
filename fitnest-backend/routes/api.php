<?php

use App\Http\Controllers\MealController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["middleware"=> "cors"], function(){
    Route::group(['middleware' => 'api'], function($router) {
        Route::group(["middleware" => "user.role"], function(){
            Route::post('/add_info',[UserController::class, 'addInfo'])->name('add-info');
            Route::post('/update_info',[UserController::class, 'updateInfo'])->name('update-info');
            Route::post('/update_profile',[UserController::class, 'updateProfile'])->name('update-profile');
            Route::post('/upload_image',[UserController::class, 'uploadImage'])->name('upload-image');
            Route::post('/add_water_intake',[UserController::class, 'addWaterIntake'])->name('add-water-intake');
        });
    });

    //auth routes
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
