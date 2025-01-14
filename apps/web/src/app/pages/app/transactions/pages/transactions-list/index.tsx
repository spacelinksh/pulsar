import { Checkbox } from '@/components/atoms/checkbox'
import { DataTable } from '@/components/molecules/data-table'
import { TableHeader } from '@/components/organisms/table-header'
import { GET_ALL_TRANSACTIONS } from '@/shared/api/queries/get-all-transactions'
import { Transaction } from '@/shared/graphql/graphql'
import { useSearchParams } from '@/shared/hooks/use-url-params'
import { useQuery } from '@apollo/client'
import { DotsThreeVertical } from '@phosphor-icons/react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { useEffect } from 'react'

export default function TransactionsList() {
  const { setParam } = useSearchParams()
  const { data: transactions, refetch } = useQuery(GET_ALL_TRANSACTIONS)

  const columnHelper = createColumnHelper<Transaction>()

  const columns: ColumnDef<Transaction, string>[] = [
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
    columnHelper.accessor((row) => row.amount.toString(), {
      id: 'amount',
      cell: (info) => info.getValue(),
      header: 'Valor',
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.description, {
      id: 'description',
      cell: (info) => info.getValue(),
      header: 'Descrição',
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.type.toString(), {
      id: 'type',
      cell: (info) => info.getValue(),
      header: 'Tipo',
      enableColumnFilter: false,
    }),
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
  }, [refetch])

  return (
    <div>
      <TableHeader handlePlusFunction={() => {}} />
      <DataTable columns={columns} data={transactions?.getAllTransactions || []} />
    </div>
  )
}
