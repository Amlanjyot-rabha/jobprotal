export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  // Fallback to 7 days if COOKIE_EXPIRE is not set
  const cookieExpireDays = process.env.COOKIE_EXPIRE || 7;
  const options = {
    expires: new Date(
      Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Required for cross-site cookies
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
