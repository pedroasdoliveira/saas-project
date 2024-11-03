import { z } from 'zod'

import { projectSchema } from '../models/project'

// 'tuple' é um array com duas posições
// 'union'  seria os |
export const projectSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('update'),
  ]),
  z.union([z.literal('Project'), projectSchema]),
])

// Exemplo antigo
// export type ProjectSubject = [
//   'create' | 'delete' | 'manage', // actions
//   'Project', // subjects
// ]

// Atual e igual ao antigo
export type ProjectSubject = z.infer<typeof projectSubject>
