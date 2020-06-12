class CreateHexes < ActiveRecord::Migration[6.0]
  def change
    create_table :hexes do |t|
      t.string :name
      t.integer :x
      t.integer :y
      t.integer :z
      t.string :background

      t.timestamps
    end
  end
end
