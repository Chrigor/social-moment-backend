import { resolve } from "path";
import { Transporter } from "nodemailer";
import nodemailerhbs from "nodemailer-express-handlebars";
import exphbs from "express-handlebars";

function configureTemplate(transporter: Transporter) {
  const viewPath = resolve(__dirname, "..", "views", "emails");
  transporter.use(
    "compile",
    nodemailerhbs({
      viewEngine: exphbs.create({
        layoutsDir: resolve(viewPath, "layouts"),
        partialsDir: resolve(viewPath, "partials"),
        defaultLayout: "default",
        extname: ".hbs",
      }),
      viewPath,
      extName: ".hbs",
    })
  );
}

export {
  configureTemplate
}
