import crypto from 'crypto';

function generateToken () {
  const token = crypto.randomBytes(5).toString("hex");

  return token;
};

export = {
  generateToken
}
