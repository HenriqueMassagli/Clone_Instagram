import "./ConteudoDireito.css";

export default function ConteudoDireito() {
  return (
    <div className="ConteudoDireito">
      <div className="PerfilUsuario">
        <div className="Perfil">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Your profile"
          />
          <span className="Perfil-nome">Usuário</span>
          <button className="MudarBtn">Mudar</button>
        </div>
      </div>

      <div className="Perfil">
        <img
          src="https://i0.wp.com/surgiu.com.br/wp-content/uploads/2022/09/412814-1031068-renatocarani1.jpg?fit=600%2C657&ssl=1"
          alt="Renato Cariani"
        />
        <div className="Perfil-nome">Cariani</div>
        <button className="seguirBtn">Seguir</button>
      </div>

      <div className="Perfil">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKNycrG8R7PIO8H95-QOv7tqWuZC7YxaMHQ&s"
          alt="Isabela Pagliari"
        />
        <div className="Perfil-nome">Isabela</div>
        <button className="seguirBtn">Seguir</button>
      </div>

      <div className="Perfil">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-QDuW0LdJAAQfIU-VbZY_Et9W8E3ubvuOg&s"
          alt="Ninja"
        />
        <div className="Perfil-nome">Ninja </div>
        <button className="seguirBtn">Seguir</button>
      </div>
    </div>
  );
}
