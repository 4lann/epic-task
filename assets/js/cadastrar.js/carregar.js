window.addEventListener("load", () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.forEach((tarefa) => criarCard(tarefa))
})


function criarCard(tarefa){
 const card = document.createElement("div")

card.innerHTML = `
                <div class="card">

                <div class="card-content ">
                <span class="card-title">${tarefa.Nome}</span>
                <p>
                ${tarefa.modelo}
                ${tarefa.Placa}
                ${tarefa.ano}
                </p>
                <span data-badge-caption ="pontos" class=" badge blue white-text">4
                 
                </span>
                </div>

                <div class="card-action">
                    <a href="#" class="btn red">
                        <i class="material-icons">delete</i>
                    </a>
                    
                    <a href="#"class ="btn green">
                        <i class="material-icons">check</i>
                    </a>
                </div>

                </div>
                `

document.querySelector("#lista-tarefas").appendChild(card)


}