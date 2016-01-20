class AddBasicsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :title, :string
    add_column :projects, :image, :string
  end
end
