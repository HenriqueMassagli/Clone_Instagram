import logo from "../imagens/instalogoclean.png";
import ListItem from "./ListItem";
// Importações de icones
// Sempre que for utilizar um ícone, tem que importar ele aqui.
import { FaRegHeart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsChatLeftFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { GoPaperAirplane } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function ConteudoLateral() {
  return (
    <div className="ConteudoLateral">
      <img src={logo} alt="Logo" className="logo" />
      <div>

        <ul className="MenuLateral">
          <ListItem text="Home" style={{}} icon={<MdHomeFilled style={{ color: "White"}} />}/>
          <ListItem text="Pesquisar" icon={<IoIosSearch style={{ color: "White"}} />} />
          <ListItem text="Explorar" icon={<MdOutlineExplore style={{ color: "White"}} />} />
          <ListItem text="Mensagens" icon={<GoPaperAirplane style={{ color: "White"}} />} />
          <ListItem text="Curtidos" icon={<IoIosHeartEmpty style={{ color: "White"}} />} />
          <ListItem text="Create" icon={<MdOutlineAddBox style={{ color: "White"}} />} />
          <ListItem text="Perfil" icon={<CgProfile style={{ color: "White"}} />} />
          
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
