class RenameMapColumns < ActiveRecord::Migration[6.0]
  def change
    rename_column :maps, :x, :width
    rename_column :maps, :y, :height
    remove_column :maps, :z
  end
end
