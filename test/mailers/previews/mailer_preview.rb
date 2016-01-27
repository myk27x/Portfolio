# Preview all emails at http://localhost:3000/rails/mailers/mailer
class MailerPreview < ActionMailer::Preview

  def sample_thank_you
    @email = {name: "Michael", email: "joe@example.com"}
    Mailer.thank_you(@email)
  end

end
