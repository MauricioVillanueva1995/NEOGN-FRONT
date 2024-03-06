import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProvider } from "./components/Account/Context/AuthContext";
import CircleLoader from "react-spinners/CircleLoader";
import BGDark from "../src/assets/images/Background/BGDark.webp";
import NEOGNLOGOLIGHT from "./assets/images/Logo/NEOGNLOGOLIGHT.webp";
import NavBar from "./components/NavBar";
import Error from "./views/Error";
import AppBar from "./components/AppBar/AppBar";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Search from "./views/Search";
import Wishlist from "./views/Wishlist";
import Account from "./views/Account";
import TopBar from "./components/TopBar/TopBar";
import Detail from "./views/Detail";
import Categories from "./views/Categories";
import AboutUs from "./views/AboutUs";
import AdminAccount from "./components/Account/AdminAccount";
import DashBoardAdmin from "./components/DashBoardAdmin/DashBoardAdmin";
import EditedProduct from "./components/DashBoardAdmin/EditedProduct";
import ManageStock from "./components/DashBoardAdmin/ManageStock";
import ManageUser from "./components/DashBoardAdmin/ManageUser";
import ProductsToModify from "./components/DashBoardAdmin/ProductToModify";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import PurchaseHistory from "./components/DashBoardAdmin/PurchaseHistory";
import ContactUs from "./views/ContactUs";
import SignUp from "./components/Account/SignUp";
import LogInAdmin from "./components/Account/LogInAdmin";
import EditProfile from "./components/DashboardUser/EditProfile";
import OrderHistory from "./components/DashboardUser/OrderHistory";
import WishlistAccount from "./components/DashboardUser/WishlistAccount";
import OrderDetails from "./components/DashboardUser/Orders/OrderDetails";
import { useSelector } from "react-redux";

const App = () => {
  const [desktop, setDesktop] = useState(window.innerWidth > 1024);
  const [loading, setLoading] = useState(false);
  const [modalOpenCart, setModalOpenCart] = useState(false);

  const user = useSelector((state) => state.user);

  const closeCart = () => setModalOpenCart(false);
  const openCart = () => setModalOpenCart(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation();

  const isTopBarHidden =
    location.pathname === "/Account" ||
    location.pathname.startsWith("/Account/EditProfile") ||
    location.pathname.startsWith("/Account/Orders") ||
    location.pathname.startsWith("/Account/Wishlist") ||
    location.pathname.startsWith("/Account/SignUp") ||
    location.pathname.startsWith("/Account/LogIn/Admin") ||
    location.pathname === "/Admin" ||
    location.pathname.startsWith("/Admin/Purchase-History") ||
    location.pathname.startsWith("/Admin/Create-Product") ||
    location.pathname.startsWith("/Admin/Products-To-Modify") ||
    location.pathname.startsWith("/Admin/Products-To-Modify/:id") ||
    location.pathname.startsWith("/Admin/Manage-Stock") ||
    location.pathname.startsWith("/Admin/Manage-User");

  return (
    <AuthProvider>
      {loading ? (
        <div
          className="w-full h-screen flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 justify-center items-center"
          style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${BGDark})`,
          }}
        >
          <CircleLoader
            color={"#fff"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <img className="h-40" src={NEOGNLOGOLIGHT} />
        </div>
      ) : (
        <div>
          <div
            className={`absolute w-full z-[9999] ${!desktop ? "hidden" : ""}`}
          >
            <NavBar
              modalOpenCart={modalOpenCart}
              closeCart={closeCart}
              openCart={openCart}
            />
          </div>
          {!isTopBarHidden && <TopBar />}
          <Routes>
            {/* Dashboard Admin */}
            <Route
              path="/Admin"
              element={user.isAdmin ? <DashBoardAdmin /> : <Error />}
            >
              <Route
                path="Purchase-History"
                element={user.isAdmin ? <PurchaseHistory /> : <Error />}
              />

              <Route
                path="Create-Product"
                element={user.isAdmin ? <CreateProduct /> : <Error />}
              />

              <Route
                path="Products-To-Modify"
                element={user.isAdmin ? <ProductsToModify /> : <Error />}
              />

              <Route
                path="Products-To-Modify/:id"
                element={user.isAdmin ? <EditedProduct /> : <Error />}
              />

              <Route
                path="Manage-Stock"
                element={user.isAdmin ? <ManageStock /> : <Error />}
              />

              <Route
                path="Manage-User"
                element={user.isAdmin ? <ManageUser /> : <Error />}
              />
            </Route>
            <Route
              path="/"
              element={
                <Home modalOpenCart={modalOpenCart} closeCart={closeCart} />
              }
            />
            <Route path="/Cart" element={<Cart />} />
            <Route
              path="/Search"
              element={
                <Search modalOpenCart={modalOpenCart} closeCart={closeCart} />
              }
            />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Categories" element={<Categories />} />
            <Route
              path="/ContactUs"
              element={
                <ContactUs
                  modalOpenCart={modalOpenCart}
                  closeCart={closeCart}
                />
              }
            />
            <Route
              path="/:id"
              element={
                <Detail modalOpenCart={modalOpenCart} closeCart={closeCart} />
              }
            />
            <Route
              path="/AboutUs"
              element={
                <AboutUs modalOpenCart={modalOpenCart} closeCart={closeCart} />
              }
            />
            <Route path="/Error" element={<Error />} />
            <Route
              path="/Account"
              element={
                <Account modalOpenCart={modalOpenCart} closeCart={closeCart} />
              }
            />
            <Route path="/Account/Admin" element={<AdminAccount />} />
            <Route
              path="/Account/SignUp"
              element={
                <SignUp/>
              }
            />
            <Route
              path="/Account/LogIn/Admin"
              element={
                <LogInAdmin
                  modalOpenCart={modalOpenCart}
                  closeCart={closeCart}
                />
              }
            />
            {/* Dashboard User */}
            <Route
              path="/Account/EditProfile"
              element={
                <EditProfile
                  modalOpenCart={modalOpenCart}
                  closeCart={closeCart}
                />
              }
            />
            <Route
              path="/Account/Orders"
              element={
                <OrderHistory
                  modalOpenCart={modalOpenCart}
                  closeCart={closeCart}
                />
              }
            />
            <Route path="/Account/Orders/:id" element={<OrderDetails />} />
            <Route
              path="/Account/Wishlist"
              element={
                user.id ? (<WishlistAccount
                  modalOpenCart={modalOpenCart}
                  closeCart={closeCart}
                />) :
                <Navigate to="/Account" />
              }
            />
          </Routes>
          <div
            className={` fixed bottom-0 left-0 w-full z-[1000] ${
              desktop ? "hidden" : ""
            }`}
          >
            <AppBar />
          </div>
        </div>
      )}
    </AuthProvider>
  );
};

export default App;
