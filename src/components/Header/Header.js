import { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.scss";

export default function Header() {

  const currentPath = useLocation();

  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrentPath);

  const history = useHistory();

  const handleItemClick = (e, { name }) => { // nombre que se va hacer referencia, home, comic, series
    // console.log(e); // muestra el envento del click
    // console.log(name); // muestra el nombre de home, comics, o series, pero colocando en el  "onClick = {itemclick}"  y elimmina lo de la console.log este: // <Menu.Item name = "inicio" onClick = {()=> console.log ("Haciendo click en el menu")} /> probando que sirve el boton, y sale ese texto.
    setActiveItem(name);
    history.push(name); // colocando el nombre que estamos obteniendo del evento y se guarda en la variable history, que cuando se de click en el menu ese evento se carga en la variable de estado del URL
  };

  return (
    <div className="header-menu">

      Estamos en Header.js de componets
      <Menu secondary>
        <Menu.Item name="inicio" active={activeItem === "inicio"} onClick={handleItemClick} />
        <Menu.Item name="series" active={activeItem === "series"} onClick={handleItemClick} />
        <Menu.Item name="comics" active={activeItem === "comics"} onClick={handleItemClick} />
      </Menu>
    </div>
  );
}

