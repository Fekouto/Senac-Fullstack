const inputPaciente = document.getElementById('inputPaciente')
const btnConsulta = document.getElementById('btnConsulta')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')
const pacienteEmAtendimento = document.getElementById('pacienteEmAtendimento')
const outConsulta = document.getElementById('outConsulta')

let todosPacientes = [];

function marcarConsulta(){
    let nomePaciente = inputPaciente.value
    if(nomePaciente == ''){
        alert("digite o nome do paciente")
        inputPaciente.focus()
        return;
    }

    todosPacientes.push(nomePaciente)

    let lista =''
    for(let i=0;i<todosPacientes.length;i++){
        lista +=`${i + 1} . ${todosPacientes[i]}\n`
    }
    outConsulta.textContent = lista
    inputPaciente.value=''
    inputPaciente.focus()
}

btnConsulta.addEventListener('click',marcarConsulta)

function atendimentoPrioritario(){
    let nomePaciente = inputPaciente.value;

    if(nomePaciente == ''){
        alert= ("digite o nome do paciente")
        inputPaciente.focus()
        return;
    }

    todosPacientes.unshift(nomePaciente)

    let lista = ''
    for(let i=0;i<todosPacientes.length;i++){
        lista +=`${i + 1} . ${todosPacientes[i]}\n`
    }

    outConsulta.textContent = lista
    inputPaciente.value = ''
    inputPaciente.focus()

}
btnUrgencia.addEventListener('click',atendimentoPrioritario)

function atenderPaciente(){
    if(todosPacientes.length == ''){
        alert('nao ha pacientes para atender')
        inputPaciente.focus();
        return;
    }

    let atender = todosPacientes.shift();

    pacienteEmAtendimento.textContent = atender
    let lista = ""
    for(let i=0;i<todosPacientes.length;i++){
        lista +=`${i + 1} . ${todosPacientes[i]}\n`
    }

    outConsulta.innerHTML = lista;
}

btnAtender.addEventListener('click',atenderPaciente)