

document.querySelector("#botao-cadastrar").addEventListener("click",() => {
 
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const tarefa = {
        Nome: document.querySelector("#Nome").value,
        modelo: document.querySelector("#modelo").value,
        Placa: document.querySelector("#Placa").value,
        ano:  document.querySelector("#ano").value
    }
     
    tarefas.push(tarefa)

  localStorage.setItem('tarefas', JSON.stringify( tarefas ))

  window.location.href ="index.html"

})