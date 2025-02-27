export interface FormData {
    cnpj: string;
    name: string;
    sistema: string;
    qtdnotas: string;
    tipo_empresa : string;
    feedback: string;
  }
  
  export interface FormProps {
    onSubmit: (data: FormData) => void;
  }
  
  export interface ThankYouProps {
    onBackToForm: () => void;
  }