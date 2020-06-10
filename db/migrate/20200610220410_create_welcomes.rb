class CreateWelcomes < ActiveRecord::Migration[6.0]
  def change
    create_table :welcomes do |t|
      t.string :path
      t.string :title

      t.timestamps
    end
  end
end
