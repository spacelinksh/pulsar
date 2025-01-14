import { useQuery } from '@apollo/client'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Checkbox } from '@/components/atoms/checkbox'
import { DataTable } from '@/components/molecules/data-table'
import { TableHeader } from '@/components/organisms/table-header'

import { CreateCustomer } from './create-customer-modal'
import { CustomerDetails } from './customer-details-modal'
import { useSearchParams } from '@/shared/hooks/use-url-params'
import { GET_ALL_CUSTOMERS } from '@/shared/api/queries/get-all-customers'
import { Customer } from '@/shared/graphql/graphql'
import { useEffect } from 'react'
import { DotsThreeVertical } from '@phosphor-icons/react'

export default function CustomersPage() {
  const { getParam, setParam, deleteParam } = useSearchParams()
  const { data: customers, refetch } = useQuery(GET_ALL_CUSTOMERS)

  const handleCreateParams = () => {
    setParam('cm', 'open')
    setParam('step', '1')
  }

  const handleDeleteParams = () => {
    deleteParam('cm')
    deleteParam('step')
  }

  const containsCreateParams = getParam('cm') === 'open'
  const containsCustomerId = !!getParam('id')

  const columnHelper = createColumnHelper<Customer>()

  const columns: ColumnDef<Customer, string>[] = [
    columnHelper.accessor((row) => row.id, {
      id: 'id',
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      ),
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      ),
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.name, {
      id: 'name',
      cell: (info) => info.getValue(),
      header: 'Nome',
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.email, {
      id: 'email',
      cell: (info) => info.getValue(),
      header: 'Email',
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.phone, {
      id: 'phone',
      cell: (info) => info.getValue(),
      header: 'Telefone',
      enableColumnFilter: false,
    }),
    // columnHelper.accessor((row) => row.status.toString(), {
    //   id: 'status',
    //   cell: (info) => info.getValue(),
    //   header: 'Status',
    //   enableColumnFilter: false,
    // }),
    columnHelper.accessor((row) => row.id, {
      id: 'id',
      cell: ({ row }) => (
        <button
          className='flex flex-col w-4 h-full items-center justify-center'
          onClick={() => setParam('id', row.original.id)}
        >
          <DotsThreeVertical weight='bold' />
        </button>
      ),
      header: '',
      enableColumnFilter: false,
    }),
  ]

  useEffect(() => {
    refetch
  }, [customers])

  return (
    <div className='flex flex-col w-full gap-2'>
      <TableHeader handlePlusFunction={handleCreateParams} />
      <DataTable columns={columns} data={customers?.getAllCustomers || []} />
      <CreateCustomer isOpen={containsCreateParams} onClose={handleDeleteParams} />
      <CustomerDetails
        isOpen={containsCustomerId}
        onClose={() => {
          deleteParam('id')
          refetch()
        }}
        refetch={refetch}
      />
    </div>
  )
}
