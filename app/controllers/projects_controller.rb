class ProjectsController < ApplicationController
  before_action :authorize,   except: [:show]
  before_action :set_project, except: [:index, :new, :create]

  def index
    @project = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.create(project_params)

    redirect_to project_path(@project)
  end

  def edit

  end

  def show

  end

  def update
    @project.update(project_params)

    redirect_to project_path(@project)
  end

  def destroy
    @project.destroy

    redirect_to projects_path
  end

private
  def project_params
    params.require(:project).permit(:title, :title_font, :description, :image, :live, :site, :code, :tech)
  end

  def set_project
    @project = Project.find(params[:id])
  end

end
