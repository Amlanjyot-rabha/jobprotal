export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const isProduction = process.env.NODE_ENV === "production";

  const options = {


    httpOnly: true,
    secure: isProduction,                      
    sameSite: isProduction ? "None" : "Lax",  
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),

    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",  


    httpOnly: true,
    secure: isProduction,                      
    sameSite: isProduction ? "None" : "Lax",   
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),  
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
