class CreateSubjects < ActiveRecord::Migration[5.0]
  def change
    create_table :subjects do |t|
      t.string "name", :null => false
      t.string "code", :null => false
      t.integer "credits", :limit => 5, :null => false
      t.timestamps
    end
  end
end
