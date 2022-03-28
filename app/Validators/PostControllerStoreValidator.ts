import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostControllerStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    description: schema.string({}, [rules.minLength(20)]),
  })

  // public messages = {
  //   'description.minLength': this.ctx.i18n.formatMessage('validator.custom.minLength', {
  //     field: 'title',
  //     minLength: '20',
  //   }),
  // }
}
