<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * API Routes SPA
 */

Route::group(['middleware' => 'auth:sanctum', 'namespace' => 'Auth'], function() {
    Route::get('user', function() {
        return response()->json(Auth::user());
    });
});

Route::group(['middleware' => 'guest:api', 'namespace' => 'Auth'], function() {
    Route::post('login', 'loginController@login');
});