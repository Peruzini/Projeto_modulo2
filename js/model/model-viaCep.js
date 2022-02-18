function enviaCEP (cep) {
   $.ajax({
        method: "GET",
        url: `https://viacep.com.br/ws/${cep}/json/`,
        success: function (api) {
            return exibeJSON(api);
            
        },

        error: function(jqXHR, textStatus) {
            return erro(textStatus);
        }
        
    })

}
