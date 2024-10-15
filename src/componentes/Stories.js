import Story from "./Story";

import "./Stories.css";

export default function Stories() {
  return (
    <div className="Stories">
      <Story nome="Neymar" foto="https://picsum.photos/200/300" />
      <Story nome="Ribamar" foto="https://picsum.photos/200/300" />
      <Story nome="Messi" foto="https://picsum.photos/200/300" />
      <Story nome="Luciano" foto="https://picsum.photos/200/300" />
      <Story nome="Pelé" foto="https://picsum.photos/200/300" />
      <Story nome="Cariani" foto="https://picsum.photos/200/300" />
      <Story nome="Ramon" foto="https://picsum.photos/200/300" />
      <Story nome="Cristiano" foto="https://picsum.photos/200/300" />
    </div>
  );
}
