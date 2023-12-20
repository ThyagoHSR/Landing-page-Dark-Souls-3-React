Dark Souls Landing Page
Descrição
Esta é a documentação oficial para a landing page do jogo "Dark Souls". O projeto foi desenvolvido utilizando tecnologias como React, Vite e Styled-components.

Índice
Tecnologias Utilizadas
Estrutura do Projeto
Instalação e Execução
Estilização com Styled-components
Conclusão
Tecnologias Utilizadas
React: Biblioteca JavaScript para construir interfaces de usuário.
Vite: Construtor de aplicações web extremamente rápido e versátil.
Styled-components: Biblioteca para estilização de componentes React utilizando tagged template literals.
Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

lua
Copy code
dark-souls-landing-page/
|-- src/
|   |-- components/
|   |   |-- Header.js
|   |   |-- Footer.js
|   |-- styles/
|   |   |-- GlobalStyles.js
|   |   |-- theme.js
|   |-- pages/
|   |   |-- HomePage.js
|-- package.json
|-- vite.config.js
|-- README.md
src/components/: Componentes React reutilizáveis.
src/styles/: Estilos globais e temas da aplicação.
src/pages/: Páginas da aplicação, incluindo a página inicial (HomePage.js).
Instalação e Execução
Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/dark-souls-landing-page.git
Acesse o diretório do projeto:

bash
Copy code
cd dark-souls-landing-page
Instale as dependências:

bash
Copy code
npm install
Execute a aplicação em modo de desenvolvimento:

bash
Copy code
npm run dev
Acesse http://localhost:3000 no navegador.

Estilização com Styled-components
A estilização é realizada com a biblioteca Styled-components. Veja um exemplo:

javascript
Copy code
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
  border: 2px solid blue;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.primary ? 'darkblue' : 'lightblue'};
  }
`;
Conclusão
Esta documentação fornece uma visão geral da estrutura e tecnologias utilizadas no projeto da landing page do jogo Dark Souls. Para mais informações, consulte o código fonte no GitHub.

Obrigado por visitar a documentação!
