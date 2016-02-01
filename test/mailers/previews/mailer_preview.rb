# Preview all emails at http://localhost:3000/rails/mailers/mailer
class MailerPreview < ActionMailer::Preview

  # http://localhost:3000/rails/mailers/mailer/sample_thank_you
  def sample_thank_you
    @email = {name: "Joe Bob", email: "joe@example.com"}
    Mailer.thank_you(@email)
  end

  # http://localhost:3000/rails/mailers/mailer/sample_from_contact
  def sample_from_contact
    @email = { name: "Joe Bob",
              email: "joe@example.com",
            company: "Some Company, LLC",
            subject: "something here",
              reply: "testing line break\r\nsingle line space\r\n\r\ndouble line space\r\n\r\n\r\nthanks\r\njoe"
            }
    Mailer.from_contact(@email)
  end

end
