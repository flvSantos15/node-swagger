import { z } from 'zod'
import { FastifyTypedInstance } from './types'

// Parei no 10:51

export async function routes(app: FastifyTypedInstance) {
  app.get(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'List users'
      }
    },
    () => {
      return []
    }
  )

  app.post(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'Create a new user',
        body: z.object({
          name: z.string()
        })
      }
    },
    () => {
      return {}
    }
  )
}
