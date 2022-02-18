$('#btn-cadastrar').click(function (e) {
    e.preventDefault()
    const verificaEntradas = verificaDados()
    if (verificaEntradas) {
        console.log ('ok')
    } else {
        console.log ('error')
    }
})

function verificaDados() {
    const email = $('#inputEmail').val()
    const senha = $('#inputPassword').val()
    const nome = $('#inputName').val()
    const cep = $('#inputCep').val()
    if (email.length > 0 && senha.length > 0 && nome.length > 0) {
        const verificacaoCEP = verificaCEP(cep)
    } else {
        return false
    }
}

function verificaCEP(cepEntrada) {
    const apiVerifica = enviaCEP(cepEntrada)
    console.log(apiVerifica)
}

function exibeJSON (api) {
    console.log(api)
}