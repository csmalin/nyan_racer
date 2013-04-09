class CreateTables < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
    end

    create_table :games do |t|
      t.boolean  :status
      t.integer   :winner_id
      t.timestamps
    end

    create_table :games_players, :id => false do  |t|
      t.references :game
      t.references :player
    end
    add_index :games_players, [:game_id, :player_id] 
  end
end
