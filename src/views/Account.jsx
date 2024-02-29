import { useSelector, useDispatch } from "react-redux";
import DashBoardUser from "../components/DashboardUser/DashboardUser";
import SignIn from "../components/Account/SignIn";
import { useAuth } from "../components/Account/Context/AuthContext";
import { clearUser } from "../redux/slices/userSlice";

const Account = ({ modalOpenCart, closeCart}) => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.logout();
    dispatch(clearUser());
  };

  if (!auth.authReady) {
    return (
      <p>
        Cargando...
        <button
          onClick={() => handleLogout()}
          type="submit"
          className="w-full text-white bg-[#121212] hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Logout
        </button>
      </p>
    );
  }

  return (
    <div>{auth.user.uid ? <DashBoardUser modalOpenCart={modalOpenCart} closeCart={closeCart} /> : <SignIn modalOpenCart={modalOpenCart} closeCart={closeCart}/>}</div>
  );
};
export default Account;
