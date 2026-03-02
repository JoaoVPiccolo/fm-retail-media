import sinalizacao_digital from "../../routes/homeRoute/assets/bannerCases/digital_signage.jpg";
import comunicacao_empresarial from "../../routes/homeRoute/assets/bannerCases/comunicacao_corporativa.png";
import gestao_de_conteudo from "../../routes/homeRoute/assets/bannerCases/gestao_de_conteudo.png";
import varejo_atacarejo from "../../routes/homeRoute/assets/bannerCases/varejo_e_atacarejo.png";

export const casesMock = [
  {
    empresa: "Flexmedia",
    categoria: "digital_signage",
    imagem: sinalizacao_digital,
    description_1:
      "Sinalização digital (ou Digital Signage) é o uso de telas profissionais para exibir conteúdos como promoções, avisos, vídeos e informações úteis, com controle centralizado. Em vez de depender de cartazes e trocas manuais, sua equipe publica e agenda conteúdos de forma remota, com consistência entre setores e unidades.",
    description_2:
      "Na prática é um serviço que une software de gestão, player/dispositivo e estratégia de conteúdo para garantir que a mensagem apareça no momento certo e no lugar certo. Benefícios: aumentar conversão, reduzir ruído de comunicação, agilizar operação e fortalecer marca.",
    impactPhrase: "Sua mensagem certa, na tela certa, na hora certa.",
    title: "Sinalização Digital"
  },
  {
    empresa: "Flexmedia",
    categoria: "comunicacao_corporativa",
    imagem: comunicacao_empresarial,
    description_1:
      "TV Corporativa que tira a comunicação interna do “achismo” e coloca no padrão: conteúdo certo, grade certa, em todas as unidades.",
    description_2:
      "Comunicação corporativa via Digital Signage (também chamada de TV Corporativa, Canal Interno ou Corporate TV) é a forma mais eficiente de colocar a mensagem certa na tela certa — com gestão centralizada, programação de grade e atualização remota. Em vez de depender de e-mail que ninguém lê, murais desatualizados e grupos que viram ruído, a empresa ganha um canal contínuo, visual e padronizado para comunicar RH, Segurança, Operações e Cultura com consistência.",
    impactPhrase: "Coloque a mensagem certa na tela certa.",
    title: "Comunicação Empresarial"
  },
  {
    empresa: "Flexmedia",
    categoria: "gestao_de_conteudo",
    imagem: gestao_de_conteudo,
    description_1:
      "Com uma equipe especializada e dedicada, a Flexmedia assume a gestão e publicação dos conteúdos no Digital Signage por meio do FLEXDS, garantindo campanhas sempre atualizadas e alinhadas com as necessidades do negócio.",
    description_2:
      "Definimos campanhas por período, região ou sazonalidade, estruturamos a programação (grade/playlist) e realizamos alterações em tempo real, com fluxo de validação. Também disponibilizamos um Portal de Gestão Local e oferecemos atualizações ilimitadas para operações de alto ritmo.",
    impactPhrase: "Sua comunicação sempre atualizada, do jeito certo e na hora certa.",
    title: "Gestão de Conteúdo"
  },
  {
    empresa: "Flexmedia",
    categoria: "varejo_e_atacarejo",
    imagem: varejo_atacarejo,
    description_1:
      "No varejo e atacarejo, velocidade e padronização fazem diferença no caixa. Com a gestão de conteúdo da Flexmedia via FLEXDS, sua rede mantém campanhas, ofertas e comunicações de loja sempre no ar, com agendamento e atualizações em tempo real.",
    description_2:
      "É possível definir campanhas por período, região e sazonalidade, organizar a grade por setor (entrada, açougue, hortifruti, bebidas, checkouts) e garantir consistência em todas as unidades. O Portal de Gestão Local dá autonomia ao time local sem perder controle, com processos de validação.",
    impactPhrase: "Atualizações ilimitadas para acompanhar o ritmo do varejo.",
    title: "Varejo & Atacarejo"
  }
];
