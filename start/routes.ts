/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import I18n from '@ioc:Adonis/Addons/I18n'
import Route from '@ioc:Adonis/Core/Route'

for (let lang of I18n.supportedLocales()) {
  Route.group(() => {
    Route.get('/', 'DemoController.index')
    Route.post('/register', 'AuthController.register')
    Route.post('/login', 'AuthController.login')
    Route.post('/logout', 'AuthController.logout')

    Route.get('/users', 'UsersController.index').middleware('auth')
    Route.get('/users/:id', 'UsersController.show').middleware('auth')
    Route.put('/users', 'UsersController.update').middleware('auth')
    Route.delete('/users', 'UsersController.destroy').middleware('auth')
    Route.get('/posts', 'PostsController.index').middleware('auth')
    Route.get('/posts/:id', 'PostsController.show').middleware('auth')
    Route.post('/posts', 'PostsController.store').middleware('auth')
    Route.put('/posts', 'PostsController.update').middleware('auth')
    Route.delete('/posts', 'PostsController.destroy').middleware('auth')
  }).prefix(`/${lang}/api`)
}
