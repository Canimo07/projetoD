//componente principal da aplicação, utiliza React e React Modal para exibir uma lista de carros, 
//com funcionalidades para filtrar e visualizar detalhes dos carros, bem como um formulário para compra.

"use client"
import ReactModal from 'react-modal';
import { useState } from 'react';
import { cars } from '@/app/data/CarCard';
import { Cars } from '@/app/data/Cars'; 
import { CustomButton } from '@/app/componentes/CustomButton';
import Btn from "@/app/componentes/Button";

const Home = () => {
 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Cars | null>(null);
  const [formModal, setformModal] = useState(false);

  const handleOpenModal = (car: Cars) =>{
    setSelectedCar(car);
    setIsOpen(true);
  }
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedCar(null);
  }
  const openFormModal = () => {
    handleCloseModal();
    setformModal(true);
  }
  const closeFormModal = () => {
    setformModal(false);
  }
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Enviado o pedido!');
  }
  const [filter, setFilter] = useState<'Todos' | 'Venda' | 'Locação'>('Todos');

  const filtrarcars = filter === 'Todos' 
    ? cars 
    : cars.filter(car => car.vendaLocacao === filter);

  const filtrando = filter === 'Todos'
  ? cars.filter(car => car.destaque === 'sim')
  : cars.filter(car => car.destaque === 'sim' && car.vendaLocacao === filter);

  const customStyles={
    content:{
      top:'50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight:'-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-full flex justify-end space-x-4 mb-8'>
        <CustomButton onClick={() => setFilter('Venda')} label="Carros disponíveis para venda" />
        <CustomButton onClick={() => setFilter('Locação')} label="Carros disponíveis para locação" />
        <CustomButton onClick={() => setFilter('Todos')} label="Todos os carros" />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full p-4">
          <h1 className="mb-4 text-2xl font-bold text-red-500 border border-black-500 p-2">CARROS EM DESTAQUES</h1>
          {filtrando.map((car) => (
            <div key={car.id} className="p-4 mb-4 font-bold text-black-500 border border-black flex flex-col items-center justify-center">
              <img src={car.img} alt={car.modelo} className="mb-4 w-45 h-32" onClick={() => handleOpenModal(car)} />
              <h2>{car.modelo}</h2>
            </div>
          ))}
        </div>
        <div className="w-full p-4">
          <h1 className="mb-4 text-2xl font-bold text-red-500 border border-black-500 p-2">TODOS OS CARROS</h1>
          {filtrarcars.map((car) => (
            <div key={car.id} className="p-4 mb-4 font-bold text-black-500 border border-black flex flex-col items-center justify-center">
              <img src={car.img} alt={car.modelo} className="mb-4 w-45 h-32" onClick={() => handleOpenModal(car)} />
              <h2>{car.modelo}</h2>
            </div>
          ))}
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        {selectedCar && (
          <div>
            <h2 className='text-red-500'>{selectedCar.modelo}</h2>
            <h1 className='text-red-500'>Dados</h1>
            <p className='text-red-500'>Ano: {selectedCar.ano}</p>
            <p className='text-red-500'>Valor: {selectedCar.valor}</p>
            <p className='text-red-500'>Código: {selectedCar.codigo}</p>
            <p className='text-red-500'>Venda/Locação: {selectedCar.vendaLocacao}</p>
            <p className='text-red-500'>Descrição: {selectedCar.descricao}</p>
            <p className='text-red-500'>Destaque: {selectedCar.destaque}</p>

            <div className='flex space-x-3'>
              <Btn onClick={handleCloseModal} label="Fechar" />
              <Btn onClick={openFormModal} label="Comprar" />
            </div>             
          </div>
        )}
      </ReactModal>
      <ReactModal
        isOpen={formModal}
        onRequestClose={closeFormModal}
        style={customStyles}
      >
        <div>
          <h2 className='text-center font-bold text-red-500'>Formulário de Compra</h2>
          <form onSubmit={handleFormSubmit}>
            <p className='text-red-500'>Nome completo: </p>
            <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3' placeholder="Seu nome completo" required/>
            <p className='text-red-500'>Telefone: </p>
            <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3' placeholder="Seu telefone" required/>
            <p className='text-red-500'>E-mail: </p>
            <input type="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4 mb-3' placeholder="Seu e-mail" required/>
            <div className='mb-2'>
              <input type="submit" value="Enviar" className='text-red-500 border border-red-500 p-2 mr-4'/>
              <Btn onClick={closeFormModal} label="Fechar" />
            </div>
          </form>
        </div>
      </ReactModal>
    </main>
  );
};

export default Home;
