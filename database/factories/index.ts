import Factory from '@ioc:Adonis/Lucid/Factory'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export const PostFactory = Factory.define(Post, ({ faker }) => {
  const title = faker.lorem.sentence()
  const description = faker.lorem.paragraphs()
  return {
    userId: 1,
    title: title,
    description: description,
  }
}).build()

export const UserFactory = Factory.define(User, async ({ faker }) => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  return {
    email: `${firstName}.${lastName}@test.com`.toLowerCase(),
    profile_picture: '',
    firstName: firstName,
    lastName: lastName,
    username: `${firstName}_${lastName}`,
    password: 'secret',
  }
})
  .relation('posts', () => PostFactory)
  .build()
