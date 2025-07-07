// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true, // Set httpOnly to true
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };



export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const isProduction = process.env.NODE_ENV === "production";

  const options = {
<<<<<<< HEAD
    httpOnly: true,
    secure: isProduction,                     // required in production
    sameSite: isProduction ? "None" : "Lax",  // required in production
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
=======
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Required for cross-site cookies
>>>>>>> 4eb769e (done)
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};




// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();

//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//     secure: true,          // ✅ Required for HTTPS
//     sameSite: "None",      // ✅ Required for cross-origin cookie
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };
