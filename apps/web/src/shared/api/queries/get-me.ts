import { User } from '@/shared/graphql/graphql'
import { gql, TypedDocumentNode } from '@apollo/client'

export const GET_ME: TypedDocumentNode<{
  getMe: User
}> = gql`
  query GET_ME {
    getMe {
      id
      name
      phone
      email
      document
      avatar
      status
      token
      customers {
        updatedAt
        status
        phone
        name
        id
        email
        document
        createdAt
      }
      role {
        id
        name
        permissions {
          id
          name
          description
          createdAt
          updatedAt
        }
        description
        createdAt
        updatedAt
      }
    }
  }
`
