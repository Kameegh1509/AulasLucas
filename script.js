$(document).ready(function(){
    
    $('body').on('click', '#consultar', function(){
        consultaCep();
    });

    function consultaCep() {
        const cep = $('#cep').val();

        if(cep.length !== 8){
            alert('Digite o cep corretamente');
            return false;
        }
    }

    $.ajax({
        url: 'viacep.com.br/ws/' + cep + '/json/',
        type: 'GET',
        dataType: 'json',
        success: function() {
            console.log(data);
        }
    })

})