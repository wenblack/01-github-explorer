interface RepositoryITemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryITemProps) {
    return (
        //Recebendo dados do componente Pai e definindo nome padrão
        <li>
            <strong>
                {props.repository.name}
            </strong>
            <p>
                {props.repository.description}
            </p>
            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>

    )
}
/*DICA: Operador ??  ou seta um valor padrão que não considera 
0 como valor válido. Convenção*
Operador ? verifica se o valor é nulo.
EX:
    {props.repository?.name ?? 'Undefined'}
    {props.repository?.desc ?? 'Undefined'}
    <a href={props.repository?.link ?? 'Undefined'}>
*/