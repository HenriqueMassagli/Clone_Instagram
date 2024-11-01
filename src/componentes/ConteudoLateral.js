import logo from "../imagens/instagram_logo.png";
import ListItem from "./ListItem";
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
