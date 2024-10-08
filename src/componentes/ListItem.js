export default function ListItem(props) {
  // Função que retorna o componente ListItem, que recebe props como parâmetro
  // props = propriedades.
  return (
    <li>
      <span>{props.icon}</span>
      <bold>{props.text}</bold>
    </li>
    // Retorna um item de lista com um ícone e o nome do menu
    // props são propriedades que são passadas para o componente
    // props.icon é a propriedade que recebe o ícone e por ai vai
  );
}
