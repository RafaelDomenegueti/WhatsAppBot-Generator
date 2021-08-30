var cont = 0;

function AddOpt() {
    cont++
    

    let item = document.createElement("div")
    item.id = `item${cont}`
    item.className = 'item'

    // Comand
    let Comand = document.createElement("input")
    Comand.type='text'
    Comand.id=`Comand${cont}`
    Comand.className=`inputText`
    Comand.placeholder="Comando"

    // Opt
    let opt = document.createElement("select")
    opt.id = `opt${cont}`
    opt.className = "opt"

    let optEnvMsg = document.createElement("option")
    optEnvMsg.value = "EnvMsg"
    optEnvMsg.appendChild(document.createTextNode("Enviar Mensagem"))

    opt.appendChild(optEnvMsg)

    // Resp
    let resp = document.createElement("input")
    resp.type='text'
    resp.id=`Resp${cont}`
    resp.className="inputText"
    resp.placeholder="Resposta"

    // Adiciona na div
    item.appendChild(Comand)
    item.appendChild(opt)
    item.appendChild(resp)

    // Adiciona a div
    document.getElementById("box").appendChild(item)

}

function copiarTexto(id) {
    var textoCopiado = document.getElementById(id);
    textoCopiado.select();
    document.execCommand("Copy");
}

function Criar() {
    for(let j; j >= cont; j++){
        let comando = document.getElementById(`Comand${j}`).value
        let resp = document.getElementById(`Resp${j}`).value
        alert('comando')
        alert(resp)
    }

    let cod = base + '\n' + rst
    document.getElementById("story").innerHTML=cod
}


let rst = (`if(msg.body === '!ping') {
	msg.reply('pong');
}
})`)