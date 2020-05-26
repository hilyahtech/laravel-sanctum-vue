<?php

use Illuminate\Support\Facades\Route;

/**
 * Web Routes SPA
 */

Route::get('{path}', function () {
    return view('spa');
})->where('path', '(.*)');
