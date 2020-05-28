<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * API Routes SPA
 */

Route::group(['middleware' => 'auth:api', 'namespace' => 'Auth'], function() {
    Route::get('user', function() {
        return \App\User::all();
    });
});

Route::group(['middleware' => 'guest:api', 'namespace' => 'Auth'], function() {
    Route::post('login', 'loginController@login');
});