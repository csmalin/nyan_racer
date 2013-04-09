class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_and_belongs_to_many :players

  def winner=(winner)
    self.winner_id = winner.id
  end

  def winner
    Player.find(self.winner_id)
  end
end
