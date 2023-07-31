import { postsType, commentsType } from "./dataInterface"

// lista de posts
export const posts: postsType[] = [
    {
        id: 1,
        title: "Novo smartphone XYZ lançado com tecnologia inovadora",
        imageUrl: "../images/card-images/card01.jpg",
        body: "A empresa ABC acaba de lançar o aguardado Smartphone XYZ, que incorpora recursos avançados de realidade aumentada. Com uma câmera aprimorada e sensores de última geração, o dispositivo permite uma experiência imersiva única para os usuários, abrindo novas possibilidades nos campos de entretenimento, educação e negócios."
    },
    {
        id: 2,
        title: "Avanços na Inteligência Artificial: Assistente Doméstico YZX aprende com as emoções dos usuários",
        imageUrl: "../images/card-images/card02.jpg",
        body: "O Assistente Doméstico YZX, baseado em inteligência artificial, deu um grande passo à frente ao aprender e responder de acordo com as emoções dos usuários. Utilizando algoritmos avançados, o assistente agora é capaz de identificar o humor do usuário e adaptar suas respostas para proporcionar uma experiência mais personalizada e empática."
    },
    {
        id: 3,
        title: "Empresas de tecnologia unem forças para combater notícias falsas nas redes sociais",
        imageUrl: "../images/card-images/card03.jpg",
        body: "Diante do crescente problema das notícias falsas nas redes sociais, grandes empresas de tecnologia estão se unindo para enfrentar essa questão. Facebook, Google e Twitter anunciaram uma parceria inédita para desenvolver ferramentas inteligentes que identifiquem e reduzam a disseminação de informações enganosas, visando garantir um ambiente digital mais seguro e confiável."
    },
    {
        id: 4,
        title: "Impressoras 3D revolucionam a medicina com próteses personalizadas de baixo custo",
        imageUrl: "../images/card-images/card04.jpg",
        body: "A tecnologia de impressão 3D está transformando a medicina ao permitir a produção de próteses personalizadas de baixo custo. Pacientes agora têm acesso a próteses feitas sob medida para suas necessidades específicas, impulsionando a acessibilidade e melhorando a qualidade de vida para aqueles que necessitam de membros artificiais."
    },
    {
        id: 5,
        title: "Carros autônomos ganham espaço nas cidades e reduzem acidentes de trânsito",
        imageUrl: "../images/card-images/card05.jpg",
        body: "A presença de carros autônomos nas estradas está crescendo, e cidades ao redor do mundo estão se adaptando a essa nova realidade. Com sistemas avançados de sensores e algoritmos inteligentes, esses veículos têm demonstrado uma redução significativa nos acidentes de trânsito, sinalizando um futuro mais seguro e eficiente para o transporte urbano."
    },
    {
        id: 6,
        title: "Realidade virtual no mundo dos esportes: fãs experimentam a emoção dos jogos como nunca antes",
        imageUrl: "../images/card-images/card06.jpg",
        body: "A realidade virtual está revolucionando a maneira como os fãs experimentam os jogos esportivos. Com óculos de RV cada vez mais acessíveis, os espectadores podem se sentir como se estivessem dentro do estádio, acompanhando as partidas em tempo real e desfrutando de uma perspectiva imersiva que proporciona uma nova dimensão de emoção e interação durante os eventos esportivos."
    }
]

// lista de comentarios
export const comments: commentsType[] = [
    {
        id: 1,
        postId: 1,
        userName:"techlover87",
        email: "techlover87@example.com",
        body: "Finalmente, um smartphone que parece ter saído de um filme de ficção científica! Mal posso esperar para experimentar a realidade aumentada no meu dia a dia. Parabéns à empresa ABC pela inovação!",
    },
    {
        id: 2,
        postId: 1,
        userName:"curiousmind23",
        email: "curiousmind23@example.com",
        body: "Realidade aumentada é a próxima grande revolução no mundo dos smartphones. Estou animado para ver como isso pode melhorar a forma como nos conectamos com o mundo ao nosso redor. Com certeza, vou considerar o Smartphone XYZ na próxima atualização!",
    },
    {
        id: 3,
        postId: 1,
        userName:"privacyconcerns",
        email: "privacyconcerns@example.com",
        body: "Essa tecnologia é realmente incrível, mas estou um pouco preocupado com a privacidade. Será que teremos controles suficientes para proteger nossos dados enquanto usamos a realidade aumentada? De qualquer forma, é uma novidade empolgante!",
    },
    {
        id: 4,
        postId: 2,
        userName:"bionicdreamer",
        email: "bionicdreamer@example.com",
        body: "Isso é simplesmente incrível! Ter um assistente que entenda e responda às nossas emoções é um salto gigante para a inteligência artificial. Mal posso esperar para ver como o Assistente Doméstico YZX vai me surpreender!",
    },
    {
        id: 5,
        postId: 2,
        userName:"futurist_driver",
        email: "futurist_driver@example.com",
        body: "Parece que estamos entrando em um episódio de Black Mirror! Embora seja fascinante, é importante lembrar que o Assistente Doméstico YZX ainda é uma máquina e não deve substituir a empatia humana real.",
    },
    {
        id: 6,
        postId: 2,
        userName:"sportsVRfanatic",
        email: "sportsVRfanatic@example.com",
        body: "Essa evolução na inteligência artificial pode ser um divisor de águas para pessoas com dificuldades emocionais. Imagine um assistente capaz de oferecer apoio emocional personalizado! Claro, é essencial garantir que a tecnologia seja usada eticamente.",
    },
    {
        id: 7,
        postId: 3,
        userName:"TechFanatic87",
        email: "techfan87@email.com",
        body: "Finalmente, as gigantes da tecnologia estão assumindo a responsabilidade e enfrentando o problema das notícias falsas. É uma excelente iniciativa para proteger a credibilidade das informações nas redes sociais",
    },
    {
        id: 8,
        postId: 3,
        userName:"AIEnthusiast123",
        email: "ai.enthusiast123@email.com",
        body: "Fico feliz em saber que as empresas estão trabalhando juntas, mas acredito que o combate às notícias falsas deve ser uma responsabilidade compartilhada entre usuários, empresas e governos. Todos nós temos um papel a desempenhar nessa luta!",
    },
    {
        id: 9,
        postId: 3,
        userName:"TruthSeeker55",
        email: "truthseeker55@email.com",
        body: "Isso pode ser um passo na direção certa, mas será que a inteligência artificial será capaz de distinguir nuances e sátiras? Espero que essas ferramentas sejam cuidadosamente ajustadas para evitar a censura injusta de conteúdo legítimo.",
    },
    {
        id: 10,
        postId: 4,
        userName:"TechMedic21",
        email: "techmedic21@email.com",
        body: "A tecnologia de impressão 3D é realmente uma bênção para as pessoas que precisam de próteses. Essa acessibilidade pode mudar vidas e devolver a esperança a muitos indivíduos. Incrível!",
    },
    {
        id: 11,
        postId: 4,
        userName:"AutoPilotDriver",
        email: "autopilotdriver@email.com",
        body: "É admirável ver como a impressão 3D está rompendo barreiras na medicina. Espero que essa tecnologia também alcance outras áreas da saúde, proporcionando soluções personalizadas para diferentes necessidades.",
    },
    {
        id: 12,
        postId: 4,
        userName:"SportsVRFan",
        email: "sports.vrfan@email.com",
        body: "Maravilhoso! Mas é importante lembrar que, mesmo com os avanços da impressão 3D, a qualidade e a segurança das próteses ainda precisam ser rigorosamente testadas e certificadas antes de serem utilizadas em pacientes.",
    },
    {
        id: 13,
        postId: 5,
        userName:"RealisticObserver",
        email: "realisticobserver@email.com",
        body: "Estou contando os dias para poder ter um carro autônomo! Além da segurança, imagino como isso vai liberar meu tempo durante os deslocamentos. Mal posso esperar por essa revolução!",
    },
    {
        id: 14,
        postId: 5,
        userName:"EthicalConcerns",
        email: "ethicalconcerns@email.com",
        body: "Carros autônomos são uma ideia incrível, mas precisamos garantir que as leis de trânsito e a infraestrutura das cidades estejam preparadas para receber essa tecnologia. A transição deve ser bem planejada.",
    },
    {
        id: 15,
        postId: 5,
        userName:"EthicalConcerns",
        email: "ethicalconcerns@email.com",
        body: "A redução de acidentes é uma ótima notícia, mas o que acontecerá com os empregos de motoristas? Espero que a transição para carros autônomos leve em consideração os impactos sociais e econômicos.",
    },
    {
        id: 16,
        postId: 6,
        userName:"ProstheticsAdvocate",
        email: "prostheticsadvocate@email.com",
        body: "Realidade virtual e esportes, a combinação perfeita! Estou ansioso para sentir a adrenalina dos jogos como se estivesse lá, na linha lateral. Vai ser demais!",
    },
    {
        id: 17,
        postId: 6,
        userName:"FutureDriver123",
        email: "futuredriver123@email.com",
        body: "Essa é uma maneira incrível de aproximar os fãs dos esportes, especialmente para aqueles que não podem ir aos estádios. A realidade virtual vai mudar a forma como vivenciamos as partidas!",
    },
    {
        id: 18,
        postId: 6,
        userName:"SportsVRfanatic",
        email: "sportsvrfanatic@email.com",
        body: "Só espero que os ingressos virtuais não se tornem excessivamente caros. Todos deveriam ter a oportunidade de experimentar a emoção dos jogos em realidade virtual sem estourar o orçamento.",
    },
]
