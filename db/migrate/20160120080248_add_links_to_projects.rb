class AddLinksToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :live, :boolean
    add_column :projects, :site, :string
    add_column :projects, :code, :string
  end
end
