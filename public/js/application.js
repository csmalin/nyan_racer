$(document).ready(function() {
  
  change_character();
  show_player_dialog();
  var game;

  $(".players_form").submit(function(event) {
    event.preventDefault();  

    player1 = new Player($("#dialog_player1").val(),
                         $('#player1_key'),
                         $("#player1_name"));

    player2 = new Player($("#dialog_player2").val(),
                         $('#player2_key'), 
                         $("#player2_name"));
  
    $(".keys").css({visibility: 'visible'})
    $('#players').dialog('close');
    game = new Game(player1, player2);
    console.log(game);
  });

    $(document).on('keyup', function(event){
      game && game.key_up(event.keyCode);
    });

  var UI = {
    gameOver: function(winner, loser){    
      $(winner.id).attr('src','/img/technyancolor.gif');
      $(loser.keyBox).effect("explode", 1000);
      $(winner.nameBox).text('has won!');
    }
  }


});



  

//if the key for a player is pressed
//advance the player
//check if the game is over
// if over ajax the winner to the server
//display the stats 
//restart the game with a button
