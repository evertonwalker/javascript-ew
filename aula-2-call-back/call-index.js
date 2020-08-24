/*
    0 - Obter um usuário
    1 - Obter o númer de telefone de um usuário pelo ID
    2 - Obter o endereço do usuário pelo ID
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Everton Walker',
            dataNascimento: new Date()
        })
    }, 100);
}

function obterTelefone(idUsuario, callback) {

    setTimeout(() => {
        return callback(null, {
            numero: 8183416622332,
            ddd: 81
        })
    }, 200);

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Sertânia',
            cidade: 'jordão alto'
        })
    }, 200);

}

obterUsuario(function resolverUsuario(erro, usuario) {
    // Null ou "" ou 0 ===  false
    if (erro) {
        console.log('Falha na busca de usuários', error);
        return;
    }


    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
        if (erro1) {
            console.log("Falha na busca de telefone", erro1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
            if (erro2) {
                console.log("Falha ao buscar endereços", erro2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua} da cidade : ${endereco.cidade},
                Telefone: ${telefone.numero} com o DDD: ${telefone.ddd} 
            `);
        });
    });





});
// const telefone = obterTelefone(usuario.id);

// console.log('Usuário', usuario);
// console.log('Telefone', telefone);