class AddSeriesToEpisodes < ActiveRecord::Migration[6.0]
  def change
    add_column :episodes, :series_id, :integer
    add_foreign_key :episodes, :series
  end
end
