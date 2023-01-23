import User from '../../database/models/User';
import { compare } from 'bcryptjs';
import { createToken } from '../Utils/jwtUtils';


class loginService {
  static async login({ email, password }) {
    if (!email || !password) {
      const e = new Error('Email ou password não preenchidos');
      e.message = 'Email or password must be filled';
      e.status = 400;
      throw e;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      const e = new Error('Email ou password incorretos');
      e.message = 'Incorrect email or password';
      e.status = 404;
      throw e;
    }

    const isPasswordValid = await compare(password, user.dataValues.password);

    if (!isPasswordValid) {
      const e = new Error('Email ou password incorretos');
      e.message = 'Incorrect email or password';
      e.status = 404;
      throw e;
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);

    return { token };
  }
}

module.exports = loginService;