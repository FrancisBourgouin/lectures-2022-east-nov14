class CreateWeathers < ActiveRecord::Migration[6.1]
  def change
    create_table :weathers do |t|
      t.string :current
      t.string :temp

      t.timestamps
    end
  end
end
