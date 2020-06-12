class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.string :name
      t.string :url
      t.integer :number

      t.timestamps
    end
  end
end
