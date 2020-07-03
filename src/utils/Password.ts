import bcrypt from "bcrypt";

async function comparePassword(password: string, passwordEncrypted: string) {

  console.log(password);
  console.log(passwordEncrypted);
  
  return await bcrypt.compare(password, passwordEncrypted);
}

async function encryptPassword(password: string) {
  return await bcrypt.hash(password, 8);
}

export = {
  comparePassword,
  encryptPassword
};
