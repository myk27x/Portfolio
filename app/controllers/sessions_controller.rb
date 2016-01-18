class SessionsController < ApplicationController

  def new
  end

  def create
    admin = Admin.find_by_name(params[:name])
    if admin && admin.authenticate(params[:password])
      session[:user_id] = admin.id
      redirect_to '/'
    else
      # TODO raise alert for failed login
      # IDEA once modal implemented keep modal open and flash the border red
      redirect_to '/login'
    end
  end

  def destroy
    reset_session
    redirect_to '/'
  end

end
