class Mailer < ApplicationMailer
  default from: "noreply@michaelreed.me"

  def thank_you(email)
    @email = email
    mail(to: @email[:email], subject: "Thank you!")
  end

  def from_contact(email)
    @email = email
    mail(to: ENV['EMAIL'], subject: @email[:subject])
  end

end
