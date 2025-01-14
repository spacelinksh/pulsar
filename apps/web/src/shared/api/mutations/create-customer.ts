import { CreateCustomerDto, Customer } from '@/shared/graphql/graphql'
import { TypedDocumentNode, gql } from '@apollo/client'

export const CREATE_CUSTOMER: TypedDocumentNode<{
  createCustomer: Customer
  data: CreateCustomerDto
}> = gql`
  mutation CreateCustomer($data: CreateCustomerDto!) {
    createCustomer(data: $data) {
      id
    }
  }
`
