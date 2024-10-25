import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { GoogleLogin } = useContext(AuthContext);

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
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg"
      >
        <FaGoogle size={20} />
      </button>
    </div>
  );
};

export default SocialLogin;
