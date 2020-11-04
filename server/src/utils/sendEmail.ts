import nodemailer from 'nodemailer';

export async function sendEmail(to: string, html: string) {
  // let testAccount = await nodemailer.createTestAccount();
  // console.log('testeAccount', testAccount);
  
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'ey2rahci5eho45ct@ethereal.email',
      pass: 'RGFaTmcCZZpExTmscD',
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo" <foo@example.com>',
    to,
    subject: "Change password",
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}