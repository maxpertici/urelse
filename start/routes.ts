/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const BookmarksController = () => import('#controllers/bookmarks_controller')

router.get('/', async () => {
  return {
    root: 'ur|else',
  }
})

router.get('/bookmarks', [BookmarksController, 'index'])
