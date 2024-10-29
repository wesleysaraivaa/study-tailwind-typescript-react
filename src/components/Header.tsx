import React from "react";
import Logo from './../assets/LogoUni.png'

const Header: React.FC = () =>{ 
    return(
        <header className ="flex justify-between items-center bg-blue-600 text-white p-4 font-bold shadow-md" >
            
            <div className="flex items-center gap-4">
                <img src={Logo} alt="logo" width={60} height={60} />
                <h1 className="text-2xl"> UniwersoTech </h1>
            </div>

            <div>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
            </div>

        </header>
    );
}

export default Header;