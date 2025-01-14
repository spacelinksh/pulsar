import { TypedDocumentNode, gql } from '@apollo/client'
import { Customer } from '@/shared/graphql/graphql'

export const GET_ALL_CUSTOMERS: TypedDocumentNode<{
  getAllCustomers: Customer[]
}> = gql`
  query GET_ALL_CUSTOMERS {
    getAllCustomers {
      id
      name
      email
      document
      phone
      status
      createdAt
      updatedAt
    }
  }
`
