/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Auth = {
  __typename?: 'Auth'
  /** Session access token */
  accessToken: Scalars['String']['output']
  /** User logged in */
  user: User
}

export type CreateCustomerDto = {
  /** The document of the customer */
  document: Scalars['String']['input']
  /** The email of the customer */
  email: Scalars['String']['input']
  /** The name of the customer */
  name: Scalars['String']['input']
  /** The phone of the customer */
  phone?: InputMaybe<Scalars['String']['input']>
}

export type CreatePermissionDto = {
  /** The description of the permission */
  description?: InputMaybe<Scalars['String']['input']>
  /** The name of the permission */
  name: Scalars['String']['input']
}

export type CreateRoleDto = {
  /** The description of the role */
  description?: InputMaybe<Scalars['String']['input']>
  /** The name of the role */
  name: Scalars['String']['input']
  /** The permissions of the role */
  permissions: Array<Scalars['ID']['input']>
}

export type CreateTransactionDto = {
  /** The amount of the transaction */
  amount: Scalars['Float']['input']
  /** The description of the transaction */
  description: Scalars['String']['input']
  /** The type of the transaction */
  type: TransactionType
}

export type CreateTransferKeyDto = {
  /** Whether the key is active */
  active: Scalars['Boolean']['input']
  /** The key to be used for transfer */
  key: Scalars['String']['input']
}

export type CreateUserDto = {
  /** The document of the user */
  document: Scalars['String']['input']
  /** The email address of the user */
  email: Scalars['String']['input']
  /** The name of the user */
  name: Scalars['String']['input']
  /** The password of the user */
  password: Scalars['String']['input']
  /** The phone number of the user */
  phone?: InputMaybe<Scalars['String']['input']>
  /** The role id of the user */
  roleId: Scalars['ID']['input']
  /** The status of the user */
  status: UserStatus
  /** The token of the user */
  token?: InputMaybe<Scalars['String']['input']>
}

export type Customer = {
  __typename?: 'Customer'
  /** The date and time the entity was created */
  createdAt: Scalars['DateTime']['output']
  /** The document of the customer */
  document: Scalars['String']['output']
  /** The email of the customer */
  email: Scalars['String']['output']
  /** The unique identifier of the entity */
  id: Scalars['String']['output']
  /** The name of the customer */
  name: Scalars['String']['output']
  /** The phone of the customer */
  phone?: Maybe<Scalars['String']['output']>
  /** The status of the customer */
  status: CustomerStatus
  /** The date and time the entity was last updated */
  updatedAt: Scalars['DateTime']['output']
  /** The user of the customer */
  user: User
}

/** The status of the customer */
export enum CustomerStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  User = 'USER',
}

export type Mutation = {
  __typename?: 'Mutation'
  createCustomer: Customer
  createPermission: Permission
  createRole: Role
  createTransaction: Transaction
  createTransferKey: TransferKey
  createUser: User
  deleteCustomer: Customer
  deletePermission: Permission
  deleteRole: Role
  deleteTransaction: Transaction
  deleteTransferKey: TransferKey
  deleteUser: User
  signIn: Auth
  updateCustomer: Customer
  updatePermission: Permission
  updateRole: Role
  updateTransaction: Transaction
}

export type MutationCreateCustomerArgs = {
  data: CreateCustomerDto
}

export type MutationCreatePermissionArgs = {
  data: CreatePermissionDto
}

export type MutationCreateRoleArgs = {
  data: CreateRoleDto
}

export type MutationCreateTransactionArgs = {
  data: CreateTransactionDto
}

export type MutationCreateTransferKeyArgs = {
  data: CreateTransferKeyDto
}

export type MutationCreateUserArgs = {
  data: CreateUserDto
}

export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input']
}

export type MutationDeletePermissionArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteRoleArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteTransactionArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteTransferKeyArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input']
}

export type MutationSignInArgs = {
  signInInput: SignInDto
}

export type MutationUpdateCustomerArgs = {
  data: UpdateCustomerDto
}

export type MutationUpdatePermissionArgs = {
  data: UpdatePermissionDto
}

export type MutationUpdateRoleArgs = {
  data: UpdateRoleDto
}

export type MutationUpdateTransactionArgs = {
  data: UpdateTransactionDto
}

export type Permission = {
  __typename?: 'Permission'
  /** The date and time the entity was created */
  createdAt: Scalars['DateTime']['output']
  /** The description of the permission */
  description?: Maybe<Scalars['String']['output']>
  /** The unique identifier of the entity */
  id: Scalars['String']['output']
  /** The name of the permission */
  name: Scalars['String']['output']
  /** The date and time the entity was last updated */
  updatedAt: Scalars['DateTime']['output']
}

export type Query = {
  __typename?: 'Query'
  getAllCustomers: Array<Customer>
  getAllPermissions: Array<Permission>
  getAllRoles: Array<Role>
  getAllTransactions: Array<Transaction>
  getAllTransferKeys: Array<TransferKey>
  getAllUsers: Array<User>
  getCustomerById: Customer
  getMe: User
  getPermissionById: Permission
  getRoleById: Role
  getTransactionById: Transaction
  getTransferKey: TransferKey
  getUserById: User
}

export type QueryGetCustomerByIdArgs = {
  id: Scalars['String']['input']
}

export type QueryGetPermissionByIdArgs = {
  id: Scalars['String']['input']
}

export type QueryGetRoleByIdArgs = {
  id: Scalars['String']['input']
}

export type QueryGetTransactionByIdArgs = {
  id: Scalars['String']['input']
}

export type QueryGetTransferKeyArgs = {
  id: Scalars['String']['input']
}

export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input']
}

export type Role = {
  __typename?: 'Role'
  /** The date and time the entity was created */
  createdAt: Scalars['DateTime']['output']
  /** The description of the role */
  description?: Maybe<Scalars['String']['output']>
  /** The unique identifier of the entity */
  id: Scalars['String']['output']
  /** The name of the role */
  name: Scalars['String']['output']
  /** The permissions of the role */
  permissions: Array<Permission>
  /** The date and time the entity was last updated */
  updatedAt: Scalars['DateTime']['output']
}

export type SignInDto = {
  /** Email of the user */
  email: Scalars['String']['input']
  /** Password of the user */
  normalizedPassword: Scalars['String']['input']
}

export type Transaction = {
  __typename?: 'Transaction'
  /** Transaction amount */
  amount: Scalars['Float']['output']
  /** The date and time the entity was created */
  createdAt: Scalars['DateTime']['output']
  /** Transaction description */
  description: Scalars['String']['output']
  /** The unique identifier of the entity */
  id: Scalars['String']['output']
  /** Transaction type */
  type: TransactionType
  /** The date and time the entity was last updated */
  updatedAt: Scalars['DateTime']['output']
  /** Transaction user */
  user: User
}

/** The type of the transaction */
export enum TransactionType {
  Deposit = 'DEPOSIT',
  Withdraw = 'WITHDRAW',
}

export type TransferKey = {
  __typename?: 'TransferKey'
  /** Whether the key is active */
  active: Scalars['Boolean']['output']
  /** The date and time the entity was created */
  createdAt: Scalars['DateTime']['output']
  /** The unique identifier of the entity */
  id: Scalars['String']['output']
  /** The key to be used for transfer */
  key: Scalars['String']['output']
  /** The date and time the entity was last updated */
  updatedAt: Scalars['DateTime']['output']
  /** The user associated with the key */
  user: User
}

export type UpdateCustomerDto = {
  /** The document of the customer */
  document?: InputMaybe<Scalars['String']['input']>
  /** The email of the customer */
  email?: InputMaybe<Scalars['String']['input']>
  /** The id of the customer */
  id: Scalars['String']['input']
  /** The name of the customer */
  name?: InputMaybe<Scalars['String']['input']>
  /** The phone of the customer */
  phone?: InputMaybe<Scalars['String']['input']>
}

export type UpdatePermissionDto = {
  /** The description of the permission */
  description?: InputMaybe<Scalars['String']['input']>
  /** The id of the permission */
  id: Scalars['String']['input']
  /** The name of the permission */
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateRoleDto = {
  /** The description of the role */
  description?: InputMaybe<Scalars['String']['input']>
  /** The id of the role */
  id: Scalars['ID']['input']
  /** The name of the role */
  name?: InputMaybe<Scalars['String']['input']>
  /** The permissions of the role */
  permissions?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type UpdateTransactionDto = {
  /** The amount of the transaction */
  amount?: InputMaybe<Scalars['Float']['input']>
  /** The description of the transaction */
  description?: InputMaybe<Scalars['String']['input']>
  /** The id of the transaction */
  id: Scalars['ID']['input']
  /** The type of the transaction */
  type?: InputMaybe<TransactionType>
}

export type User = {
  __typename?: 'User'
  /** The avatar of the user */
  avatar?: Maybe<Scalars['String']['output']>
  /** The date and time the entity was created */
  createdAt: Scalars['DateTime']['output']
  /** The customers of the user */
  customers?: Maybe<Array<Customer>>
  /** The document of the user */
  document: Scalars['String']['output']
  /** The email address of the user */
  email: Scalars['String']['output']
  /** The unique identifier of the entity */
  id: Scalars['String']['output']
  /** The name of the user */
  name: Scalars['String']['output']
  /** The phone number of the user */
  phone?: Maybe<Scalars['String']['output']>
  /** The role of the user */
  role: Role
  /** The status of the user */
  status: UserStatus
  /** The token of the user */
  token?: Maybe<Scalars['String']['output']>
  /** The date and time the entity was last updated */
  updatedAt: Scalars['DateTime']['output']
}

/** The status of the user */
export enum UserStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
}
