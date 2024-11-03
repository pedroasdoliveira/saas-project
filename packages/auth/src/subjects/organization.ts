import { z } from 'zod'

// 'tuple' é um array com duas posições
// 'union'  seria os |
export const organizationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('update'),
    z.literal('transfer_ownership'),
  ]),
  z.literal('Organization'),
])

export type OrganizationSubject = z.infer<typeof organizationSubject>
