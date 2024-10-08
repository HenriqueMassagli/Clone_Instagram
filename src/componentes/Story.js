export default function Story(props) {
return (
<div className="Story">
<div className="imagem-do-usuario">
    <img src= {props.foto} alt={props.nome} /> 
    </div>

    <div className="nome-do-usuario"> 
    <span> {props.nome}</span>

    </div>
    </div>





)






}