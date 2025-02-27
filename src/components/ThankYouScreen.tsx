import React from 'react';
import { ThankYouProps } from '../types';

const ThankYouScreen: React.FC<ThankYouProps> = ({ onBackToForm }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      <svg 
        className="w-16 h-16 text-green-500 mx-auto mb-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M5 13l4 4L19 7"
        />
      </svg>
      
      <h1 className="text-2xl font-bold mb-4">Obrigado pelo seu feedback!</h1>
      
      <p className="text-gray-600 mb-6">
        Suas respostas foram enviadas com sucesso. Agradecemos o tempo que você dedicou para responder nosso questionário.
      </p>
      
      <button
        onClick={onBackToForm}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-300">
        Voltar para o Formulário
      </button>
    </div>
  );
};

export default ThankYouScreen;