//  Variaveis Sistema
var cont = 0;
var comandoComp;

// Variaveis Gerador
const topo = `function scripts(msg, ws, MessageMedia) {`
const fim = `
};

module.exports = { scripts };`


//  Adicionar Options
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
    Comand.style.border = `2px solid ${color}`

    // Opt
    let OptDiv = document.createElement("div")
    OptDiv.className = 'OptDiv'

    let opt = document.createElement("select")
    opt.id = `opt${cont}`
    opt.className = "opt"
    opt.style.border = `2px solid ${color}`
    opt.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg fill='${color}' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`
    opt.setAttribute('onchange', 'javascript:selectch(this)')

    let optEnvMsg = document.createElement("option")
    optEnvMsg.value = "EnvMsg"
    optEnvMsg.className = 'OptEnv'
    optEnvMsg.appendChild(document.createTextNode("Enviar Mensagem"))

    let optEnvArq = document.createElement("option")
    optEnvArq.value = "EnvArq"
    optEnvArq.className = 'OptEnv'
    optEnvArq.appendChild(document.createTextNode("Enviar Arquivo"))

    let optEnvStc = document.createElement("option")
    optEnvStc.value = "EnvStc"
    optEnvStc.className = 'OptEnv'
    optEnvStc.appendChild(document.createTextNode("Enviar Figurinha"))

    opt.appendChild(optEnvMsg)
    opt.appendChild(optEnvArq)
    opt.appendChild(optEnvStc)
    OptDiv.appendChild(opt)

    // Resp
    let resp = document.createElement("input")
    resp.type='text'
    resp.id=`Resp${cont}`
    resp.className="inputText"
    resp.placeholder="Resposta"
    resp.style.border = `2px solid ${color}`

    // Button close
    let ClsDivButton = document.createElement("div")
    ClsDivButton.className = 'ButtonCls'
    ClsDivButton.id = `ext${cont}`
    ClsDivButton.setAttribute('onclick', 'javascript:exit(this)')

    let ClsSpanButton = document.createElement("span")
    ClsSpanButton.className = 'ButtonValue'
    ClsSpanButton.appendChild(document.createTextNode("x"))
    ClsDivButton.appendChild(ClsSpanButton)

    // Adiciona na div
    item.appendChild(Comand)
    item.appendChild(OptDiv)
    item.appendChild(resp)
    item.appendChild(ClsDivButton)

    // Adiciona a div
    document.getElementById("box").appendChild(item)

}


// Gerar Codigo
function Criar() {
    let comand_resp;
    document.getElementById('story').innerHTML = topo;

    for(let j = 0; j <= cont; j++){

        if (document.getElementById(`Comand${j}`) != null && document.getElementById(`Resp${j}`) != null){

            if (document.getElementById(`Comand${j}`).value != '' && document.getElementById(`Resp${j}`).value != ''){
                let comando = document.getElementById(`Comand${j}`).value
            let resp = document.getElementById(`Resp${j}`).value
            let cmd = document.getElementById(`opt${j}`).value
            
            if (cmd == 'EnvMsg') {
                comand_resp = `msg.reply('${resp}');`
            } else if (cmd == 'EnvArq') {
                comand_resp = `ws.sendMessage(msg.from, MessageMedia.fromFilePath('./Arqs/${resp}'))`
            } else if (cmd == 'EnvStc') [
                comand_resp = `ws.sendMessage(msg.from, MessageMedia.fromFilePath('./Arqs/${resp}'), { sendMediaAsSticker: true }) `
            ]
    
            document.getElementById('story').innerHTML = document.getElementById('story').innerHTML + `
    if(msg.body === '${comando}') {
        ${comand_resp}
    };`  

            }

        }

    }

    document.getElementById('story').innerHTML = document.getElementById('story').innerHTML + fim;

}


//  Gerar Arquivo e Baixar
function baixar() {
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


//  Configuração de Exibição
function selectch(obj) {
    var id = obj.id
    let cmd = document.getElementById(id).value
    var numId = id.substring(id.length-1, id.length)

    if (cmd == 'EnvMsg') {
        document.getElementById(`Resp${numId}`).placeholder = 'Resposta'
    } else if (cmd == 'EnvArq' || cmd == 'EnvStc') {
        document.getElementById(`Resp${numId}`).placeholder = 'ex: Image.png'
    }  
}


//  Excluir Option
function exit(obj) {
    var id = obj.id
    var numId = id.replace('ext', '')
    var opt = document.getElementById(`item${numId}`)
    
    opt.parentNode.removeChild(opt);
}
