import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/jwt.js'


export const createUser = async(email, password) => {

  const existingUser = await User.findOne({email});
  if(existingUser){
    throw new Error('User already exists!');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({email, password:hashedPassword});

};


export const authenticateUser = async ({email, password}) => {

  const dbUser = await User.findOne({ email });

  if(!dbUser){
    throw new Error('Invalid credentials!');
  }

  const isMatch = await bcrypt.compare(password, dbUser.password)

  if(!isMatch){
    throw new Error('Invalid credentials!');
  }

  return {
    token: generateToken(dbUser._id),
    user: {
      email: dbUser.email
    }

  };

};

export const getUserProfile = async (userId) => {

  const dbUser = await User.findById(userId);

  if(!dbUser){
    throw new Error('User not found!');
  }

  return {
    
    email: dbUser.email
  }

};