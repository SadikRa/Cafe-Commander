import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { GoogleLogin, gitHubLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: user?.email,
          name: user?.displayName,
          image: user?.photoURL,
        };
        console.log("sadik", userInfo);
        axiosPublic.post("/user", userInfo).then((res) => {
          navigate("/");
          if (res.data.accessToken) {
            Swal.fire({
              title: "success!",
              text: "user profile updated",
              icon: "success",
              confirmButtonText: "yahoo",
            });
          }
        });
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
