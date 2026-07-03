import { createUser, authenticateUser, getUserProfile } from "../services/authServices.js";

export const signup = async (req, res) => {

  try{
    const { email, password } = req.body;
    await createUser(email, password);
  
    res.status(201).json({
      message:'User created successful!'
    });
  }

  catch(error){

    res.status(400).json({
      message:error.message
    });
  }

};

export const login = async (req, res) => {
  try{
      
    const result = await authenticateUser(req.body);

    res.json({
      token: result.token,
      email: result.user.email,
      message:'Login successful!'
    });
  }catch(error){
    res.status(400).json({
      message:error.message
    });
  }

};

export const getProfile = async (req, res) => {

  try{
    const user = await getUserProfile(req.user.id);

    res.status(200).json({
      user
    })

  }catch(error){

    res.status(400).json({
      message:error.message
    });
  }

};

