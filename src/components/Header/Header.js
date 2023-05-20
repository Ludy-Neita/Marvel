import './Header.scss';
import {Menu} from 'semantic-ui-react';

export default function Header() {

    return (
        <div className="header-menu">
            Estamos en Header.js de componets

            <>
            <Menu secundary>

                <Menu.Item name = "inicio" onClick = {()=> console.log ("Haciendo click en el menu")} />
                <Menu.Item name = "series" onClick = {()=> console.log ("Haciendo click en series")} />
                <Menu.Item name = "comics" onClick = {()=> console.log ("Haciendo click en comics")} />
            
            </Menu>
            </>
        </div>
    )
    
};
  