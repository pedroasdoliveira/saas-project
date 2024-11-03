/* eslint-disable prettier/prettier */
import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(user, { can, cannot }) {
    // o ADMIN pode gerir TUDO
    can('manage', 'all')

    // o ADMIN NÃO pode gerir Organizações
    cannot(['transfer_ownership', 'update'], 'Organization')
    // o ADMIN pode gerir Organizações caso o OwnerId seja igual ($eq) o user.id (id do usuário)
    can(['transfer_ownership', 'update'], 'Organization', {
      ownerId: { $eq: user.id },
    })
  },
  MEMBER(user, { can }) {
    // O MEMBER pode
    can('get', 'User')
    can(['create', 'get'], 'Project')
    // o MEMBER pode deletar (delete) e atualizar (update) um projeto seu
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  BILLING(_, { can }) {
    can('manage', 'Billing')
  },
}
