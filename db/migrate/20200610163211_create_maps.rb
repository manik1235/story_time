class CreateMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :maps do |t|
      t.string :background
      t.integer :x
      t.integer :y
      t.integer :z

      t.timestamps
    end
  end
end
