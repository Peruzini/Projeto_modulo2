function exibeJSON (api) {
    console.log(api)
    const endereco = api.logradouro;
    const cidade = api.localidade;
    const estado = api.uf;
    const bairro = api.bairro;
    $('#inputAddress').val(endereco);
    $('#inputCity').val(cidade);
    $('#inputState').val(estado.toUpperCase());
    $('#inputBairro').val(bairro);
    return true;
}

function erro (erro) {
    alert(`Erro: ${erro}\n Insira novamente os dados.`);
    $('#inputCep').val('');
    $('#inputAddress').val('');
    $('#inputCity').val('');
    $('#inputState').val('');
    $('#inputBairro').val('');
    return false;
}

$('#btn-cadastro').click(function () {
    $('#inputEmail').val('');
    $('#inputAddress').val('');
    $('#inputCity').val('');
    $('#inputState').val('');
    $('#inputBairro').val('');
})