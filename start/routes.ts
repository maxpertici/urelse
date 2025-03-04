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
    react: 'ur|else',
  }
})

router.get('api/v1/bookmarks', [BookmarksController, 'index'])

router.get('api/v1/bookmarks/:id', [BookmarksController, 'find'])
