import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

//Quando se trata de lista, iniciamos o estado como Array vazio
//Sempre inicar o estado com o tipo de variavel qe vai ser armanzeda
export function Repository_list() {
    //Tipar um estado que é um array : Usar <Tipo[]>([])
    const [repositories, setrepositories] = useState<Repository[]>([]);
    //Exemplo de como disparar uma função quando alterar 
    //o estado com useEfect
    useEffect(() => {
        fetch('https://api.github.com/users/wenblack/repos')
            .then(response => response.json())
            .then(data => setrepositories(data))
    }, []);

    return (
        //Acessando repositorio e passando parametros 
        //Função map percorre os arrays e retorna dados
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem
                        key={repository.name}
                        repository={repository}
                    />
                })}
            </ul>
        </section>
    )
}