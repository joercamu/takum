class AddColumn < ActiveRecord::Migration[5.2]
  def change
    change_table :products do |t|
      t.references :role, foreign_key: true
    end
  end
end
