class ProjectsController < ApplicationController
  before_action :authorize, except: [:show]

  def new
    @projects = Project.all
  end

  def create
    Project.create(project_params)
    redirect_to new_project_path
  end

private
  def project_params
    params.require(:project).permit(:title, :title_font, :image, :live, :site, :code)
  end

end
