class PortfolioController < ApplicationController

  def index
    @project = Project.all
  end
end
