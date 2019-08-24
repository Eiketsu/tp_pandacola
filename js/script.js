$(function()
{

    let index = 1;
    
    let history = [];

    let histo = '';
    
    let nbr_button = 5;
    
    getQuestion();

    for ( let i = 2; i <= nbr_button; i++ ) {

        $( '<input type="button" class="button button_nbr'+i+'" value="">' ).appendTo( '.button_answers' );
    
    }
    
    $( '.button' ).click( function () {

        getQuestion();

        history.push( $( '.text' ).html(), $( this ).val() );

        console.log( history );
    
    }); 

    function getQuestion() {
        
        $.get( 'server/requestQuestions.php', { id: index }, function ( data ) {

            let results = JSON.parse( data );

            $(".text").text(results[0].questions);

            for(var i = 2; i <= nbr_button; i++){

                $( '.button_nbr'+i+'' ).val( results[0][i] );
                
            }
            
        });

        if( index >= 4 ) {

            index = 0;
        
        }

        index++;
    
    }


    function registerHistory() {
        
        $.ajax({
            
            url : 'server/requestHistory.php',
            
            type : 'POST',
            
            data : 'history=' + histo,
            
            dataType : 'html',

            success : function(code_html, statut){

                $(".text").text("Merci d'avoir repondue à nos questions :) !");
           
            },
     
            error : function(resultat, statut, erreur){

                alert("Une erreur est survenue veuillez réessayer ulterieurement");
            
            }
         
        });
    }

    $('<input type="button" class="stop" value="mettre fin a la conversation"></input>').appendTo('.button_answers');

    $('.stop').click(function(){
        
        for(i = 0; i < history.length; i++) {
        
            histo +=  history[i]+'\n';
        
        }

        registerHistory();
        
    })


  });