import { Auth, SignInDto } from '@/shared/graphql/graphql'
import { TypedDocumentNode, gql } from '@apollo/client'

export const SIGN_IN: TypedDocumentNode<{
  signIn: Auth
  signInInput: SignInDto
}> = gql`
  mutation SIGN_IN($signInInput: SignInDto!) {
    signIn(signInInput: $signInInput) {
      accessToken
      user {
        id
        name
        phone
        email
        document
        role {
          id
          name
          description
          permissions {
            id
            name
            description
          }
        }
      }
    }
  }
`
