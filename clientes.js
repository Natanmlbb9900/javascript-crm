let clientes = [
    {
        nome: "Conrado",
        email: "conrado@gmail.com",
        telefone: "(85) 00000-0000",
        data: "05/05/2025"
    },
    {
        nome: "Emanuel",
        email: "emanuel@gmail.com",
        telefone: "(85) 00000-0000",
        data: "05/05/2025"
    },
    {
        nome: "Ana",
        email: "ana@gmail.com",
        telefone: "(85) 00000-0000",
        data: "05/05/2025"
    },
];

function carregarClientes(ListaDeClientes){
    let tbodyElement = document.querySelector("#tabela")
    ListaDeClientes.map((clientes) => {
        tbodyElement.innerHTML += `<tr class="*:leading-[40px]">
                        <td></td>
                        <td>Natan@gmail.com</td>
                        <td>(00) 00000-0000</td>
                        <td>05/05/2025</td>
                        <td class="w-[100px] flex justify-center gap-4">
                            <box-icon name="pencil"></box-icon>
                            <box-icon name="trash"></box-icon>
                        </td>
                    </tr>`;
                
    })
}

carregarClientes(clientes)