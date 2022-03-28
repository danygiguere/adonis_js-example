import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    return await User.all()
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.query().preload('posts').where('id', params.id).firstOrFail()
    return user
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
