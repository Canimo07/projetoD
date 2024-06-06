//Define o tipo de dados dos carros, incluindo atributos como id, modelo, ano, valor, código...

export type Cars = {
    id: number;
    modelo: string;
    ano: string;
    valor: string;
    codigo: string;
    vendaLocacao: 'Venda' | 'Locação'; // Adicionando opções específicas para venda ou locação
    img: string;
    descricao:string;
    destaque:'sim' | 'não'; // Adicionando opções específicas se é um destaque
  }