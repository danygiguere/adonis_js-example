import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostControllerStoreValidator from 'App/Validators/PostControllerStoreValidator'

export default class PostsController {
  public async index({}: HttpContextContract) {
    return await Post.query().preload('user')
  }

  public async create({}: HttpContextContract) {}

  public async store({ auth, request }: HttpContextContract) {
    const payload = await request.validate(PostControllerStoreValidator)
    const user = await auth.use('api').authenticate()
    const post = new Post()
    post.merge(payload)
    post.userId = user.id
    return await post.save()
  }

  public async show({ params }: HttpContextContract) {
    return await Post.query().preload('user').where('id', params.id).firstOrFail()
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
