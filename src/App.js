import ConteudoLateral from "./componentes/ConteudoLateral"; // Importando o componente ConteudoLateral de outro arquivo

import ConteudoPrincipal from "./componentes/ConteudoPrincipal";

// Geralmente deixamos componentes em letras maiúsculas para diferenciar de tags HTML, assim como o className.
import ListItem from "./componentes/ListItem"; // Importando o componente ListItem de outro arquivo

// Importando o arquivo de estilos para esse componente
import "./App.css";

// Função que retorna o componente App.
// Essa função é exportada para ser usada em outros arquivos
export default function App() {
  // O componente App retorna um JSX que é renderizado na tela
  return (
    <div className="App">
      <ConteudoLateral />
      <ConteudoPrincipal />
      
    </div>
  );
}
