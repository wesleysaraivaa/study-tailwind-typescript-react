import React from "react";

const Sidebar: React.FC = () => {
    return(
        <aside className="w-1/4 bg-gray-100 p-4 shadow-md">
            <h2 className="font-semibold mb-2"> Navegacao </h2>
            <ul> 
                <li className="mb-1"> <a href="#" className="text-blue-500"> Inicio </a> </li>
                <li className="mb-1"> <a href="#" className="text-blue-500"> Sobre </a> </li>
                <li className="mb-1"> <a href="#" className="text-blue-500"> Contato </a> </li>
                <li className="mb-1"> <a href="#" className="text-blue-500"> Projetos </a> </li>
            </ul>
        </aside>
    )
}

export default Sidebar;