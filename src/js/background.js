const BackG = Math.floor(Math.random() * 5);
let color;

switch (BackG) {
    case 0:
        color = "rgb(217, 139, 167)";
    break;
    case 1:
        color = 'rgb(130, 184, 217)';
    break;
    case 2:
        color = 'rgb(137, 217, 202)';
    break;
    case 3:
        color = 'rgb(242, 196, 109)';
    break;
    case 4:
        color = 'rgb(242, 144, 87)';
    break;
        
}

document.body.style.backgroundColor = color;
document.querySelector('.Button').style.backgroundColor = color;
document.querySelector('#criarButton').style.backgroundColor = color;
document.querySelector('#Title').style.color = color;
document.querySelector('#Comand0').style.border = `2px solid ${color}`;
document.querySelector('#Resp0').style.border = `2px solid ${color}`;
document.querySelector('#opt0').style.border = `2px solid ${color}`;
document.querySelector('#opt0').style.backgroundImage = `url("data:image/svg+xml;utf8,<svg fill='${color}' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`
document.querySelector('#BaixarButton').style.backgroundColor = color;