interface IToken {
  payload: {
    username: string,
    vocation: string,
    level: number,
    password: string
  };
  iat?: number;
  exp?: number;
}

export default IToken;