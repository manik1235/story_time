class CreateNpcs < ActiveRecord::Migration[6.0]
  def change
    create_table :npcs do |t|
      t.integer :npc_type
      t.string :name

      t.timestamps
    end
  end
end
