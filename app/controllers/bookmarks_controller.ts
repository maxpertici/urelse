import type { HttpContext } from '@adonisjs/core/http'
import Bookmark from '#models/bookmarks'

export default class BookmarksController {
  public async index({ response }: HttpContext) {
    const bookmarks = await Bookmark.all()
    return response.json(bookmarks)
  }
  public async find({ request, response }: HttpContext) {
    const bookmarks = await Bookmark.find(request.param('id'))
    return response.json(bookmarks)
  }
}
