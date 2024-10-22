import { GoPaperAirplane } from "react-icons/go";
import { PiHeart } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";

export default function Post() {
  return (
    <div className="Post-cabecalho">
      <div className="Post-avatar">
        <img
          src="https://i.pinimg.com/enabled_lo/564x/fa/74/57/fa7457469b7599ce5bd28173ea691d28.jpg"
          alt="Chris Bumstead"
        />
        <div className="Post-nome">cbum</div>
        <div className="Post-more">
          {<IoIosMore style={{ color: "White", fontSize: "25px" }} />}
        </div>
      </div>

      <div className="Post">
        <img
          src="https://i.pinimg.com/564x/35/a7/54/35a754acf2d0d088ea36325ed1e3a82c.jpg"
          alt="Ferrari F40"
        />
      </div>
      <div className="Post-rodape"></div>
      <div className="Post-like">
        {<PiHeart style={{ color: "White", fontSize: "25px" }} />}
      </div>
      <div className="Post-comentario">
        {<TbMessageCircle style={{ color: "White", fontSize: "25px" }} />}
      </div>
      <div className="Post-compartilhar">
        {<GoPaperAirplane style={{ color: "White", fontSize: "25px" }} />}
      </div>
      <div className="Post-salvar">
        {<CiSaveDown2 style={{ color: "White", fontSize: "25px" }} />}
      </div>

      {/* Aqui estão os elementos alinhados */}
      <div className="Post-nome_rodape"> Chris Bumstead </div>
      <div className="Post-content">The last dance.</div>
    </div>
  );
}
