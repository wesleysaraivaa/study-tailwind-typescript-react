import React from "react";

const Main: React.FC = () => {
    return(
        <main className="flex-1 p-6 bg-gray-200">
            <h2 className="text-xl mb-2"> Bem-vindo ao meu layout de estudos! </h2>
            <p className="mb-4"> Aprendendo sobre React, TypeScript e Tailwind CSS.</p>
            <h3 className="text-lg mb-2 font-semibold"> Conteudo do dia: </h3>
            <ul className="list-disc pl-5"> 
                <li> Apender sobre componente em React </li>
                <li> Explorar o uso de hooks </li>
                <li> Entender a estilizacao com Tailwind </li>
            </ul>
        </main>
    )
}

export default Main;