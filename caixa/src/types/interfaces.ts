export interface Product {
  id: number;
  name: string;
  title: string;
  icon: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  avaliable: boolean;
}

export interface Person {
  nome: string;
  cpf: string;
  dataNascimento: string;
  id: string;
}

export interface Auth {
  email: string;
  password: string;
}
