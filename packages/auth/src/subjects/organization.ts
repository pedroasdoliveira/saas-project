import { z } from 'zod'

import { organizationSchema } from '../models/organization'

// 'tuple' é um array com duas posições
// 'union'  seria os |
export const organizationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('delete'),
    z.literal('update'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('Organization'), organizationSchema]),
])

export type OrganizationSubject = z.infer<typeof organizationSubject>
