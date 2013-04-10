function Player(name, $keyBox, $nameBox) {
  this.name = name;
  this.position = 0;
  this.$key_box = $keyBox;
  this.$name_box = $nameBox;
  this.set_name();
};

Player.prototype.set_name = function() {
  this.$name_box.text(this.name);
}
 
Player.prototype.advance = function(cat) {
  this.position +=30;
  cat.css({left: this.position});
};

Player.prototype.is_winner = function() {
  if (this.position >= 700){
    return true;
  };
};

function Game(player1,player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.new_key(player1);
  this.new_key(player2);
};

Game.prototype.new_key = function(player) {
  player.current_key = randomKey(GAMEKEYS);
  player.current_val = GAMEKEYS[player.current_key];
  player.$key_box.text(player.current_key);
};

Game.prototype.results = function(winner, loser) {
  this.winner = winner;
  this.loser  = loser
};

Game.prototype.gameOver = function() {
  var results = {player1: this.player1.name, 
                 player2: this.player2.name,
                 winner: this.winner.name};
      ajaxify_the_results(results)

  UI.gameOver(this.winner, this.loser)
};

Game.prototype.is_game_over = function() {
  if (this.player1.is_winner() || this.player2.is_winner()){
    var game_winner, game_loser
    var standings = this.whoIsWinner()
    this.winner(standings.winner);
    this.loser(standings.loser);
    this.gameOver();
  };
};


Game.prototype.key_up = function(keyCode) {
  if (keyCode === this.player1.current_val) {
    //todo: create a reference for #cat1 and cat2
    this.player1.advance($('#cat1'));
    this.player1.new_key();
    console.log("Player1 Position: " + this.player1.position);
  }
  if (keyCode === this.player2.current_val) {
    this.player2.advance($('#cat2'));
    this.player2.new_key();
    console.log("Player2 Position: " + this.player2.position);
  }

  this.is_game_over();



}

