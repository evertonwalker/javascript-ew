
// Converter uma função de call back através de um módulo interno do node ( é importante seguir a convenção de callback caso ao contrario vai gerar erros.)

const util = require('util');

const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    //quando der algum problema -> chame o reject e passsa o erro: reject(error)
    // quando tudo dê certo solte o resolve(resultado)
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {

            // return reject(new Error('Deu ruim'));

            return resolve({
                id: 1,
                nome: 'Everton Walker',
                dataNascimento: new Date()
            })
        }, 100);
    });
}

function obterTelefone(idUsuario) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                numero: 8183416622332,
                ddd: 81
            })
        }, 200);
    })


}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Sertânia',
            cidade: 'jordão alto'
        })
    }, 200);
}


//Para manipular sucesso usamos o .then() 
//Para manipularmos erro usamos o .catch()
// Step by step > usuário -> telefone -> endereço
const usuarioPromise = obterUsuario()
usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(telefone) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: telefone

                }
            })
    })
    .then(function (usuarioComTelefone) {
        const endereco = obterEnderecoAsync(usuarioComTelefone.usuario.id)
        return endereco.then((result) => {
            return {
                usuario: usuarioComTelefone.usuario,
                telefone: usuarioComTelefone.telefone,
                endereco: result
            }
        })
    })
    .then(result => {
        console.log('Resultado completo dos dados', result)
    })
    .catch(function (error) {
        console.log("Algo deu errado:", error)
    });