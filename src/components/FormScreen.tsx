import React, { useState } from 'react';
import { FormData, FormProps } from '../types';

const FormScreen: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    cnpj: '',
    name: '',
    sistema: 'SIM',
    qtdnotas: '0 - 50',
    tipo_empresa : "SN",
    feedback: ''
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }  
    
    if (!formData.cnpj.trim()) {
      newErrors.cnpj = 'CNPJ é obrigatório';
    }

    if (!formData.sistema.trim()) {
      newErrors.sistema = 'O sistema é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;    

    setFormData(prev => ({
      ...prev,
        [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log(formData);

    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl text-orange-50 font-bold mb-6 text-center">Expert Informática</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            CNPJ
          </label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={formData.cnpjname}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.cnpj ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Digite o CNPJ da sua empresa"
          />
          {errors.cnpj && <p className="text-red-500 text-sm mt-1">{errors.cnpj}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Seu nome completo"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="satisfaction">
            Tipo Empresa
          </label>
          <select
            id="tipo_empresa"
            name="tipo_empresa"
            value={formData.sistema}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg">
            <option value="SN">Simples Nacional</option>
            <option value="DC">Débito e Crédito (Lucro Presumido)</option>
            <option value="DCR">Débito e Crédito (Lucro Real)</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="satisfaction">
            Já possui sistema?
          </label>
          <select
            id="sistema"
            name="sistema"
            value={formData.sistema}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg">
            <option value="SIM">Sim</option>
            <option value="NAO">Não</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="satisfaction">
          Quantidade de notas a serem emitidas por mês.
          </label>
          <select
            id="qtdnotas"
            name="qtdnotas"
            value={formData.qtdnotas}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg">
            <option value="0 - 50">0 - 50</option>
            <option value="51 - 100">51 - 100</option>
            <option value="101 - 300">101 - 300</option>
            <option value="mais de 301">mais de 301</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="feedback">
            Quais as funcionalidades mais importantes que o sistema precisa ter para atender sua empresa?
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.feedback ? 'border-red-500' : 'border-gray-300'}`}
            rows={4}
            placeholder="Compartilhe sua opinião conosco..."
          />
          {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 cursor-pointer">
          Enviar Formulário
        </button>
      </form>
    </div>
  );
};

export default FormScreen;