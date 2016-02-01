class EmailController < ApplicationController

  def new
    @email = ""
  end

  def create
    @email = email_params

    Mailer.from_contact(@email).deliver_now
    Mailer.thank_you(@email).deliver_now

    head :created
  end

private
  def email_params
    params.permit(:name, :email, :company, :subject, :reply)
  end

end
