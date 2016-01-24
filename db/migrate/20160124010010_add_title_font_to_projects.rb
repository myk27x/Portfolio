class AddTitleFontToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :title_font, :string
  end
end
