class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :task
      t.string :description
      t.string :is_completed

      t.timestamps
    end
  end
end
