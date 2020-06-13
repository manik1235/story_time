class ChangeIntToRefEpisodeHexes < ActiveRecord::Migration[6.0]
  def change
    create_table :episode_hexes, id: false do |t|
      t.references :episode
      t.references :hex
    end
  end
end
