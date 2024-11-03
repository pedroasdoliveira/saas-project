import { z } from 'zod'

// 'tuple' é um array com duas posições
// 'union'  seria os |
export const userSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('delete'),
    z.literal('update'),
  ]),
  z.literal('User'),
])

// Exemplo antigo
// export type UserSubject = [
//   'create' | 'delete' | 'invite' | 'manage', // actions
//   'User', // subjects
// ]

export type UserSubject = z.infer<typeof userSubject>
