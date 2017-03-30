class AlterUsers < ActiveRecord::Migration[5.0]
  def up
    #rename_table("users","admin_users")
    add_column("users","username", :string, :limit => 25,:after => "email")
    change_column("users", "email", :string, :limit => 100)
    rename_column("users", "password", "hashed_password")
    add_index("users", "username")
  end
  def down
    remove_index("users", "username")
    rename_column("users", "hashed_password", "password")
    change_column("users", "email", :string, :default => '',:null => false)
    remove_column("users","username")
    #rename_table("admin_users","users")
  end
end
