const caixaDeTexto = document.querySelector("#afazeres-input");
const formularioTexto = document.querySelector("#formulario-lista");
const listaTarefas = document.querySelector(".lista-afazeres");
const editarTarefas = document.querySelector("#editar-formulario");
const inputEditar = document.querySelector("#input-editar");
const cancelarEdicao = document.querySelector(".cancelar-edicao");

//criando a div com as tarefas digitada
const salvarLista  = (texto) => {
    const fazerLista = document.createElement("div");
    fazerLista.classList.add("lista")

    const tituloLista = document.createElement("h3");
    tituloLista.innerText = texto
    fazerLista.appendChild(tituloLista)
    tituloLista.classList.add("texto-adicionado")

    const btnFeito = document.createElement("button");
    btnFeito.classList.add("botao-feito")
    btnFeito.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>' //adicionando um elemento html via JS (icone)
    fazerLista.appendChild(btnFeito)

    const btnEditar = document.createElement("button");
    btnEditar.classList.add("botao-editar")
    btnEditar.innerHTML = '<i class="fa-solid fa-pen"></i>'
    fazerLista.appendChild(btnEditar)

    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("botao-excluir")
    btnExcluir.innerHTML = '<i class="fa-sharp fa-solid fa-circle-xmark"></i>'
    fazerLista.appendChild(btnExcluir)


    //fazendo a div aparecer quando clica em checked
    listaTarefas.appendChild(fazerLista);


    console.log(fazerLista);
}

//pegando a informação digitada no input
formularioTexto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const valorDoInput = caixaDeTexto.value
    // console.log(valorDoInput);

    if(valorDoInput) {
        salvarLista(valorDoInput)
    }
})