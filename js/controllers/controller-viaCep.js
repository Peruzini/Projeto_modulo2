$('#btn-cadastrar').click(function (e) {
    e.preventDefault()
    const verificaEntradas = verificaDados()
})


function verificaDados() {
    const email = $('#inputEmail').val()
    const senha = $('#inputPassword').val()
    const nome = $('#inputName').val()
    const cep = $('#inputCep').val()
    if (email.length > 0 && senha.length > 0 && nome.length > 0) {
        const verificacaoCEP = enviaCEP(cep)
    } else {
        return alert('Insira novamente seus dados!')
    }
}

