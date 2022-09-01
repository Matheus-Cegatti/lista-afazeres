const caixaDeTexto = document.querySelector("#afazeres-input");
const formularioTexto = document.querySelector("#formulario-lista");
const listaTarefas = document.querySelector(".lista-afazeres");
const editarTarefas = document.querySelector("#editar-formulario");
const inputEditar = document.querySelector("#input-editar");
const cancelarEdicao = document.querySelector(".cancelar-edicao");

//criando a div com as tarefas digitada


//pegando a informação digitada no input
formularioTexto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const valorDoInput = caixaDeTexto.value
    // console.log(valorDoInput);
})