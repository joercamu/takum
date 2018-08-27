class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :roles, :nombre, :name
  end
end
