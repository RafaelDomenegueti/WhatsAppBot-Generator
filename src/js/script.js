var cont = 0;
var comandoComp;

const topo = `function scripts(msg, ws, MessageMedia) {`
const fim = `
};

module.exports = { scripts };`

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
    opt.setAttribute('onchange', 'javascript:selectch(this)')

    let optEnvMsg = document.createElement("option")
    optEnvMsg.value = "EnvMsg"
    optEnvMsg.appendChild(document.createTextNode("Enviar Mensagem"))

    let optEnvArq = document.createElement("option")
    optEnvArq.value = "EnvArq"
    optEnvArq.appendChild(document.createTextNode("Enviar Arquivo"))

    opt.appendChild(optEnvMsg)
    opt.appendChild(optEnvArq)

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
    let comand_resp;
    document.getElementById('story').innerHTML = topo;

    for(let j = 0; j <= cont; j++){
        let comando = document.getElementById(`Comand${j}`).value
        let resp = document.getElementById(`Resp${j}`).value
        let cmd = document.getElementById(`opt${j}`).value

        if (cmd == 'EnvMsg') {
            comand_resp = `msg.reply('${resp}');`
        } else if (cmd == 'EnvArq') {
            comand_resp = `ws.sendMessage(msg.from, MessageMedia.fromFilePath('./Arqs/${resp}'))`
        }  

        document.getElementById('story').innerHTML = document.getElementById('story').innerHTML + `
    if(msg.body === '${comando}') {
        ${comand_resp}
    };`  

    }

    document.getElementById('story').innerHTML = document.getElementById('story').innerHTML + fim;

}

function baixar() {
    //uriContent = "data:application/octet-stream," + encodeURIComponent(document.getElementById('story').innerHTML);
    //newWindow = window.open(uriContent, 'neuesDokument');
    download('script.js', document.getElementById('story').innerHTML);
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function selectch(obj) {
    var id = obj.id
    let cmd = document.getElementById(id).value
    var numId = id.substring(id.length-1, id.length)

    if (cmd == 'EnvMsg') {
        document.getElementById(`Resp${numId}`).placeholder = 'Resposta'
    } else if (cmd == 'EnvArq') {
        document.getElementById(`Resp${numId}`).placeholder = 'ex: Image.png'
    }  
}