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

    Route::post('logout', 'LoginController@logout');

});

Route::group(['middleware' => 'guest:api', 'namespace' => 'Auth'], function() {

    Route::post('login', 'loginController@login');
    Route::post('register', 'RegisterController@register');

    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'ResetPasswordController@reset');

    Route::post('email/verify/{user}', 'VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'VerificationController@resend');

});