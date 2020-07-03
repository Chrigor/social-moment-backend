import nodemailer from "nodemailer";
import { configureTemplate } from "../utils/configureTemplate";
import getMailConfig from "../config/mailConfig";

interface Parameters {
  to: string;
  subject: string;
  template: Object | string;
  context: object;
}

function sendMail({ to, subject, template, context }: Parameters) {
  const mailConfig = getMailConfig();
  const { user: from } = mailConfig.auth;
  const transporter = nodemailer.createTransport(mailConfig);
  configureTemplate(transporter);

  transporter.sendMail(
    {
      to,
      from,
      subject,
      template,
      context,
    },
    (error) => {
      if (error) {
        console.log(error.message);
      }
      console.log("Enviou");
    }
  );
}

export { sendMail };
