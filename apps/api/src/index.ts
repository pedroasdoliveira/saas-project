import { defineAbilityFor, projectSchema } from '@tech/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({
  id: 'project-id',
  ownerId: 'user-id',
})

// Testes de Permissões:
console.log(ability.can('get', 'Billing'))
console.log(ability.can('delete', 'User'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('get', 'User'))
console.log(ability.can('delete', project))
// console.log(ability.can('transfer_ownership', 'Organization'))
