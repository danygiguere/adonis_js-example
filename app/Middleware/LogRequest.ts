import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogRequest {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    console.log(``)
    console.log(`----------------- new request ------------------`)
    console.log(`request method and url-> ${request.method()}: ${request.url()}`)
    await next()
  }
}
