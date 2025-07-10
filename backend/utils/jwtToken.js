export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const isProduction = process.env.NODE_ENV === "production";

  const options = {


    httpOnly: true,
    secure: isProduction,                     // required in production
    sameSite: isProduction ? "None" : "Lax",  // required in production
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),

    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Required for cross-site cookies


    httpOnly: true,
    secure: isProduction,                     // Only true on Render
    sameSite: isProduction ? "None" : "Lax",  // Required for cross-site
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
