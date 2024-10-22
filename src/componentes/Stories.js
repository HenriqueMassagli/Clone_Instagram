import Story from "./Story";

import "./Stories.css";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Stories() {
  return (
    <div className="Stories">
      <Story
        nome="Cristiano"
        foto="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg"
      />
      <Story
        nome="Casimiro"
        foto="https://pbs.twimg.com/profile_images/1484473740209659906/NlQOxAt3_400x400.jpg"
      />
      <Story
        nome="SPFC"
        foto="https://yt3.googleusercontent.com/C8rCyrTuhCFBj7U0Od4-4ISbgp5i7OMfAudqi2h7vgcFOy70J6pSao6qG0YO6p7LpdTqlqbceQ=s900-c-k-c0x00ffffff-no-rj"
      />
      <Story
        nome="podpah"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JrDwCO9CyCvXxToZuXJ2cihKysnrBouGpg&s"
      />
      <Story
        nome="maumauzk"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWKE-3u3ctsROFtW3F2A_F1oDFbZifKRIPg&s"
      />
      <Story
        nome="Marina"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrNBSNwD45t3nyU9eHOUei_9L9g90ssvg2Q&s"
      />
      <Story
        nome="proa"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxwNgcvkCreI-2eDl6Ezt_95qBFHJQhRCSQ&s"
      />
      <Story
        nome="mc ig"
        foto="https://lh5.googleusercontent.com/proxy/zOugTwX2-jSoO6bJvDyM_iiMQOFSfBa2_EnTMVBMmMbOdP34wlyrRgky71yDluVI3EVzpNgQqoViZiVyUe4ydATiS4JcjcB42I0pzMyBwgSxQtCyToyXMoQ"
      />

      <div className="Next">
        {<FaChevronCircleRight style={{ color: "White", fontSize: "22px" }} />}
      </div>
    </div>
  );
}
