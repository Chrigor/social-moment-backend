import { promisify } from "util";
import nodemailer from "nodemailer";
import { configureTemplate } from "../utils/configureTemplate";
import getMailConfig from "../config/mailConfig";

interface Parameters {
  to: string;
  subject: string;
  template: Object | string;
  context: object;
}

async function sendMail({ to, subject, template, context }: Parameters) {
  const mailConfig = getMailConfig();
  const { user: from } = mailConfig.auth;
  const transporter = nodemailer.createTransport(mailConfig);

  configureTemplate(transporter);

  try {
    let reponse = await transporter.sendMail({
      to,
      from,
      subject,
      template,
      context,
    });

    return {
      title: "Sucess",
      message: "Its be okay",
    };
  } catch (error) {
    return {
      title: "Error",
      message: `Error: ${error.message}`,
    };
  }
}

export { sendMail };
