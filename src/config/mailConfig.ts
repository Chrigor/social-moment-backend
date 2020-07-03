interface IMailConfig {
  host: string | undefined;
  port: number | undefined;
  secure: boolean;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
  tls: {
    rejectUnauthorized: boolean;
  };
}

export default function getMailConfig() {
  const {
    EMAIL_HOST: host,
    EMAIL_PORT: port,
    EMAIL_AUTH_EMAIL: user,
    EMAIL_AUTH_PASSWORD: pass,
  } = process.env;

  const config: IMailConfig = {
    host,
    port: Number(port),
    secure: false,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };

  return config;
}
