import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { GoogleLogin, gitHubLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        const user = result.user;
        console.log("User Info: ", user);
      })
      .catch((error) => {
        console.error("Error during login: ", error);
      });
  };

  const handleGitHubLogin = () => {
    gitHubLogin()
    .then((result) => {
      const user = result.user;
      console.log("User Info: ", user);
      // You can store user information or redirect the user
    })
    .catch((error) => {
      console.error("Error during GitHub login: ", error);
    });
  };
  return (
    <div className="flex gap-10">
      <button
        onClick={handleGoogleLogin}
        className="btn flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg"
      >
        <FaGoogle size={20} />
      </button>
      <button
        onClick={handleGitHubLogin}
        className="btn flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg"
      >
        <FaGithub size={20} />
      </button>
    </div>
  );
};

export default SocialLogin;
