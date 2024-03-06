import ActiveBasket from "../../assets/Images/AppbarIcons/ActiveBasket.png"
import InactiveBasket from "../../assets/Images/AppbarIcons/InactiveBasket.png"
import DarkBasket from "../../assets/Images/AppbarIcons/DarkBasket.png"
import ActiveHeart from "../../assets/Images/AppbarIcons/ActiveHeart.png"
import InactiveHeart from "../../assets/Images/AppbarIcons/InactiveHeart.png"
import DarkHeart from "../../assets/Images/AppbarIcons/DarkHeart.png"
import ActiveHome from "../../assets/Images/AppbarIcons/ActiveHome.png"
import InactiveHome from "../../assets/Images/AppbarIcons/InactiveHome.png"
import DarkHome from "../../assets/Images/AppbarIcons/DarkHome.png"
import ActiveProfile from "../../assets/Images/AppbarIcons/ActiveProfile.png"
import InactiveProfile from "../../assets/Images/AppbarIcons/InactiveProfile.png"
import DarkProfile from "../../assets/Images/AppbarIcons/DarkProfile.png"
import ActiveSearch from "../../assets/Images/AppbarIcons/ActiveSearch.png"
import InactiveSearch from "../../assets/Images/AppbarIcons/InactiveSearch.png"
import DarkSearch from "../../assets/Images/AppbarIcons/DarkSearch.png"

const imagePaths = {
    Home: {
      inactive: InactiveHome,
      active: ActiveHome,
      dark: DarkHome,
    },
    Cart: {
      inactive: InactiveBasket,
      active: ActiveBasket,
      dark: DarkBasket,
    },
    Search: {
      inactive: InactiveSearch,
      active: ActiveSearch,
      dark: DarkSearch,
    },
    Wishlist: {
      inactive: InactiveHeart,
      active: ActiveHeart,
      dark: DarkHeart,
    },
    Account: {
      inactive: InactiveProfile,
      active: ActiveProfile,
      dark: DarkProfile,
    },
}

export default imagePaths;