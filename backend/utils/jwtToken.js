export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const isProduction = process.env.NODE_ENV === "production";

  const options = {
    httpOnly: true,
    secure: isProduction,                       // true in production (Render)
    sameSite: isProduction ? "None" : "Lax",    // 'None' required for cross-site cookies
    expires: new Date(
      Date.now() + (process.env.COOKIE_EXPIRE || 7) * 24 * 60 * 60 * 1000
    )
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
  });
};
