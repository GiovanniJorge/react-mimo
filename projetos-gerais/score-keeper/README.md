# Score Keeper

![Preview do projeto](preview.png)

Descrição
--------
Este é um projeto interativo de controle de pontuação (Score Keeper) implementado em React, HTML, CSS e JavaScript.  
A aplicação permite acompanhar e atualizar pontos de jogadores/equipes em tempo real de forma simples e intuitiva.  
O projeto foi criado como exercício educacional e como exemplo prático de gerenciamento de estado em React, manipulação de eventos e construção de interfaces dinâmicas.

Funcionalidades
--------------
- Controle de pontuação em tempo real.
- Incremento de pontos por jogador/equipe com clique de botão.
- Definição de pontuação máxima (meta de vitória).
- Destaque visual para vencedor e perdedor ao fim da partida.
- Botão de reset para reiniciar a pontuação.
- Interface responsiva e fácil de usar.
- Componentes React organizados e reutilizáveis.

Como usar (Local)
--------

### Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão 14.0 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

Verifique a instalação no terminal:
```bash
node --version
npm --version
```

### Instalação e Execução

1. Clone ou baixe o repositório:
```bash
git clone https://github.com/GiovanniJorge/react-mimo.git
cd react-mimo/projetos-gerais/score-keeper
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. O navegador abrirá automaticamente em `http://localhost:3000`. Caso contrário, acesse manualmente.

### Parando o servidor
Para parar a aplicação, pressione `Ctrl + C` no terminal.

Como funciona
---------------------
A aplicação utiliza React para gerenciar o estado da pontuação e as regras de vitória.

**Fluxo de operação:**
1. O componente principal (`App.js`) controla os estados de pontuação e limite de pontos com React Hooks (`useState`).
2. Cada jogador/equipe possui sua pontuação exibida na interface.
3. Ao clicar no botão de adicionar ponto, a pontuação é incrementada.
4. Quando um jogador/equipe atinge a pontuação máxima definida, o jogo é encerrado.
5. O botão de reset reinicia os pontos e permite uma nova partida.

**Regras padrão:**
- A partida começa com pontuação `0 x 0`.
- O limite inicial pode ser configurável (ex.: 5 pontos).
- Ao atingir o limite, novos incrementos são bloqueados até resetar.

Exemplos
--------
**Antes (início da partida):**
- Jogador A: 0
- Jogador B: 0
- Limite: 5

**Depois (após jogar):**
- Jogador A: 5 (vencedor)
- Jogador B: 3
- Partida encerrada até clicar em reset.

Arquivos principais
-------------------
- `src/App.js` — componente principal com gerenciamento de estado e regras do jogo.
- `src/App.css` — estilos gerais da aplicação.
- `src/index.js` — ponto de entrada da aplicação React.
- `src/index.css` — estilos globais.
- `package.json` — configuração de dependências e scripts.

> Se você tiver componentes separados (ex.: `ScoreBoard.jsx`, `PlayerScore.jsx`, `Controls.jsx`), adicione-os aqui.

Tecnologias
-----------
- **React** — biblioteca para construção da interface.
- **HTML5** — estrutura semântica.
- **CSS3** — estilização e responsividade.
- **JavaScript (ES6+)** — lógica da aplicação.
- **Node.js & npm** — gerenciamento de dependências e execução local.

Estrutura do Projeto
--------------------
```bash
projetos-gerais/score-keeper/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
│
├── public/
│   └── (arquivos estáticos)
│
├── package.json
├── package-lock.json
└── README.md
```

Scripts Disponíveis
-------------------

No diretório do projeto, você pode rodar:

### `npm start`
Executa a aplicação em modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) no navegador.

A página recarrega automaticamente quando você faz alterações.  
Possíveis erros de lint aparecerão no console.

### `npm test`
Inicia o test runner em modo interativo.  
Veja a documentação sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`
Compila a aplicação para produção na pasta `build`.  
Otimiza e minifica o código para melhor desempenho.

A aplicação está pronta para ser implantada!

### `npm run eject`
**Nota: esta é uma operação irreversível. Uma vez feito, você não pode voltar atrás!**

Se desejar ter controle total sobre a configuração do webpack e das ferramentas, pode usar `eject`.  
Isto copia todas as configurações para o seu projeto.

Extensões Futuras
------------------
- Adicionar modo para mais de dois jogadores.
- Incluir histórico de pontuações por rodada.
- Implementar cronômetro de partida.
- Adicionar tema escuro (dark mode).
- Persistir pontuações com `localStorage` ou backend.
- Criar animações visuais para vitória/derrota.

Acessibilidade e boas práticas
------------------------------
- Componentes organizados e reutilizáveis.
- Estado gerenciado com React Hooks.
- Interface clara com feedback visual de vencedor.
- Código com nomenclatura consistente para variáveis e funções.
- Estrutura simples para facilitar manutenção e evolução.

Contribuição
------------
Contribuições são bem-vindas! Sugestões:
- Melhorar a experiência visual e animações.
- Adicionar suporte para teclado.
- Implementar modo competitivo com estatísticas.
- Criar testes unitários para regras de pontuação.

Para contribuir:
1. Fork este repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`.
3. Faça commits descritivos.
4. Abra um Pull Request descrevendo as mudanças.

Solução de Problemas
--------------------

**Problema:** A aplicação não inicia depois de `npm start`.  
- **Solução:** Verifique se todas as dependências foram instaladas com `npm install` e se a porta 3000 não está em uso.

**Problema:** Erros de "módulo não encontrado".  
- **Solução:** Delete `node_modules` e `package-lock.json`, então rode `npm install` novamente.

**Problema:** Mudanças no código não aparecem no navegador.  
- **Solução:** Verifique se o servidor está rodando e tente limpar o cache do navegador (Ctrl+Shift+Delete).

Licença
-------
Nenhuma licença específica foi adicionada a este repositório por enquanto.  
Se desejar, adicione um arquivo `LICENSE` (por exemplo MIT) para permitir reuso explícito.

Autor
-----
Giovanni Jorge — repositório: [GiovanniJorge/react-mimo](https://github.com/GiovanniJorge/react-mimo)

Contato
-------
Problemas, dúvidas ou sugestões podem ser abertas como issues no repositório ou enviadas via perfil do GitHub.
