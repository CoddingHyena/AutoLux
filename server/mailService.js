const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // SMTP-сервер отправителя
      port: process.env.MAIL_PORT, // Порт SMTP-сервера
      secure: false, // true для 465 порта, false для других портов
      auth: {
        user: process.env.MAIL_USER, // Имя пользователя для входа на SMTP-сервер
        pass: process.env.MAIL_PASSWORD, // Пароль пользователя для входа на SMTP-сервер
      },
    });
  }

  async sendWelcomeMail(to) {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject: 'Добро пожаловать!',
      text: '',
      html: `
          <div>
            <h1>Поздравляем, вы успешно зарегистрировались!</h1>
            <p>И теперь мы будем захламлять вашу почту всякой шнягой )</p>
          </div>
        `,
    });
  }
}

module.exports = new MailService();
