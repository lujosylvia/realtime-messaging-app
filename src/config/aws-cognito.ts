const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_aB21yh0ue",
  client_id: "1q1edbmdbuv8tkqu61l5c82eo4",
  redirect_uri: "http://localhost:3000/conversation",
  response_type: "code",
  scope: "phone openid email",
};

export const signOutRedirect = () => {
  const clientId = "1q1edbmdbuv8tkqu61l5c82eo4";
  const logoutUri = "<logout uri>";
  const cognitoDomain = "https://<user pool domain>";
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};

export default cognitoAuthConfig;