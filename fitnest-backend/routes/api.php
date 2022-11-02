<?php

use App\Http\Controllers\MealController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\TrainerController;
use App\Models\TrainerInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["middleware"=> "cors"], function(){

    Route::group(["middleware" => "user.role"], function(){
        Route::post('/user_info',[UserController::class, 'addInfo'])->name('user-info');
        Route::post('/update_info',[UserController::class, 'updateInfo'])->name('update-info');
        Route::post('/add_water_intake',[UserController::class, 'addWaterIntake'])->name('add-water-intake');
        Route::post('/save_meal',[UserController::class, 'saveMeal'])->name('save-meal');
        Route::get('/user_info',[UserController::class, 'getInfo'])->name('get-user-info');
    });

    Route::group(["middleware" => "trainer.role"], function(){
        Route::post('/trainer_info',[TrainerController::class, 'addInfo'])->name('trainer-info');
        Route::post('/update_info',[TrainerController::class, 'updateInfo'])->name('update-info');
        Route::post('/add_ingredient',[TrainerController::class, 'addIngredient'])->name('add-ingredient');
        Route::post('/add_meal',[TrainerController::class, 'addMeal'])->name('add-meal');
        Route::post('/add_program',[TrainerController::class, 'addProgram'])->name('add-program');
        Route::post('/add_exercise',[TrainerController::class, 'addExercise'])->name('add-exercise');
        Route::post('/delete_meal/{id?}',[TrainerController::class, 'deleteMeal'])->name('delete-meal');
        Route::post('/delete_ingredient/{id?}',[TrainerController::class, 'deleteIngredient'])->name('delete-ingredient');
        Route::get('/trainer_info',[TrainerController::class, 'getInfo'])->name('get-trainer-info');
    });    
    
     //meal apis
     Route::group(['prefix' => 'meals'], function(){
        Route::get('/category/{category?}',[MealController::class, 'getMealsByCategory'])->name('get-meal');
        Route::get('/ingredient/{id?}',[MealController::class, 'getMealIngredients'])->name('get-meal-ingredients');
    });
    
    //program apis
    Route::group(['prefix' => 'programs'], function(){
        Route::get('/',[ProgramController::class, 'getPrograms'])->name('get-programs');
        Route::get('/exercise/{id?}',[ProgramController::class, 'getExercisesOfProgram'])->name('get-exercise-of-program');
        Route::get('/exercises',[ProgramController::class, 'getExercises'])->name('get-exercises');
    }); 
    
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/profile',[AuthController::class, 'profile'])->name('profile');
    Route::post('/update_profile',[AuthController::class, 'updateProfile'])->name('update-profile');
    Route::post('/upload_image',[UserController::class, 'uploadImage'])->name('upload-image');
    Route::post('/remove_image', [AuthController::class, 'removeImage'])->name('remove-image');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
});
