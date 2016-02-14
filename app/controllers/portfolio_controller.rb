class PortfolioController < ApplicationController

  def index
    @project = Project.all
    # @badges = ["Ruby-edit.jpg", "Rails-edit.png", "HTML5-edit.jpg", "CSS3-edit.jpg", "JS-edit.jpg", "AJAX.svg.png", "jquery-logo.png", "json-logo.png", "haml-edit.png", "github.png", "heroku.png", "namecheap.png", "mailgun.png", "twilio.png", "sqlite3.png", "postgres.png", "bootstrap.png", "tiy.png", "codecademy-short.jpg", "exercism.png"]
  end

end
