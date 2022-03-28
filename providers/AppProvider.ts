import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { Settings } from 'luxon'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    // Settings.defaultZone = 'UTC'
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
