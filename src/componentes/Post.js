import { GoPaperAirplane } from "react-icons/go";
import { PiHeart } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";

export default function Post() {
  return (
    <div Classname="Post-cabecalho">
      <div Classname="Post-avatar"></div>
      messi
      <div className="Post">
        <img
          src="https://i.pinimg.com/736x/49/8e/98/498e982e2298a535a032b49c455e1790.jpg"
          alt="Ferrari F40"
        />
      </div>
      <div className="Post-rodape"></div>
      <div className="Post-like">
        {" "}
        {<PiHeart style={{ color: "White", fontSize: "25px" }} />}
      </div>
      <div className="Post-comentario">
        {" "}
        {<TbMessageCircle style={{ color: "White", fontSize: "25px" }} />}
      </div>
      <div className="Post-compartilhar">
        {<GoPaperAirplane style={{ color: "White", fontSize: "25px" }} />}
      </div>
      <div className="Post-salvar">
        {<CiSaveDown2 style={{ color: "White", fontSize: "25px" }} />}
      </div>
      <div className="Post-nome">Cachorro</div> 
      <div className="Post-content">
        Cristiano Ronaldo revela qual é o maior time do mundo
      </div>
    </div>
  );
}
