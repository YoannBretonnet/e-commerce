
// == Components
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductsList from "../components/ProductsList";
import Slider from "../components/Slider";

// == Composant
function Home() {
    return (
        <div>
            <Annoucement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <ProductsList/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Home;