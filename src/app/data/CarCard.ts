// define e exporta a lista de carros, cada um com suas respectivas propriedades. 
//Ele importa Cars.ts para garantir que a lista seja formada corretamente. 

import { Cars } from "@/app/data/Cars";

export const cars: Cars[] = [
  {
    id: 1,
    modelo: 'Honda Civic',
    ano: '2020',
    valor: 'R$ 90.000,00',
    codigo: 'HC2020',
    vendaLocacao: 'Venda',
    img: '/images/hc.jpg',
    descricao:'O Honda Civic 2020 é um sedã compacto conhecido por sua combinação de desempenho, eficiência de combustível e confiabilidade. Ele possui um design esportivo, motor 2.0 litros de quatro cilindros que produz 158 cavalos de potência, e um interior bem equipado com tecnologia avançada, como uma tela sensível ao toque de 7 polegadas, Apple CarPlay e Android Auto. O Civic também é conhecido por sua boa dirigibilidade e segurança, com diversas opções de assistência ao motorista.',
    destaque:'sim'
  },
  {
    id: 2,
    modelo: 'Toyota Corolla',
    ano: '2021',
    valor: 'R$ 100.000,00',
    codigo: 'TC2021',
    vendaLocacao: 'Locação',
    img: '/images/TC.jpg',
    descricao:'O Toyota Corolla 2021 é um sedã compacto famoso por sua durabilidade e eficiência de combustível. Equipado com um motor 1.8 litros de quatro cilindros que entrega 139 cavalos de potência, ou um motor 2.0 litros de quatro cilindros com 169 cavalos de potência nas versões superiores, o Corolla oferece uma experiência de condução confortável. O interior é moderno, com um sistema de infotainment de 8 polegadas, compatível com Apple CarPlay, Android Auto e Amazon Alexa. Além disso, o Corolla 2021 destaca-se pelos avançados recursos de segurança do pacote Toyota Safety Sense 2.0.',
    destaque:'não'
  },
  {
    id: 3,
    modelo: 'Ford Focus',
    ano: '2019',
    valor: 'R$ 85.000,00',
    codigo: 'FF2019',
    vendaLocacao: 'Locação',
    img: '/images/FF.jpg',
    descricao:'O Ford Focus 2019 é um hatchback ou sedã compacto que oferece uma condução ágil e esportiva. Equipado com um motor 1.5 litros EcoBoost de três cilindros que gera 123 cavalos de potência, ou um motor 2.0 litros de quatro cilindros que produz 160 cavalos de potência nas versões superiores, o Focus é conhecido por sua dinâmica de direção precisa. O interior é funcional, com uma tela de 8 polegadas para o sistema de infotainment SYNC 3, compatível com Apple CarPlay e Android Auto. O Focus 2019 também inclui vários recursos de segurança e assistência ao motorista.',
    destaque:'sim'
  },
  {
    id: 4,
    modelo: 'Chevrolet Cruze',
    ano: '2018',
    valor: 'R$ 80.000,00',
    codigo: 'CC2018',
    vendaLocacao: 'Venda',
    descricao:'O Chevrolet Cruze 2018 é um sedã compacto que combina um design elegante com economia de combustível e um interior confortável. Equipado com um motor 1.4 litros turbo de quatro cilindros que produz 153 cavalos de potência, o Cruze oferece uma condução suave e eficiente. O interior é espaçoso e bem equipado, com uma tela sensível ao toque de 7 polegadas, compatível com Apple CarPlay e Android Auto. O Cruze 2018 também possui várias características de segurança, como alerta de colisão frontal e assistente de permanência em faixa.',
    img: '/images/CC.jpg',
    destaque: 'não'
  }
];