<?php

use App\Http\Controllers\MealController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\TrainerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["middleware"=> "cors"], function(){

    Route::group(["middleware" => "user.role"], function(){
        Route::post('/add_info',[UserController::class, 'addInfo'])->name('add-info');
        Route::post('/update_info',[UserController::class, 'updateInfo'])->name('update-info');
        Route::post('/add_water_intake',[UserController::class, 'addWaterIntake'])->name('add-water-intake');
        Route::post('/save_meal',[UserController::class, 'saveMeal'])->name('save-meal');
    });

    Route::group(["middleware" => "trainer.role"], function(){
        Route::post('/add_ingredient',[TrainerController::class, 'addIngredient'])->name('add-ingredient');
        Route::post('/add_meal',[TrainerController::class, 'addMeal'])->name('add-meal');
        Route::post('/delete_meal/{id?}',[TrainerController::class, 'deleteMeal'])->name('delete-meal');
        Route::post('/delete_ingredient/{id?}',[TrainerController::class, 'deleteIngredient'])->name('delete-ingredient');
    });    
    
     //meal apis
     Route::group(['prefix' => 'meals'], function(){
        Route::get('/category/{category?}',[MealController::class, 'getMealsByCategory'])->name('get-meal');
        Route::get('/ingredient/{id?}',[MealController::class, 'getMealIngredients'])->name('get-meal-ingredients');
    });
    
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/profile',[AuthController::class, 'profile'])->name('profile');
    Route::post('/update_profile',[AuthController::class, 'updateProfile'])->name('update-profile');
    Route::post('/upload_image',[UserController::class, 'uploadImage'])->name('upload-image');
    Route::post('/remove_image', [AuthController::class, 'removeImage'])->name('remove-image');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
