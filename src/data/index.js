export const timelineData = [
  {
    date: 'Hoje',
    id: '0',
    star: false,
    note: true,
    activities: true,
    colors: ['#C5C4C1', '#F0E68C', '#6495ED'],
  },
  {
    date: '17 de Maio',
    id: '11',
    star: false,
    note: true,
    activities: false,
    colors: ['#6495ED', '#C5C4C1'],
  },
  {
    date: '15 de Maio',
    id: '12',
    star: false,
    note: true,
    activities: false,
    colors: ['#6495ED', '#F0E68C'],
  },
  {
    date: '14 de Maio',
    id: '13',
    star: false,
    note: true,
    activities: false,
    colors: ['#C5C4C1', '#F0E68C'],
  },
  {
    date: '13 de Maio',
    id: '14',
    star: false,
    note: true,
    activities: false,
    colors: ['#6495ED', '#F0E68C'],
  },
  {
    date: '11 de Maio',
    id: '25',
    star: false,
    note: true,
    activities: true,
    colors: ['#6495ED'],
  },
  {
    date: '10 de Maio',
    id: '3',
    star: false,
    note: true,
    activities: true,
    colors: ['#F0E68C'],
  },
  {
    date: '9 de Maio',
    id: '4',
    star: false,
    note: false,
    activities: true,
    colors: ['#C5C4C1', '#F0E68C'],
  },
]

export const daysData = {
  notes: [
    {
      title: 'Futebol',
      note:
        'Hoje joguei futebol com meus amigos, foi muito bom para poder relaxar',
      emotions: ['#F0E68C'],
      id: '0',
      feelings: [
        {
          type: `Alegria`,
          description: `Condição de satisfação da pessoa que está contente, alegre.`,
          imgSrc: require('../assets/feelings/alegria.png'),
          intensity: 80,
        },
        {
          type: `Bem-estar`,
          description: `Estado da pessoa tranquila, de quem está seguro ou confortável; tranquilidade.`,
          imgSrc: require('../assets/feelings/bem-estar.png'),
          intensity: 90,
        },
      ],
      photos: [
        {
          uri: require('../assets/notes/futebolImage.jpg'),
        }
      ]
    },
    {
      title: 'Discussão',
      note:
        'Discuti com meu pai depois de voltar para casa, ele tinha tido um dia duro no trabalho e acabou descontando um stress dele em mim.',
      emotions: ['#6495ED'],
      id: '1',
      feelings: [
        {
          type: `Tristeza`,
          description: `um triste arrependimento; angústia causada por perda, decepção ou pesar; sentir ou expressar tristeza, infelicidade.`,
          imgSrc: require('../assets/feelings/tristeza.png'),
          intensity: 60,
        },
        {
          type: `Confusão`,
          description: `um sentimento desorientado; pensamento nebuloso; caos; falta de nitidez ou clareza; perplexidade; um estado mental perturbado.`,
          imgSrc: require('../assets/feelings/confusao.png'),
          intensity: 90,
        },
      ],
      photos: [],

    },
    {
      title: 'Quarentena',
      note:
        'Essa quarentena ta muito chaaaata. Não aguento mais não poder sair de casa e passar o dia inteiro vendo Netflix',
      emotions: ['#C5C4C1'],
      id: '2',
      feelings: [
        {
          type: `Preguiça`,
          description: `Lentidão em fazer qualquer coisa; morosidade.`,
          imgSrc: require('../assets/feelings/preguica.png'),
          intensity: 85,
        },
      ],
      photos: [
        {
          uri: require('../assets/notes/netflixImage.jpg'),
        },

      ]
    },
    {
      title: 'Sonho de hoje',
      note:
        'Hoje sonhei que estava voando, sentindo o vento no rosto e vendo a minha cidade lá de cima. Infelimente acordei e percebi que era somente um sonho.',
      emotions: ['#F0E68C'],
      id: '3',
      feelings: [
        {
          type: `Inspiração`,
          description: `Algo ou alguém que inspira, que incita a capacidade de criação`,
          imgSrc: require('../assets/feelings/inspiracao.png'),
          intensity: 75,
        },
      ],
      photos: [
        {
          uri: require('../assets/notes/acordarImage.jpg'),
        }
      ]
    },

  ],
  activities: {
    mine: [
      {
        title: 'Joguei futebol',
        done: true,
        id: '0',
      },
      {
        title: 'Comi pizza',
        done: true,
        id: '1',
      },
      {
        title: 'Liguei para meus amigos',
        done: false,
        id: '2',
      },
      {
        title: 'Assisti um filme',
        done: false,
        id: '3',
      },
      {
        title: 'Fiz 30 minutos de corrida',
        done: false,
        id: '4',
      },
    ],
    recommended: [
      {
        title: 'Falar com seu irmão',
        done: false,
        id: '0',
      },
      {
        title: 'Exercitar-se',
        done: false,
        id: '1',
      },
      {
        title: 'Escrever emoções',
        done: false,
        id: '2',
      },
      {
        title: 'Meditar',
        done: false,
        id: '3',
      },
      {
        title: 'Conversar com família',
        done: false,
        id: '4',
      },
      {
        title: 'Passear com cachorro',
        done: false,
        id: '5',
      },
    ],
  },
};

export const recommendationsFrequencyData = [
  {
    title: 'Falar com seu irmão',
    timesDone: 7,
  },
  {
    title: 'Exercitar-se',
    timesDone: 2,
  },
  {
    title: 'Escrever emoções',
    timesDone: 5,
  },
  {
    title: 'Meditar',
    timesDone: 12,
  },
  {
    title: 'Conversar com família',
    timesDone: 3,
  },
  {
    title: 'Passear com cachorro',
    timesDone: 7,
  },

];

export const happyFeelings = [
  {
    type: `Amor`,
    description: `Sentimento afetivo; afeição viva por; afeto.`,
    imgSrc: require('../assets/feelings/amor.png'),
  },
  {
    type: `Afetividade`,
    description: `Psicologia Conjunto dos fenômenos afetivos (tendências, emoções, sentimentos, paixões etc.).`,
    imgSrc: require('../assets/feelings/afetividade.png'),
  },
  {
    type: `Alegria`,
    description: `Condição de satisfação da pessoa que está contente, alegre.`,
    imgSrc: require('../assets/feelings/alegria.png'),
  },
  {
    type: `Altruismo`,
    description: `Atitude que visa o bem-estar do próximo, não tendo em consideração interesses particulares.`,
    imgSrc: require('../assets/feelings/altruismo.png'),
  },
  {
    type: `Bem-estar`,
    description: `Estado da pessoa tranquila, de quem está seguro ou confortável; tranquilidade.`,
    imgSrc: require('../assets/feelings/bem-estar.png'),
  },
  {
    type: `Coragem`,
    description: `Ausência de medo diante de riscos ou do perigo; bravura, valentia.`,
    imgSrc: require('../assets/feelings/coragem.png'),
  },
  {
    type: `Empatia`,
    description: `Ação de se colocar no lugar de outra pessoa, buscando agir ou pensar da forma como ela pensaria ou agiria nas mesmas circunstâncias.`,
    imgSrc: require('../assets/feelings/empatia.png'),
  },
  {
    type: `Esperança`,
    description: `Confiança de que algo bom acontecerá.`,
    imgSrc: require('../assets/feelings/esperanca.png'),
  },
  {
    type: `Gratidão`,
    description: `Reconhecimento por um benefício recebido.`,
    imgSrc: require('../assets/feelings/gratidao.png'),
  },
  // {
  //   type: `Humildade`,
  //   description: `Qualidade de quem é modesto, simples, humilde; simplicidade.`,
  //   imgSrc: require('../assets/feelings/humildade.png'),
  // },
  {
    type: `Inspiração`,
    description: `Algo ou alguém que inspira, que incita a capacidade de criação`,
    imgSrc: require('../assets/feelings/inspiracao.png'),
  },
  {
    type: `Paixão`,
    description: `Sentimento intenso que possui a capacidade de alterar o comportamento, o pensamento etc; amor, ódio ou desejo demonstrado de maneira extrema.`,
    imgSrc: require('../assets/feelings/paixao.png'),
  },
  {
    type: `Paciência`,
    description: `Característica de paciente, de quem não perde a calma ou suporta algo sem reclamar`,
    imgSrc: require('../assets/feelings/paciencia.png'),
  },
  {
    type: `Paz`,
    description: `Calma; estado de calmaria, de harmonia, de concórdia e de tranquilidade`,
    imgSrc: require('../assets/feelings/paz.png'),
  },
  {
    type: `Piedade`,
    description: `Compaixão pelo sofrimento de uma outra pessoa; misericórdia.`,
    imgSrc: require('../assets/feelings/piedade.png'),
  },
  {
    type: `Plenitude`,
    description: `Condição daquilo que está completo, inteiro, sem espaço.`,
    imgSrc: require('../assets/feelings/plenitude.png'),
  },
  {
    type: `Resiliência`,
    description: `Capacidade de quem se adapta às intempéries, às alterações ou aos infortúnios.`,
    imgSrc: require('../assets/feelings/resiliencia.png'),
  },
  {
    type: `Simpatia`,
    description: `Sentimento de reconhecimento ou consentimento que se desperta em outra pessoa`,
    imgSrc: require('../assets/feelings/simpatia.png'),
  },
]

export const neutralFeelings = [
  {
    type: `Indiferença`,
    description: `Característica de quem se mantém tranquilo, não demonstrando preocupações, se comportando de forma indiferente diante de algo ou de alguém`,
    imgSrc: require('../assets/feelings/indiferenca.png'),
  },
  {
    type: `Interesse`,
    description: `Modo de agir que expressa benevolência`,
    imgSrc: require('../assets/feelings/interesse.png'),
  },
  {
    type: `Indecisão`,
    description: `Sem decisão; ausência de determinação ou resolução; falta de veemência, de ação etc.`,
    imgSrc: require('../assets/feelings/indecisao.png'),
  },
  {
    type: `Preguiça`,
    description: `Lentidão em fazer qualquer coisa; morosidade.`,
    imgSrc: require('../assets/feelings/preguica.png'),
  },
  {
    type: `Surpresa`,
    description: `O que provoca espanto; aquilo capaz de surpreender, de espantar.`,
    imgSrc: require('../assets/feelings/surpresa.png'),
  },
]

export const sadFeelings = [
  {
    type: `Abandono`,
    description: `Emocionalmente deserto ou separado; um sentimento de ser "deixado para trás" de forma não física.`,
    imgSrc: require('../assets/feelings/abandono.png'),
  },
  {
    type: `Amargura`,
    description: `Uma atitude dura, desagradável ou cínica. Ficar zangado ou ressentido por causa de experiências ofensivas ou injustas.`,
    imgSrc: require('../assets/feelings/amargura.png'),
  },
  {
    type: `Ansiedade`,
    description: `um sentimento generalizado de mal estar e pressentimento; um medo do desconhecido; medo sem motivo (por exemplo, ela se sente ansiosa e com medo o tempo todo, sem motivo aparente).`,
    imgSrc: require('../assets/feelings/ansiedade.png'),
  },
  {
    type: `Baixa autoestima`,
    description: `uma baixa avaliação do próprio valor; sentindo e focando nas falhas de alguém; mantendo um sentimento de desrespeito por si mesmo; não confiante; falta de amor próprio.`,
    imgSrc: require('../assets/feelings/baixa-estima.png'),
  },
  {
    type: `Choque`,
    description: `um distúrbio repentino ou violento das emoções ou sensibilidades; surpresa extrema; sentir-se traumatizado ou atordoado.`,
    imgSrc: require('../assets/feelings/choque.png'),
  },
  {
    type: `Ciúme`,
    description: `ressentido e invejoso do sucesso, das realizações ou das vantagens de alguém. Tendo medos suspeitos; temores de rivalidade ou infidelidade. Resulta do medo de não ser amado e / ou da insegurança.`,
    imgSrc: require('../assets/feelings/ciume.png'),
  },
  {
    type: `Confusão`,
    description: `um sentimento desorientado; pensamento nebuloso; caos; falta de nitidez ou clareza; perplexidade; um estado mental perturbado.`,
    imgSrc: require('../assets/feelings/confusao.png'),
  },
  {
    type: `Culpa`,
    description: `A sensação de ter feito algo errado ou cometido um crime. Sentir-se responsável pelas ações prejudiciais de outra pessoa.`,
    imgSrc: require('../assets/feelings/culpa.png'),
  },
  {
    type: `Fracasso`,
    description: `quando alguém fica aquém do sucesso ou conquista em algo esperado, tentado ou desejado;`,
    imgSrc: require('../assets/feelings/fracasso.png'),
  },
  {
    type: `Frustração`,
    description: `Exasperação; estar preso ou incapaz de progredir; sentir-se impedido de causar uma mudança ou alcançar um objetivo ou meta.`,
    imgSrc: require('../assets/feelings/frustracao.png'),
  },
  {
    type: `Humilhação`,
    description: `uma dolorosa perda de orgulho, dignidade ou respeito próprio; sentir-se mortificado; envergonhado.`,
    imgSrc: require('../assets/feelings/humilhacao.png'),
  },
  {
    type: `Indecisão`,
    description: `Incapacidade de tomar uma decisão; oscilando entre uma escolha ou outra. Decorre de desconfiança em si mesmo ou de duvidar da capacidade de tomar uma boa decisão.`,
    imgSrc: require('../assets/feelings/indecisao.png'),
  },
  {
    type: `Insegurança`,
    description: `falta de confiança; autoconsciente; tímido. Sentindo-se inseguro de perigo ou ridículo.`,
    imgSrc: require('../assets/feelings/inseguranca.png'),
  },
  {
    type: `Irritado`,
    description: `incomodado; aborrecido; exasperado; tirado do sério.`,
    imgSrc: require('../assets/feelings/irritacao.png'),
  },
  {
    type: `Luto`,
    description: `sofrimento emocional intenso causado por perda, desastre, infortúnio, etc .; uma tristeza aguda e profunda tristeza. Uma reação universal ao luto. Também pode estar se sentindo assediado, irritado ou exasperado.`,
    imgSrc: require('../assets/feelings/luto.png'),
  },
  {
    type: `Nervosismo`,
    description: `Anormal ou extremamente inquieto ou apreensivo; medroso; tímido; sentir-se nervoso.`,
    imgSrc: require('../assets/feelings/nervosismo.png'),
  },
  {
    type: `Nojo`,
    description: `Um sentimento de repugnância; quando o bom gosto ou o senso moral são ofendidos; uma forte aversão. (por exemplo, ela sentiu nojo quando o assassino foi absolvido).`,
    imgSrc: require('../assets/feelings/nojo.png'),
  },
  {
    type: `Medo`,
    description: `Uma emoção fortemente angustiante despertada por perigo iminente, mal ou dor; a ameaça pode ser real ou imaginada.`,
    imgSrc: require('../assets/feelings/medo.png'),
  },
  {
    type: `Perdido`,
    description: `Não é possível ver o curso correto ou aceitável; não tendo direção. Emocionalmente perdido refere-se a um sentimento de incapacidade de ver qual a decisão ou direção correta, de não encontrar estabilidade emocional`,
    imgSrc: require('../assets/feelings/perdido.png'),
  },
  {
    type: `Raiva`,
    description: `um forte descontentamento e beligerância despertados por algo real ou supostamente errado; ira. A raiva é frequentemente usada como encobrimento ou forma de negação para emoções de mágoa ou medo`,
    imgSrc: require('../assets/feelings/raiva.png'),
  },
  {
    type: `Rejeição`,
    description: `Sentimento negado, recusado ou rejeitado; descartado como inútil ou sem importância; expulsos; indesejados; abandonado.`,
    imgSrc: require('../assets/feelings/rejeicao.png'),
  },
  {
    type: `Saudade`,
    description: `Ter um forte desejo; um anseio; ansiando por; sentir falta de alguém ou algo; querer algo que você não tem (por exemplo, ela ansiava por uma vida diferente).`,
    imgSrc: require('../assets/feelings/saudade.png'),
  },
  {
    type: `Solidão`,
    description: `Estado de quem está só, retirado do mundo ou de quem se sente desta forma mesmo estando rodeado por outras pessoas; isolamento`,
    imgSrc: require('../assets/feelings/solidao.png'),
  },
  {
    type: `Tédio`,
    description: `Sentimento de aborrecimento, nojo, desgosto`,
    imgSrc: require('../assets/feelings/tedio.png'),
  },
  // {
  //   type: `Traído`,
  //   description: `Trair é ter sua confiança quebrada, ser abandonada ou ferida por alguém de confiança.`,
  //   imgSrc: require('../assets/feelings/traido.png'),
  // },
  {
    type: `Tristeza`,
    description: `um triste arrependimento; angústia causada por perda, decepção ou pesar; sentir ou expressar tristeza, infelicidade.`,
    imgSrc: require('../assets/feelings/tristeza.png'),
  },
  {
    type: `Vergonha`,
    description: `Uma sensação de estar errado, com defeito ou de má reputação. A sensação dolorosa de ter feito ou experimentado algo desonroso, impróprio ou tolo; desgraça; humilhação; um motivo de arrependimento.`,
    imgSrc: require('../assets/feelings/vergonha.png'),
  },
  // {
  //   type: `Vulnerabilidade`,
  //   description: `Sensação de dano, emocional ou físico; inseguro; instável.`,
  //   imgSrc: require('../assets/feelings/vulnerabilidade.png'),
  // },
]
