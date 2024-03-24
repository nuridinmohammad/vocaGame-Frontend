export interface IFormRegister {
  name: string;
  handphone: string;
  password: string;
  confirmPassword: string;
}

export interface IFormLogin {
  username: string;
  password: string;
}

export interface IFormEdit {
  confirmPassword?: string;
  name: string;
  handphone: string;
  password: string;
}
