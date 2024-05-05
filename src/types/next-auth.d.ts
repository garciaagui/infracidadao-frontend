import 'next-auth';

declare module 'next-auth' {
  type Session = {
    token: {
      accessToken: string;
      user: {
        id: string;
        name: string;
        email: string;
        role: string;
        createdAt: string;
        updatedAt: string;
      };
      exp: int;
      iat: int;
      jti: string;
    };
    expires: string;
  };
}
