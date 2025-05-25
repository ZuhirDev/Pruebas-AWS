<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('prueba', function(){
    return response()->json(['message' => "mensaje de mamañema vacaburra"]);
});


Route::get('hello', function(){
    return response()->json(['message' => 'Hola desde el backend']);
});