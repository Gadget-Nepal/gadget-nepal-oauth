<?php

use App\Http\Controllers\SinglePageController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

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

//Auth::routes();

//Clear Cache
Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    Artisan::call('route:clear');
    return "Cache is cleared";
});

//Laravel Passport Routes
Route::middleware('auth:api')->get('oauth/authorize',[\Laravel\Passport\Http\Controllers\AuthorizationController::class,'authorize']);
Route::middleware('auth:api')->post('oauth/authorize',[\Laravel\Passport\Http\Controllers\ApproveAuthorizationController::class,'approve']);
Route::middleware('auth:api')->delete('oauth/authorize',[\Laravel\Passport\Http\Controllers\DenyAuthorizationController::class,'deny']);

Route::middleware('auth:api')->get('oauth/clients',[\Laravel\Passport\Http\Controllers\ClientController::class,'forUser']);
Route::middleware('auth:api')->post('oauth/clients',[\Laravel\Passport\Http\Controllers\ClientController::class,'store']);
Route::middleware('auth:api')->delete('oauth/clients/{client_id}',[\Laravel\Passport\Http\Controllers\ClientController::class,'destroy']);
Route::middleware('auth:api')->put('oauth/clients/{client_id}',[\Laravel\Passport\Http\Controllers\ClientController::class,'update']);


Route::middleware('auth:api')->get('oauth/personal-access-tokens',[\Laravel\Passport\Http\Controllers\PersonalAccessTokenController::class,'forUser']);
Route::middleware('auth:api')->post('oauth/personal-access-tokens',[\Laravel\Passport\Http\Controllers\PersonalAccessTokenController::class,'store']);
Route::middleware('auth:api')->delete('oauth/personal-access-tokens/{token_id}',[\Laravel\Passport\Http\Controllers\PersonalAccessTokenController::class,'destroy']);

Route::middleware('auth:api')->get('oauth/scopes',[\Laravel\Passport\Http\Controllers\ScopeController::class,'all']);

Route::middleware('auth:api')->post('oauth/token',[\Laravel\Passport\Http\Controllers\AccessTokenController::class,'issueToken']);
Route::middleware('auth:api')->post('oauth/token/refresh',[\Laravel\Passport\Http\Controllers\TransientTokenController::class,'refresh']);
Route::middleware('auth:api')->get('oauth/tokens',[\Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController::class,'forUser']);
Route::middleware('auth:api')->delete('oauth/tokens/{token_id}',[\Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController::class,'destroy']);


//Route::get('/authorize', function () {
//    return view('vendor.passport.authorize');
//});


//Route to handle all vue single page application
Route::get('/{any}', [SinglePageController::class, 'index'])->where('any', '.*');



