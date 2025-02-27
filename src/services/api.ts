import { FormData } from '../types';

const username = 'Expert';
const password = 'Expert2022*';

const token = btoa(`${username}:${password}`);

export const submitFormData = async (formData: FormData): Promise<boolean> => {
  try {
    // Substitua pela URL real do seu webservice
    const response = await fetch('http://server-expert.ddns.net:5589/formulario', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Falha ao enviar formulário > ' + response);
    }
    
    return true;
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    return false;
  }
};