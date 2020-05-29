# Laravel Sanctum SPA
Template dasar untuk membangun projek Laravel Sanctum SPA.
Saya terinspirasi dari [Laravel Vue SPA](https://github.com/cretueusebiu/laravel-vue-spa)

[![Latest Stable Version](https://poser.pugx.org/hilyahtech/laravel-sanctum-vue/v)](//packagist.org/packages/hilyahtech/laravel-sanctum-vue) [![Total Downloads](https://poser.pugx.org/hilyahtech/laravel-sanctum-vue/downloads)](//packagist.org/packages/hilyahtech/laravel-sanctum-vue) [![Latest Unstable Version](https://poser.pugx.org/hilyahtech/laravel-sanctum-vue/v/unstable)](//packagist.org/packages/hilyahtech/laravel-sanctum-vue) [![License](https://poser.pugx.org/hilyahtech/laravel-sanctum-vue/license)](//packagist.org/packages/hilyahtech/laravel-sanctum-vue)

## Fitur
* Laravel 7
* Vue + Vue-router + Vuex
* Autentikasi dengan Sanctum
* Bulma + Buefy + Font Awesome 5 or (Material Design Icons [docs Buefy](https://buefy.org/documentation/start))

## Instalasi
* `composer create-project hilyahtech/laravel-sanctum-vue`
* `copy .env.example .env` untuk copy .env
* `php artisan key:generate`
* `php artisan migrate`
* `yarn install` atau `npm install`

## Pemakaian

##### Developer
```sh
yarn watch atau npm run watch
```

##### Produksi
```sh
yarn prod atau npm run prod
```