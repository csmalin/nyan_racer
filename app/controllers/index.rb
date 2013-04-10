get '/' do
  erb :index
end


post '/gameover' do
  player1 = Player.find_or_create_by_name(params[:player1])
  player2 = Player.find_or_create_by_name(params[:player2])
  winner = Player.find_by_name(params[:winner])
  game = Game.create(:winner => winner, :players => [player1, player2])
end

# get '/games/:id' do
#   @game = Game.find(params[:id])
#   @players = @game.players
#   @player1 = Game.last.players.first.id
#   @player2 = Game.last.players.last.id


#   erb :game
# end

# put '/games/:id' do
#   @game = Game.find(params[:id])
#   @game.winner = Player.find(params[:winner_id])
#   @game.save


  # redirect somewhere or render an erb
# end
