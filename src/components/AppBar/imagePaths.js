import ActiveBasket from "../../assets/images/AppbarIcons/ActiveBasket.png"
import InactiveBasket from "../../assets/images/AppbarIcons/InactiveBasket.png"
import DarkBasket from "../../assets/images/AppbarIcons/DarkBasket.png"
import ActiveHeart from "../../assets/images/AppbarIcons/ActiveHeart.png"
import InactiveHeart from "../../assets/images/AppbarIcons/InactiveHeart.png"
import DarkHeart from "../../assets/images/AppbarIcons/DarkHeart.png"
import ActiveHome from "../../assets/images/AppbarIcons/ActiveHome.png"
import InactiveHome from "../../assets/images/AppbarIcons/InactiveHome.png"
import DarkHome from "../../assets/images/AppbarIcons/DarkHome.png"
import ActiveProfile from "../../assets/images/AppbarIcons/ActiveProfile.png"
import InactiveProfile from "../../assets/images/AppbarIcons/InactiveProfile.png"
import DarkProfile from "../../assets/images/AppbarIcons/DarkProfile.png"
import ActiveSearch from "../../assets/images/AppbarIcons/ActiveSearch.png"
import InactiveSearch from "../../assets/images/AppbarIcons/InactiveSearch.png"
import DarkSearch from "../../assets/images/AppbarIcons/DarkSearch.png"

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