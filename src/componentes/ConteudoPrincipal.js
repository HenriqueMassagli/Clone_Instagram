import Stories from "./Stories";
import Postagens from "./Postagens";

export default function ConteudoPrincipal() {
  return (
    <div className="ConteudoPrincipal">
      <Stories />
      <Postagens />
    </div>
  );
}
