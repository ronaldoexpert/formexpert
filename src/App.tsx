import React, { useState } from 'react';
import FormScreen from './components/FormScreen.tsx';
import ThankYouScreen from './components/ThankYouScreen.tsx';
import { FormData } from './types';
import { submitFormData } from './services/api.ts';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const success = await submitFormData(data);
      
      if (success) {
        setIsSubmitted(true);
        
      } else {
        setError('Houve um erro ao enviar o formulário. Por favor, tente novamente.');
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {error && (
        <div className="max-w-md mx-auto mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {isLoading ? (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Enviando formulário...</p>
        </div>
      ) : isSubmitted ? (
        <ThankYouScreen onBackToForm={handleBackToForm} />
      ) : (
        <FormScreen onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;