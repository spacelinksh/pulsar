import { TypedDocumentNode, gql } from '@apollo/client'
import { Customer } from '@/shared/graphql/graphql'

export const GET_CUSTOMER_BY_ID: TypedDocumentNode<{
  getCustomerById: Customer
  id: string
}> = gql`
  query GET_CUSTOMER_BY_ID($getCustomerByIdId: String!) {
    getCustomerById(id: $getCustomerByIdId) {
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
