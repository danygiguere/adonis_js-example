import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DemoController {
  public async index({ i18n }: HttpContextContract) {
    return i18n.formatMessage('strings.hello_world')
  }
}
