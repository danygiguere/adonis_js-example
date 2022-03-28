import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, auth, response }: HttpContextContract) {
    try {
      const validationSchema = schema.create({
        email: schema.string({ trim: true }, [
          rules.email(),
          rules.unique({ table: 'users', column: 'email' }),
          rules.maxLength(255),
        ]),
        password: schema.string({ trim: true }, [rules.confirmed()]),
      })
      const validatedData = await request.validate({
        schema: validationSchema,
      })
      const newUser = await User.create(validatedData)
      const token = await auth.use('api').login(newUser, {
        expiresIn: '3000mins',
      })
      return token.toJSON()
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])
    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '3000mins',
      })
      return token
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}
