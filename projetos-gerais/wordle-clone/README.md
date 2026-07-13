# Wordle Clone

![Preview do projeto](preview1.png)

![Preview do projeto](preview2.png)

Descrição
--------
Este é um projeto interativo inspirado no jogo **Wordle**, implementado com React, HTML, CSS e JavaScript. O objetivo é adivinhar uma palavra secreta em até 6 tentativas, recebendo feedback visual a cada rodada sobre letras corretas, posições corretas e letras ausentes.

Funcionalidades
--------------
- Jogo de adivinhação de palavras no estilo Wordle.
- Sistema de tentativas limitadas (até 6).
- Feedback visual por cor para cada letra:
  - 🟩 Letra correta na posição correta.
  - 🟨 Letra correta na posição errada.
  - ⬜ Letra não existente na palavra.
- Teclado virtual interativo.
- Validação de entrada de palavras.
- Interface responsiva e intuitiva.
- Reinício de partida ao final do jogo.

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
cd react-mimo/projetos-gerais/wordle-clone
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. O navegador abrirá automaticamente em `http://localhost:3000`. Caso não abra, acesse manualmente.

### Parando o servidor
Para parar a aplicação, pressione `Ctrl + C` no terminal.

Como funciona
---------------------
A aplicação utiliza React para gerenciar o estado do jogo, incluindo palavra secreta, tentativas do jogador, status das letras e fim de partida.

**Fluxo de operação:**
1. O componente principal inicializa uma palavra secreta aleatória.
2. O jogador digita uma palavra com o mesmo número de letras da palavra alvo.
3. Ao enviar a tentativa, o jogo compara letra por letra com a resposta.
4. Cada letra recebe uma classificação visual (correta, presente ou ausente).
5. O jogo termina quando:
   - o jogador acerta a palavra, ou
   - atinge o número máximo de tentativas.
6. O usuário pode iniciar uma nova rodada.

Exemplos
--------
**Antes (início do jogo):**
- Grade vazia com linhas disponíveis para tentativa.
- Teclado virtual habilitado.

**Depois (após tentativas):**
- Linhas preenchidas com feedback visual por letra.
- Teclado atualiza o estado das letras já utilizadas.

Arquivos principais
-------------------
- `src/App.js` — componente principal com controle do jogo.
- `src/App.css` — estilos globais da aplicação.
- `src/components/Board.jsx` — renderização das linhas e células de tentativa.
- `src/components/Keyboard.jsx` — teclado virtual e interação de letras.
- `src/components/Cell.jsx` — célula individual da grade.
- `src/utils/evaluateGuess.js` — lógica de comparação entre tentativa e palavra secreta.
- `src/utils/words.js` — lista de palavras válidas e/ou possíveis respostas.
- `src/index.js` — ponto de entrada da aplicação React.
- `package.json` — scripts e dependências do projeto.

Tecnologias
-----------
- **React** — biblioteca para construir interfaces.
- **HTML5** — estrutura semântica.
- **CSS3** — estilização e layout responsivo.
- **JavaScript (ES6+)** — lógica do jogo.
- **Node.js & npm** — gerenciamento de pacotes e execução local.

Estrutura do Projeto
--------------------
```bash
projetos-gerais/wordle-clone/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Keyboard.jsx
│   │   └── Cell.jsx
│   ├── utils/
│   │   ├── evaluateGuess.js
│   │   └── words.js
│   ├── index.js
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

### `npm test`
Inicia o test runner em modo interativo.  
Veja a documentação sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`
Compila a aplicação para produção na pasta `build`.  
Otimiza e minifica o código para melhor desempenho.

### `npm run eject`
**Nota: esta é uma operação irreversível. Uma vez feito, você não pode voltar atrás!**

Extensões Futuras
------------------
- Adicionar diferentes níveis de dificuldade (palavras de 4, 5 ou 6 letras).
- Implementar modo escuro (dark mode).
- Mostrar histórico de partidas e estatísticas do jogador.
- Adicionar animações de flip nas células (estilo Wordle original).
- Incluir dicionário de palavras em português.
- Implementar modo diário com palavra única por dia.

Acessibilidade e boas práticas
------------------------------
- Componentes organizados e reutilizáveis.
- Separação entre UI e lógica de negócio.
- Estado gerenciado com React Hooks.
- Nomenclatura consistente para variáveis e funções.
- Estrutura modular para facilitar manutenção e evolução.

Contribuição
------------
Contribuições são bem-vindas! Sugestões:
- Melhorar animações e feedback visual.
- Aumentar cobertura de testes.
- Otimizar validação de palavras.
- Melhorar experiência mobile.

Para contribuir:
1. Fork este repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`.
3. Faça commits descritivos.
4. Abra um Pull Request descrevendo as mudanças.

Solução de Problemas
--------------------

**Problema:** A aplicação não inicia após `npm start`.  
- **Solução:** Verifique se as dependências foram instaladas com `npm install` e se a porta 3000 está livre.

**Problema:** Erro de módulo não encontrado.  
- **Solução:** Exclua `node_modules` e `package-lock.json`, depois execute `npm install` novamente.

**Problema:** As mudanças no código não aparecem.  
- **Solução:** Confirme se o servidor está em execução e limpe o cache do navegador.

Licença
-------
Nenhuma licença específica foi adicionada ainda.  
Se desejar, adicione um arquivo `LICENSE` (ex.: MIT) para permitir reuso explícito.

Autor
-----
Giovanni Jorge — repositório principal: [GiovanniJorge/react-mimo](https://github.com/GiovanniJorge/react-mimo)

Contato
-------
Problemas, dúvidas ou sugestões podem ser enviados via Issues no GitHub ou pelo seu perfil.
