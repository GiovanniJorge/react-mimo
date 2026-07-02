# React — Mimo

Exercícios e projetos relacionados ao curso "React" da Mimo — coleção organizada de aplicações web construídas com React para aprender e praticar os fundamentos da biblioteca.

## Conteúdo principal
- Projetos práticos focados em conceitos e componentes React.
- Aplicações completas criadas com Create React App.
- Estrutura modular com pastas organizadas por projeto.
- Exemplos que cobrem desde componentes básicos até gerenciamento de estado.

## Badges
![Licença](https://img.shields.io/github/license/GiovanniJorge/react-mimo?style=flat-square)
![Projetos](https://img.shields.io/badge/quantidade-2%20projetos-blue?style=flat-square)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Destaques do repositório](#destaques-do-repositório)
- [Como executar os projetos](#como-executar-os-projetos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza projetos React desenvolvidos durante o curso da Mimo. Cada projeto exemplifica conceitos e padrões da biblioteca React, desde a criação de componentes funcionais até a manipulação de estado e props. Os projetos estão estruturados de forma independente e podem ser executados isoladamente.

## Estrutura do repositório
Top-level:
```text
├── .gitattributes
├── LICENSE
├── README.md
└── projetos-gerais/            # Projetos de aprendizado geral com React
    ├── score-keeper/          # Aplicação de contagem de pontos (props, estado, eventos)
    │   ├── public/
    │   └── src/               # Componentes, lógica estruturada e estilos
    ├── wordle-clone/          # Clone do jogo Wordle em React (estado complexo e lógica)
    │   ├── public/
    │   └── src/               # Componentes, lógica estruturada e estilos
    └── ...                    # Outros subprojetos construídos ao longo do curso
```

### Como se encaixa:
- O repositório abriga uma variedade de projetos independentes criados ao longo do curso.
- Cada pasta dentro de `projetos-gerais/` funciona como um ecossistema independente baseado em Create React App, contendo seu próprio arquivo `package.json` e documentação dedicada.

## Destaques do repositório

### Score Keeper
* **Descrição:** Aplicativo utilitário voltado à contagem dinâmica de pontuações, explorando ciclos de eventos, passagem de props e renderização condicional.
* **Tecnologias:** React (Hooks), CSS3.

### Wordle Clone
* **Descrição:** Clone do famoso jogo Wordle adaptado para ambiente React, exercitando lógicas de validação de strings, gerenciamento de estados complexos de teclado e matrizes de jogo.
* **Tecnologias:** React (Hooks), CSS3.

## Como executar os projetos

### Pré-requisitos
- **Node.js** (v14 ou superior)
- **npm** como gerenciador de pacotes

### Passos para execução

1. **Clone o repositório:**
```bash
git clone [https://github.com/GiovanniJorge/react-mimo.git](https://github.com/GiovanniJorge/react-mimo.git)
cd react-mimo
```

2. **Navegue até a pasta do projeto e instale as dependências (Exemplo com Score Keeper):**
```bash
cd projetos-gerais/score-keeper
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm start
```
A aplicação abrirá automaticamente em `http://localhost:3000`. Para gerar a versão de produção otimizada em uma pasta `/build`, execute `npm run build`.

## Contribuindo
Contribuições são bem-vistas! Se deseja adicionar um novo projeto ou refatorar componentes para melhores padrões de Hooks, siga os passos abaixo:

1. Faça um **Fork** do repositório.
2. Crie uma branch com nome descritivo: `feature/novo-projeto` ou `fix/correcao`.
3. Faça commits atômicos com mensagens claras e objetivas.
4. Abra um **Pull Request** detalhando as alterações implementadas.

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo [LICENSE](LICENSE) na raiz.

## Autor / Contato
- **Autor:** Giovanni Jorge  
- **Repositório:** [https://github.com/GiovanniJorge/react-mimo](https://github.com/GiovanniJorge/react-mimo)
