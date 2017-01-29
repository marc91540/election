/////////////////////////////////////////////////////////////////////////////////////////   
// affichage des candidats    
    $(function(){   
        $('#candidat').click(function(){
            $.get('/api/candidats', function(data){
                
                 $( "#candidatlist" ).empty();
                 for (var i = 0; i < data.length; i++) {
                    var _li = '<li>' + data[i].firstname + ' ' + data[i].lastname + '</li>';
                    $('#candidatlist').append(_li);
                }
            })
        });
        
///////////////////////////////////////////////////////////////////////////////////////// 
// Enregistrement des votants        
        $('#votantcreate').submit(function (e) {
            e.preventDefault();

            var _firstname = $('#firstname').val(),
                _lastname = $('#lastname').val(),
                _age = $('#age').val();

            $.post('api/votant', {
                firstname: _firstname,
                lastname: _lastname,
                age: _age
            }).done(function (data) {
                alert("votre nom à bien était enregistré " + data);
            });
        });
       $('#choice').submit(function (e) {
         e.preventDefault();

         var _lastname = $('#').val(),

         $.post('api/vote', {
             lastname: _lastname,
             vote: _vote
         }).done(function (data) {
             alert("dvsdcdc");
         });
     });

    });  
///////////////////////////////////////////////////////////////////////////////////////// 