// Textos do site (gerados a partir do projeto original)

/* ---------- Página inicial ---------- */
const DEFAULT_HOME = {
  badge: "Mostra de Profissões",
  headline: "Você está pronto para criar o futuro?",
  intro:
    "Desenvolvedores web transformam ideias em sites, aplicativos e sistemas que milhões de pessoas usam. Eles planejam, escrevem código, testam e colocam tudo no ar — unindo lógica, criatividade e resolução de problemas.",
  quote: "Você utiliza tecnologia todos os dias. Já imaginou ser a pessoa que a constrói?",
};

/* ---------- Game ---------- */

const DEFAULT_GAME = [
  {
    title: "Fase 1 · Quem é quem?",
    goal: "Identifique se o trecho é HTML, CSS ou JavaScript.",
    questions: [
      { q: "Qual linguagem é esta?", code: "<h1>Olá, mundo!</h1>", options: ["HTML", "CSS", "JavaScript"], answer: 0, explain: "Tags entre < > como <h1> são HTML: elas definem a estrutura e o conteúdo da página." },
      { q: "Qual linguagem é esta?", code: "h1 { color: blue; }", options: ["HTML", "CSS", "JavaScript"], answer: 1, explain: "Seletor + chaves + propriedade: valor é a sintaxe do CSS, que cuida da aparência." },
      { q: "Qual linguagem é esta?", code: "alert('Bem-vindo!');", options: ["HTML", "CSS", "JavaScript"], answer: 2, explain: "alert() é uma função JavaScript: ela executa uma ação quando o código roda." },
      { q: "Qual linguagem é esta?", code: "button:hover { background: purple; }", options: ["HTML", "CSS", "JavaScript"], answer: 1, explain: ":hover é um estado do CSS — muda o estilo quando o mouse passa por cima." },
      { q: "Qual linguagem é esta?", code: "let pontos = 10;\npontos = pontos + 5;", options: ["HTML", "CSS", "JavaScript"], answer: 2, explain: "let cria uma variável em JavaScript, que guarda valores que podem mudar." },
    ],
  },
  {
    title: "Fase 2 · Caça aos erros",
    goal: "Encontre o problema em cada trecho.",
    questions: [
      { q: "O que está errado?", code: "<p>Olá, visitante!<p>", options: ["Falta fechar a tag com </p>", "A tag p não existe", "Falta ponto e vírgula"], answer: 0, explain: "Toda tag de conteúdo precisa ser fechada: <p>...</p>." },
      { q: "O que está errado?", code: "h1 { color: red }\np { font-size 18px; }", options: ["Falta : depois de font-size", "red não é uma cor", "h1 não pode ter cor"], answer: 0, explain: "No CSS, propriedade e valor são separados por dois pontos: font-size: 18px;" },
      { q: "O que está errado?", code: "consol.log('teste');", options: ["O certo é console.log", "Faltam aspas duplas", "log não existe"], answer: 0, explain: "Um erro de digitação quebra o código. O objeto correto é console." },
      { q: "O que está errado?", code: "if (idade > 18 {\n  liberar();\n}", options: ["Falta fechar o parêntese", "if não existe", "Falta uma vírgula"], answer: 0, explain: "A condição precisa ficar entre parênteses completos: if (idade > 18) {" },
      { q: "O que está errado?", code: "<img src=\"foto.jpg\">", options: ["Falta o texto alternativo (alt)", "img precisa de </img>", "src está escrito errado"], answer: 0, explain: "O atributo alt descreve a imagem para leitores de tela — essencial para acessibilidade." },
    ],
  },
  {
    title: "Fase 3 · Lógica",
    goal: "Pense como o computador: sequências e condições.",
    questions: [
      { q: "Qual o valor final de x?", code: "let x = 2;\nx = x * 3;\nx = x + 1;", options: ["7", "9", "6"], answer: 0, explain: "2 × 3 = 6; depois 6 + 1 = 7. O código roda linha por linha, em ordem." },
      { q: "O que aparece na tela?", code: "let nota = 8;\nif (nota >= 7) {\n  mostrar('Aprovado');\n} else {\n  mostrar('Recuperação');\n}", options: ["Aprovado", "Recuperação", "Nada"], answer: 0, explain: "8 é maior ou igual a 7, então a condição é verdadeira e roda o primeiro bloco." },
      { q: "Quantas vezes 'Oi' é exibido?", code: "for (let i = 0; i < 3; i++) {\n  mostrar('Oi');\n}", options: ["3", "2", "4"], answer: 0, explain: "i vale 0, 1 e 2 — três repetições. Quando i chega a 3 o laço para." },
      { q: "Qual a ordem correta para fazer um site?", options: ["Planejar → Criar → Testar → Publicar", "Publicar → Testar → Criar", "Criar → Publicar → Planejar"], answer: 0, explain: "Primeiro entendemos o problema, depois construímos, testamos e só então publicamos." },
      { q: "Qual o resultado?", code: "let a = true;\nlet b = false;\nmostrar(a && b);", options: ["false", "true", "erro"], answer: 0, explain: "&& (E) só é verdadeiro quando os dois lados são verdadeiros." },
    ],
  },
  {
    title: "Fase 4 · Na prática",
    goal: "Escolha a melhor solução para cada situação real.",
    questions: [
      { q: "O site está desalinhado no celular. O que usar?", options: ["Design responsivo com CSS (media queries/flexbox)", "Criar outro site só para celular", "Pedir ao usuário para girar a tela"], answer: 0, explain: "CSS responsivo adapta o mesmo site a qualquer tamanho de tela." },
      { q: "Onde guardar os pedidos de uma loja virtual?", options: ["Em um banco de dados", "Em uma imagem", "No CSS"], answer: 0, explain: "Bancos de dados armazenam informações de forma organizada e segura." },
      { q: "Um botão precisa mostrar uma mensagem ao clicar. Qual linguagem?", options: ["JavaScript", "CSS", "HTML apenas"], answer: 0, explain: "Interatividade (reagir a cliques) é tarefa do JavaScript." },
      { q: "Como proteger a senha de uma API?", options: ["Guardar no servidor, nunca no código do navegador", "Colocar no HTML", "Escrever no título da página"], answer: 0, explain: "Tudo que está no navegador pode ser visto. Segredos ficam no servidor." },
      { q: "O site está lento por causa de imagens enormes. Solução?", options: ["Comprimir e redimensionar as imagens", "Remover todo o texto", "Trocar a cor de fundo"], answer: 0, explain: "Imagens otimizadas carregam muito mais rápido, principalmente no celular." },
    ],
  },
];

/* ---------- Aprenda ---------- */
const DEFAULT_LESSONS = [
  { icon: "user", title: "O que faz um desenvolvedor web?", text: "Cria e mantém sites e sistemas. Conversa com clientes, transforma ideias em telas, escreve código, testa e corrige problemas.", example: "Ideia: “quero vender bolos online” → o dev cria a vitrine, o carrinho e o pagamento." },
  { icon: "monitor", title: "Front-end", text: "É a parte que você vê e toca: botões, cores, textos, animações. Usa HTML, CSS e JavaScript no navegador.", example: "<button class=\"comprar\">Comprar</button>" },
  { icon: "server", title: "Back-end", text: "É a parte que roda escondida no servidor: regras de negócio, login, cálculos e comunicação com o banco de dados.", example: "se (estoque > 0) { confirmarPedido() } senão { avisar('Esgotado') }" },
  { icon: "code", title: "HTML", text: "A estrutura da página. Diz o que é título, parágrafo, imagem, link ou formulário.", example: "<h1>Minha página</h1>\n<p>Olá!</p>" },
  { icon: "palette", title: "CSS", text: "A aparência. Define cores, tamanhos, espaçamentos, fontes e como tudo se adapta a telas diferentes.", example: "h1 {\n  color: #55DFFF;\n  font-size: 32px;\n}" },
  { icon: "zap", title: "JavaScript", text: "O comportamento. Faz a página reagir a cliques, validar formulários e atualizar informações sem recarregar.", example: "botao.onclick = () => alert('Clicou!');" },
  { icon: "database", title: "Banco de dados", text: "Onde as informações ficam guardadas de forma organizada: usuários, produtos, pedidos, notas.", example: "Tabela alunos: | nome | turma | nota |\n| Ana | 9A | 9.5 |" },
  { icon: "cloud", title: "Servidor", text: "Um computador sempre ligado na internet que entrega o site para quem acessa o endereço.", example: "Você digita escola.com.br → o servidor envia os arquivos → o navegador mostra a página." },
  { icon: "rocket", title: "Como nasce um site", text: "1. Ideia e planejamento · 2. Design · 3. Desenvolvimento · 4. Testes · 5. Publicação · 6. Melhorias contínuas.", example: "Rascunho no papel → protótipo → código → site no ar!" },
  { icon: "briefcase", title: "Onde desenvolvedores trabalham", text: "Empresas de tecnologia, bancos, lojas, agências, startups, governo, escolas — ou de forma remota e como freelancer.", example: "Uma mesma pessoa pode trabalhar de casa para clientes de outros países." },
];

/* ---------- Modelos do Editor Visual ---------- */
const DEFAULT_TEMPLATES = [
  { id: "loja", label: "Loja virtual", company: "NovaShop", title: "Estilo que acompanha você", description: "Tênis, fones e acessórios com entrega rápida para todo o Brasil.", button: "Ver produtos", bg: "#0F172A", text: "#F8FAFC", btn: "#168BFF" },
  { id: "portfolio", label: "Portfólio", company: "Ana Lima · Design", title: "Crio interfaces que as pessoas amam usar", description: "Designer e desenvolvedora front-end. Veja alguns projetos recentes.", button: "Ver projetos", bg: "#F5F3FF", text: "#1E1B4B", btn: "#8B5CF6" },
  { id: "empresa", label: "Site empresarial", company: "Horizonte Consultoria", title: "Soluções inteligentes para o seu negócio", description: "Estratégia, tecnologia e pessoas trabalhando juntas pelo seu crescimento.", button: "Fale conosco", bg: "#FFFFFF", text: "#0F172A", btn: "#0EA5E9" },
];

