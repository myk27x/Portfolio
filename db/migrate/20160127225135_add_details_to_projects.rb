class AddDetailsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :description, :text
    add_column :projects, :tech, :string
  end
end
