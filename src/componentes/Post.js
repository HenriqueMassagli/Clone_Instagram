import { GoPaperAirplane } from "react-icons/go";
import { PiHeart } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";

export default function Post() {
  return (
    <div className="Post-cabecalho">
      <div className="Post-avatar">
        <img
          src="https://i.pinimg.com/enabled_lo/564x/fa/74/57/fa7457469b7599ce5bd28173ea691d28.jpg"
          alt="Chris Bumstead"
        />
        <div className="Post-nome">
          cbum
          {<MdVerified style={{ color: "blue", fontSize: "15px" }} />}
        </div>

        <div className="Post-more">
          {<IoIosMore style={{ color: "White", fontSize: "25px" }} />}
        </div>
      </div>

      <div className="Post">
        <img
          src="https://i.pinimg.com/564x/35/a7/54/35a754acf2d0d088ea36325ed1e3a82c.jpg"
          alt="Chris bumstead"
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
        {<BsBookmark style={{ color: "White", fontSize: "25px" }} />}
      </div>

      <div className="Post-nome_rodape"> Chris Bumstead </div>
      <div className="Post-content">The last dance.</div>

      <div className="Post-cabecalho2">
        <div className="Post-avatar2">
          <img
            src="https://st2.depositphotos.com/1358992/9901/i/450/depositphotos_99013324-stock-photo-ferrari-car-logo.jpg"
            alt="Ferrari"
          />
          <div className="Post-nome2">
            Ferrari
            {<MdVerified style={{ color: "blue", fontSize: "15px" }} />}
          </div>

          <div className="Post-more2">
            {<IoIosMore style={{ color: "White", fontSize: "25px" }} />}
          </div>
        </div>

        <div className="Post2">
          <img
            src="https://i.pinimg.com/736x/60/b8/a8/60b8a8e4ff31547a0a6dde68ccfae1c4.jpg"
            alt="La Ferrari"
          />
        </div>
        <div className="Post-rodape2"></div>
        <div className="Post-like2">
          {<PiHeart style={{ color: "White", fontSize: "25px" }} />}
        </div>
        <div className="Post-comentario2">
          {<TbMessageCircle style={{ color: "White", fontSize: "25px" }} />}
        </div>
        <div className="Post-compartilhar2">
          {<GoPaperAirplane style={{ color: "White", fontSize: "25px" }} />}
        </div>
        <div className="Post-salvar2">
          {<BsBookmark style={{ color: "White", fontSize: "25px" }} />}
        </div>

        <div className="Post-nome_rodape2"> Ferrari </div>
        <div className="Post-content2">
          A LaFerrari é um supercarro híbrido da Ferrari.
        </div>
      </div>
    </div>
  );
}
