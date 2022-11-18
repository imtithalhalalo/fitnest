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
        Route::get('/get_weight',[UserController::class, 'getWeightLast5Month'])->name('get-weight');
        Route::post('/add_weight',[UserController::class, 'addWeight'])->name('add-weight');
        Route::get('/get_water_last_week',[UserController::class, 'getWaterLastWeek'])->name('get-water-intake');
        Route::post('/save_meal',[UserController::class, 'saveMeal'])->name('save-meal');
        Route::post('/add_sleep_duration',[UserController::class, 'addSleepDuration'])->name('add-sleep-duration');
        Route::get('/get_sleep_duration',[UserController::class, 'getSleepDuration'])->name('get-sleep-duration');
        Route::get('/saved_meals', [UserController::class, 'getSavedMeals'])->name('saved-meals');
        Route::post('/done_exercises', [UserController::class, 'doneExercises'])->name('done-exercises');
        Route::get('/get_user_info',[UserController::class, 'getInfo'])->name('get-user-info');
        Route::post('/remaining_calories', [UserController::class, 'addRemainingCalories'])->name('remaining-calories');
        Route::get('/water_history', [UserController::class, 'getWaterIntake'])->name('water-intake');
    });

    Route::group(["middleware" => "trainer.role"], function(){
        Route::post('/trainer_info',[TrainerController::class, 'addInfo'])->name('trainer-info');
        Route::post('/update_trainer_info',[TrainerController::class, 'updateInfo'])->name('update-info');
        Route::post('/add_ingredient',[TrainerController::class, 'addIngredient'])->name('add-ingredient');
        Route::post('/add_meal',[TrainerController::class, 'addMeal'])->name('add-meal');
        Route::post('/add_program',[TrainerController::class, 'addProgram'])->name('add-program');
        Route::post('/add_exercise',[TrainerController::class, 'addExercise'])->name('add-exercise');
        Route::post('/connect_exercise',[TrainerController::class, 'connectExerciseToProgram'])->name('connect-exercise');
        Route::post('/delete_meal/{id?}',[TrainerController::class, 'deleteMeal'])->name('delete-meal');
        Route::post('/delete_ingredient/{id?}',[TrainerController::class, 'deleteIngredient'])->name('delete-ingredient');
        Route::get('/get_trainer_info',[TrainerController::class, 'getInfo'])->name('get-trainer-info');
    });    
    
     //meal apis
     Route::group(['prefix' => 'meals'], function(){
        Route::get('/{id?}',[MealController::class, 'getMealsById'])->name('get-meal-by-id');
        Route::get('/category/{category?}',[MealController::class, 'getMealsByCategory'])->name('get-meal');
        Route::get('/ingredient/{id?}',[MealController::class, 'getMealIngredients'])->name('get-meal-ingredients');
        Route::post('/get_last_ingredient',[MealController::class, 'getLastIngredient']);
    });
    
    //program apis
    Route::group(['prefix' => 'programs'], function(){
        Route::get('/',[ProgramController::class, 'getPrograms'])->name('get-programs');
        Route::get('/exercise/{id?}',[ProgramController::class, 'getExercisesOfProgram'])->name('get-exercise-of-program');
        Route::get('/exercises',[ProgramController::class, 'getExercises'])->name('get-exercises');
    }); 


    //chat apis
    Route::group(['prefix' => 'chat'], function(){
        Route::get('/trainer',[ChatController::class, 'getTrainers'])->name('get-trainers');
        Route::get('/user',[ChatController::class, 'getUsers'])->name('get-users');
        Route::get('/contact/{id?}',[ChatController::class, 'getContactInfo'])->name('get-contact');
    }); 
    Route::group(['middleware' => 'api'], function() {
        Route::post('/register', [AuthController::class, 'register'])->name('register');
        Route::post('/login', [AuthController::class, 'login'])->name('login');
        Route::post('/profile',[AuthController::class, 'profile'])->name('profile');
        Route::post('/update_profile',[AuthController::class, 'updateProfile'])->name('update-profile');
        Route::post('/upload_image',[AuthController::class, 'uploadImage'])->name('upload-image');
        Route::post('/remove_image', [AuthController::class, 'removeImage'])->name('remove-image');
        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
        Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
    });
   
});
