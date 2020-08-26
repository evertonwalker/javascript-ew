
function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {
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

function obterEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'Sertânia',
                numero: 23
            });
        }, 200);
    });
}

// adicionar a palavra async na função -> automaticamente ela retornará uma promise
async function main() {
    try {

        const usuario = await obterUsuario();
        // Uma maneira de fazer, porém mais lenta, pois essas promises podem ser executadas de maneira paralela.
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEndereco(usuario.id);

        const resultado = await Promise.all([
            obterEndereco(usuario.id),
            obterTelefone(usuario.id)
        ]);

        const endereco = resultado[0];
        const telefone = resultado[1];


        console.log(`Dados do usuário: ${usuario.nome} do endereço: ${endereco.rua}, número (${telefone.ddd}) - ${telefone.numero} `);


    } catch (err) {
        console.log(`Deu erro: ${err}`);
    }

};

main();