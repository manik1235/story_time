class CreateAxes < ActiveRecord::Migration[6.0]
  def change
    create_table :axes do |t|
      t.string :name
      t.float :degrees
      t.float :x_offset
      t.float :y_offset
      t.float :hex_diameter
      t.integer :map_width
      t.integer :map_height
      t.integer :dash_filled_length
      t.integer :dash_blank_length
      t.string :color
      t.references :map

      t.timestamps
    end
  end
end
