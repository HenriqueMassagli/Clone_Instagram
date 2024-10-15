import logo from "../imagens/instagram_logo.png";
import ListItem from "./ListItem";
// Importações de icones
// Sempre que for utilizar um ícone, tem que importar ele aqui.
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbMessageCircle } from "react-icons/tb";
import { PiHeart } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";

export default function ConteudoLateral() {
  return (
    <div className="ConteudoLateral">
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <ul className="MenuLateral">
          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {<MdHomeFilled style={{ color: "White", fontSize: "30px" }} />}
                Página inicial
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                <IoIosSearch style={{ color: "white", fontSize: "30px" }} />
                Pesquisa
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                <MdOutlineExplore
                  style={{ color: "White", fontSize: "30px" }}
                />
                Explorar
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                <BiMoviePlay style={{ color: "White", fontSize: "30px" }} />
                Reels
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                <TbMessageCircle style={{ color: "White", fontSize: "30px" }} />
                Mensagens
              </span>
            }
          />
          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                {<PiHeart style={{ color: "White", fontSize: "30px" }} />}
                Notificações
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                {
                  <MdOutlineAddBox
                    style={{ color: "White", fontSize: "30px" }}
                  />
                }
                Criar
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                {<CgProfile style={{ color: "White", fontSize: "30px" }} />}
                Perfil
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  marginTop: "28px",
                }}
              >
                <MdAlternateEmail
                  style={{ color: "white", fontSize: "30px" }}
                />
                Threads
              </span>
            }
          />

          <ListItem
            text={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                }}
              >
                {<CgDetailsMore style={{ color: "White", fontSize: "30px" }} />}
                Mais
              </span>
            }
          />
        </ul>
      </div>
    </div>
  );
}

/* icones baixados por: https://www.npmjs.com/package/react-icons 
            utilizando comando: npm install react-icons --save
            esse comando permite baixar o react-icons e salvar no projeto
            e para utilizar é só importar o ícone desejado e utilizar como componente.

            para remover o pacote é só utilizar o comando: npm uninstall react-icons
          */

/* Utilizando o ícone do react-icons.
           Pra usarmos temos que utilizar a estrutura:
            {<NomeDoIcone />} e ter o import dele la em cima*/
