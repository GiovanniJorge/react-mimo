# React — Mimo
Exercícios e projetos relacionados ao curso "React" da Mimo — coleção organizada de aplicações web construídas com React para aprender e praticar os fundamentos da biblioteca.

## Conteúdo principal
- Projetos práticos focados em conceitos e componentes React.
- Aplicações completas criadas com Create React App.
- Estrutura modular com pastas organizadas por projeto.
- Exemplos que cobrem desde componentes básicos até gerenciamento de estado.

## Badges
- Licença: MIT (ver arquivo LICENSE)
- Linguagens: JavaScript, CSS, HTML

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como executar os projetos](#como-executar-os-projetos)
- [Boas práticas / recomendações](#boas-práticas--recomendações)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza projetos React desenvolvidos durante o curso da Mimo. Cada projeto exemplifica conceitos e padrões da biblioteca React, desde a criação de componentes funcionais até a manipulação de estado e props. Os projetos estão estruturados de forma independente e podem ser executados isoladamente.

## Estrutura do repositório
Top-level:
- `.gitattributes`
- `LICENSE`
- `README.md`
- `projetos-gerais/`           — projetos de aprendizado geral com React
  - `score-keeper/`            — aplicação de contagem de pontos (props, estado, eventos)
  - `wordle-clone/`            — clone do jogo Wordle em React (gerenciamento de estado, lógica de jogo)

Como se encaixa:
- Cada pasta dentro de `projetos-gerais/` é um projeto independente com seu próprio `package.json` e estrutura Create React App.
- A forma usual de usar o repositório é executar o projeto específico que deseja estudar.
- Cada projeto contém componentes React que demonstram conceitos específicos da biblioteca.

## Como executar os projetos

### Pré-requisitos
- Node.js (versão 14+)
- npm (normalmente incluído com Node.js)

### Instalação e execução de um projeto
Acesse a pasta do projeto desejado e execute os comandos:

```bash
# Navegar para o projeto
cd projetos-gerais/score-keeper

# Instalar dependências
npm install

# Executar no modo desenvolvimento
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000` no seu navegador. A página recarrega quando você faz alterações.

### Compilar para produção
Para gerar uma versão otimizada e minificada:

```bash
cd projetos-gerais/seu-projeto
npm run build
```

Os arquivos compilados estarão na pasta `build/`, prontos para deploy.

### Scripts disponíveis (em cada projeto)

- **`npm start`** — executa a app em modo desenvolvimento (http://localhost:3000)
- **`npm test`** — inicia o test runner em modo interativo
- **`npm run build`** — compila a app para produção na pasta `build/`
- **`npm run eject`** — ⚠️ operação irreversível; oferece controle total sobre configuração (normalmente não é necessário)

## Boas práticas / recomendações

### Desenvolvimento
- Use nomes descritivos para componentes e funções.
- Mantenha componentes pequenos e focados em uma única responsabilidade.
- Documente props importantes com comentários ou JSDoc.
- Prefira componentes funcionais com Hooks (`useState`, `useEffect`, etc.) em vez de componentes de classe.

### Estrutura de pastas (dentro de cada projeto)
```
projeto/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/       — componentes reutilizáveis
│   ├── pages/           — páginas ou views principais
│   ├── App.js           — componente raiz
│   ├── index.js         — ponto de entrada
│   └── index.css        — estilos globais
├── package.json
└── README.md
```

### Estilo e linting
- Use o Prettier (se configurado) para manter formatação consistente.
- Mantenha estilos CSS organizados (considere usar módulos CSS ou styled-components).
- Teste a aplicação em diferentes tamanhos de tela para garantir responsividade.

### Commits
- Faça commits atômicos com mensagens claras.
- Exemplo: `"feat: adiciona componente de contador"` ou `"fix: corrige bug no score-keeper"`.

## Contribuindo
Contribuições são bem-vindas (ex.: melhorias, correções, novos projetos, comentários). Fluxo sugerido:

1. Fork do repositório.
2. Criar branch com nome descritivo: `feature/novo-projeto` ou `fix/correcao`.
3. Fazer commits atômicos com mensagens claras.
4. Abrir Pull Request descrevendo as mudanças e o conceito React abordado.
5. Se aplicável, inclua instruções sobre como testar o novo projeto.

Sugestões adicionais:
- Adicione um pequeno README em cada pasta de projeto explicando o objetivo e conceitos aprendidos.
- Considere adicionar componentes reutilizáveis em uma pasta compartilhada se houver padrões comuns.
- Documente componentes complexos com comentários explicativos.

## Testes e automação (opcional)
- Poderia ser adicionado um workflow (GitHub Actions) que executa `npm install` e `npm run build` em cada projeto para garantir que o repositório permaneça compilável.
- Considere adicionar testes unitários com Jest e React Testing Library para validar componentes críticos.

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo `LICENSE` na raiz.

## Autor / Contato
Autor: Giovanni Jorge  
Repositório: https://github.com/GiovanniJorge/react-mimo
