import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { Modal } from '@/components/atoms/modal'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { CREATE_CUSTOMER } from '@/shared/api/mutations/create-customer'
import { useSearchParams } from '@/shared/hooks/use-url-params'
import { CustomerSchema, CustomerType } from '../../types/create-customer-schema'
import { CircleHalf } from '@phosphor-icons/react'

interface CreateCustomerProps {
  isOpen: boolean
  onClose: () => void
}

export const CreateCustomer = ({ isOpen, onClose }: CreateCustomerProps) => {
  const { setParam, getParam } = useSearchParams()
  const [createCustomer, { loading }] = useMutation(CREATE_CUSTOMER)

  const { register, handleSubmit, formState } = useForm<CustomerType>({
    resolver: zodResolver(CustomerSchema),
  })

  const handleResendEmail = () => {
    console.log('Resend email')
  }

  const handleCopyLink = () => {
    console.log('Copy link')
  }

  const handleCreateCustomer = (data: CustomerType) => {
    createCustomer({
      variables: {
        data: {
          name: data.name.split(' ')[0],
          surname: data.name.split(' ')[1],
          email: data.email,
          phone: data.phone,
          document: data.document,
        },
      },
    })
      .then(() => {
        setParam('step', '2')
        toast.success('Usuário criado com sucesso!')
      })
      .catch((err) => {
        toast.error('Erro ao criar o usuário.')
        console.log(err.message)
      })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} width='470px'>
      <div className='flex flex-col gap-4 w-full'>
        {getParam('step') !== '2' && (
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex flex-col w-full gap-2 -mt-[20px]'>
              <Label className='text-lg font-bold col-span-2'>Criar um novo cliente</Label>
              <Label className='font-light text-xs -mt-2 mb-2 col-span-2'>
                Preencha os campos abaixo para criar um novo cliente.
              </Label>
            </div>
            <div className='grid grid-cols-12 items-center justify-between gap-2'>
              <Label htmlFor='name' className='font-semibold col-span-2'>
                Nome:
              </Label>
              <Input id='name' placeholder='Nome do usuário' required className='col-span-10' {...register('name')} />
              {formState.errors.name && (
                <span className='text-red-500 text-[12px] font-light col-span-12'>{formState.errors.name.message}</span>
              )}
            </div>
            <div className='grid grid-cols-12 items-center justify-between gap-2'>
              <Label htmlFor='email' className='font-semibold col-span-2'>
                Email:
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='Email do usuário'
                required
                className='col-span-10'
                {...register('email')}
              />
              {formState.errors.email && (
                <span className='text-red-500 text-[12px] font-light col-span-12'>
                  {formState.errors.email.message}
                </span>
              )}
            </div>
            <div className='grid grid-cols-12 items-center justify-between gap-2'>
              <Label htmlFor='email' className='font-semibold col-span-2'>
                Telefone:
              </Label>
              <Input
                id='email'
                placeholder='Telefone do usuário'
                required
                className='col-span-10'
                {...register('phone')}
              />
              {formState.errors.phone && (
                <span className='text-red-500 text-[12px] font-light col-span-12'>
                  {formState.errors.phone.message}
                </span>
              )}
            </div>
            <div className='grid grid-cols-12 items-center justify-between gap-2'>
              <Label htmlFor='document' className='font-semibold col-span-2'>
                CPF:
              </Label>
              <Input
                id='document'
                placeholder='000.000.000-00'
                required
                className='col-span-10'
                {...register('document')}
              />
              {formState.errors.phone && (
                <span className='text-red-500 text-[12px] font-light col-span-12'>
                  {formState.errors.phone.message}
                </span>
              )}
            </div>
            {loading ? (
              <Button disabled>
                <CircleHalf className='animate-spin' />
                Aguarde
              </Button>
            ) : (
              <Button onClick={handleSubmit(handleCreateCustomer)}>Criar usuário</Button>
            )}
          </div>
        )}
        {getParam('step') === '2' && (
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col w-full gap-2 -mt-[20px]'>
              <Label className='text-lg font-bold col-span-2'>Usuário adicionado com sucesso!</Label>
            </div>
            <div>
              <Label className='font-light col-span-2'>
                Foi enviado um email para o novo cliente com o link de cadastro. Caso o mesmo não tenha recebido você
                reenvie o email ou copie o link abaixo e envie para o cliente.
              </Label>
            </div>
            <div className='flex items-center w-full gap-2'>
              <Button variant='secondary' onClick={handleResendEmail}>
                Reenviar email
              </Button>
              <Button variant='secondary' onClick={handleCopyLink}>
                Copiar link
              </Button>
              <Button onClick={onClose}>Concluir cadastro</Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
