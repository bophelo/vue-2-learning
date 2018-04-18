<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('projects',
    'ProjectsController@store'
);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/shared', function () {
    return view('shared');
});

Route::get('/inputs', function () {
    return view('inputs');
});

Route::get('/skills', function () {
    //automatically converted to a json response
    return ['Laravel', 'Vue', 'PHP', 'Javascript','Tooling'];
});

Route::get('projects/create',
    'ProjectsController@create'
);

