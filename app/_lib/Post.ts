export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    readTime: string;
}

export const posts: Post[] = [
  {
    "slug": "ia-no-dia-a-dia",
    "title": "Inteligência Artificial no dia a dia: onde já estamos usando sem perceber?",
    "excerpt": "Descubra como a Inteligência Artificial já influencia sua rotina sem que você perceba.",
    "content": "A Inteligência Artificial está presente em aplicativos de transporte, redes sociais, bancos e até no e-mail. Muitas vezes, nem percebemos que algoritmos estão decidindo recomendações e otimizando rotinas. O futuro da IA aponta para assistentes ainda mais integrados e automações em tempo real.",
    "date": "2025-09-13",
    "author": "Tech Insights",
    "readTime": "4 min"
  },
  {
    "slug": "tendencias-tecnologia-2025",
    "title": "5 tendências de tecnologia para ficar de olho em 2025",
    "excerpt": "Computação quântica, 6G, blockchain e mais: conheça as inovações que vão marcar o ano.",
    "content": "Entre os destaques para este ano estão: (1) Computação quântica acessível, (2) Expansão do 6G, (3) Blockchain além das criptomoedas, (4) Realidade mista (VR + AR), (5) Automação com robôs colaborativos (cobots). Essas tendências prometem impactar desde a indústria até o nosso cotidiano.",
    "date": "2025-09-13",
    "author": "Tech Insights",
    "readTime": "3 min"
  },
  {
    "slug": "trabalho-remoto-vr",
    "title": "O futuro do trabalho remoto com realidade virtual",
    "excerpt": "Home office imersivo: entenda como escritórios virtuais podem mudar a forma de trabalhar.",
    "content": "Empresas estão testando escritórios virtuais em VR, onde colaboradores interagem como avatares em salas 3D. Essa tecnologia pode reduzir custos, aumentar a imersão e aproximar equipes de diferentes países. Mas também traz desafios como acessibilidade, fadiga visual e dependência de hardware.",
    "date": "2025-09-13",
    "author": "Tech Insights",
    "readTime": "5 min"
  },
  {
    "slug": "seguranca-digital-dicas",
    "title": "Segurança digital: 3 dicas simples para proteger seus dados",
    "excerpt": "Pequenas ações que fazem grande diferença para sua segurança online.",
    "content": "Use autenticação de dois fatores. Evite redes Wi-Fi públicas sem VPN. Mantenha seus apps atualizados. Com pequenos hábitos, é possível reduzir bastante os riscos de ataques virtuais.",
    "date": "2025-09-13",
    "author": "Tech Insights",
    "readTime": "2 min"
  },
  {
    "slug": "nuvem-para-empresas",
    "title": "Computação em nuvem: vale a pena migrar sua empresa?",
    "excerpt": "Entenda os benefícios e os desafios da nuvem para pequenas e médias empresas.",
    "content": "A nuvem oferece escalabilidade, redução de custos e acesso remoto a dados. No entanto, é preciso avaliar questões de segurança, dependência de fornecedores e custos a longo prazo. Pequenas e médias empresas estão adotando soluções híbridas como meio-termo.",
    "date": "2025-09-13",
    "author": "Tech Insights",
    "readTime": "6 min"
  },
];

export function getAllPosts(): Post[]{
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug:string): Post | undefined{
    return posts.find(post => post.slug === slug);
}
