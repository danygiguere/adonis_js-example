import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { UserFactory } from 'Database/factories'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'johndoe@test.com',
        username: 'john_doe',
        firstName: 'John',
        lastName: 'Doe',
        password: 'secret',
      },
    ])
    await UserFactory.with('posts', 10).createMany(4)
  }
}
