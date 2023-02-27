import * as RadioGroup from '@radix-ui/react-radio-group';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormEvent, useState } from 'react';

export default function FormaData() {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setIsExpense] = useState(false)


  function handleSubmitForm(e: FormEvent) {
    e.preventDefault()

    if (description === "" || amount === "" || !!isExpense) {
      return toast.error("Preencha todos os campos")
    }
    if (description && amount) {
      toast.success("Dados salvos com sucesso")
    }


  }

  return (
    <>
      <form className="max-w-7xl my-5 mx-auto w-[98%] shadow-md rounded-md grid justify-around py-4 gap-3 lg:flex">
        <div className="flex flex-col">
          <label htmlFor="description">Descrição</label>
          <input
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            name="description"
            id="description"
            placeholder="Digite a descrição"
            className="outline-none rounded-md py-1 px-3 text-sm border focus:border-cyan-400"
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="value">Valor</label>
          <input
            required
            type="number"
            name='value'
            id='value'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Digite o valor"
            className="outline-none rounded-md py-1 px-3 text-sm border focus:border-cyan-400"
          />
        </div>

        <div className='flex items-center'>
          <RadioGroup.Root className='flex gap-3'>
            <div className='flex items-center gap-2'>
              <RadioGroup.Item
                value='entrada'
                onChange={e => setIsExpense(!isExpense)}
                className='w-6 h-6 rounded-full shadow-md border border-slate-400/30'>
                <RadioGroup.Indicator className='flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-3 after:h-3 after:rounded-full after:bg-blue-600 ' />
              </RadioGroup.Item>
              <label htmlFor="entrada">entrada</label>

            </div>
            <div className='flex items-center gap-2'>
              <RadioGroup.Item
                onChange={e => setIsExpense(!isExpense)}
                value='saida'
                className='w-6 h-6 rounded-full shadow-md border border-slate-400/30'>
                <RadioGroup.Indicator className='flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-3 after:h-3 after:rounded-full after:bg-blue-600' />
              </RadioGroup.Item>
              <label htmlFor="">saída</label>

            </div>
          </RadioGroup.Root>
        </div>

        <button
          onClick={handleSubmitForm}
          className='px-10 bg-header-color-500 rounded-xl text-white text-lg hover:bg-blue-600 transition-all duration-'>
          salvar
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </>
  )
}