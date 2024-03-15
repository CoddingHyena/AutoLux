const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // SMTP-сервер отправителя
      port: process.env.MAIL_PORT, // Порт SMTP-сервера
      secure: true, // true для 465 порта, false для других портов
      auth: {
        user: process.env.MAIL_USER, // Имя пользователя для входа на SMTP-сервер
        pass: process.env.MAIL_PASSWORD, // Пароль пользователя для входа на SMTP-сервер
      },
    });
  }

  async sendWelcomeMail(to) {
    console.log(
      '=======',
      process.env.MAIL_HOST,
      process.env.MAIL_PORT,
      process.env.MAIL_USER,
      process.env.MAIL_PASSWORD
    );
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject: 'Добро пожаловать!',
      text: '',
      html: `
          <div>
            <h1> AVTO LUX поздравляет вас с успешной регистрацией!</h1>
          </div>
        `,
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject,
      html,
    });
  }
}

module.exports = new MailService();
