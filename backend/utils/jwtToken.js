export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const isProduction = process.env.NODE_ENV === "production";

  const options = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    path: '/'
  };

  res.status(statusCode)
     .cookie("token", token, options)
     .json({ success: true, user, message });
};