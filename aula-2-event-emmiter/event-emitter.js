const EventEmitter = require('events');

class MeuEmissor extends EventEmitter { }

const meuEmissor = new MeuEmissor();

const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuário clicou', click);
});

meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no OK');

let count = 0;

setInterval(function() {
    meuEmissor.emit(nomeEvento, 'no ok' + (count++));
}, 1000);

const stdin = process.openStdin();


function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (valor) {
            return resolve(valor);
        });
    });
}

main().then(function (resultado) {
    console.log('resultado', resultado);
})


