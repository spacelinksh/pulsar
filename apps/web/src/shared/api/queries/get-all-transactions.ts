import { TypedDocumentNode, gql } from '@apollo/client'
import { Transaction } from '@/shared/graphql/graphql'

export const GET_ALL_TRANSACTIONS: TypedDocumentNode<{
  getAllTransactions: Transaction[]
}> = gql`
  query GET_ALL_TRANSACTIONS {
    getAllTransactions {
      id
      type
      description
      amount
      createdAt
      updatedAt
    }
  }
`
