import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Bookmark from '#models/bookmarks'

export default class extends BaseSeeder {
  async run() {
    await Bookmark.createMany([
      {
        title : 'AdonisJs',
        url: 'https://adonisjs.com',
        content: 'The web framework for artisans',
      },
      {
        title : 'AdonisJs Docs',
        url: 'https://docs.adonisjs.com',
        content: 'The official documentation for AdonisJs',
      }
    ])
  }
}