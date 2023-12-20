Documentação da Landing Page do Jogo Dark Souls
Introdução
Esta documentação descreve a estrutura e as tecnologias utilizadas para criar a landing page do jogo "Dark Souls". A landing page foi desenvolvida utilizando React, Vite e Styled-components.

Tecnologias Utilizadas
React: Uma biblioteca JavaScript para construir interfaces de usuário.
Vite: Um construtor de aplicações web extremamente rápido e versátil.
Styled-components: Uma biblioteca para estilização de componentes React utilizando tagged template literals.
Estrutura do Projeto
A estrutura básica do projeto é organizada da seguinte maneira:

lua
Copy code
dark-souls-landing-page/
|-- src/
|   |-- components/
|   |   |-- Header.js
|   |   |-- Footer.js
|   |   |-- ...
|   |-- styles/
|   |   |-- GlobalStyles.js
|   |   |-- theme.js
|   |-- pages/
|   |   |-- HomePage.js
|   |-- App.js
|   |-- index.js
|-- package.json
|-- vite.config.js
|-- README.md
Descrição dos Diretórios e Arquivos
src/components/: Contém todos os componentes React reutilizáveis da aplicação, como cabeçalho, rodapé, etc.
src/styles/: Contém estilos globais e temas para a aplicação.
src/pages/: Contém as páginas da aplicação, como a página inicial (HomePage.js).
src/App.js: Componente raiz da aplicação React.
src/index.js: Ponto de entrada da aplicação.
package.json: Arquivo de configuração do Node.js que lista as dependências e scripts.
vite.config.js: Arquivo de configuração do Vite para o projeto.
Instalação e Execução
Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/dark-souls-landing-page.git
Navegue até o diretório do projeto:

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
Acesse a aplicação no navegador através do endereço http://localhost:3000.

Estilização com Styled-components
A estilização dos componentes é realizada utilizando a biblioteca Styled-components. Exemplo de uso:

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
Esta documentação oferece uma visão geral da estrutura e tecnologias utilizadas na landing page do jogo "Dark Souls". Para mais detalhes, consulte o código fonte disponível no GitHub.
