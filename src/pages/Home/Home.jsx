
import Annoucement from "../../components/Annoucement";
import Categories from "../../components/Categories";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import ProductsList from "../../components/ProductsList";
import Slider from "../../components/Slider";


function Home() {
    return (
        <div>
            <Annoucement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <ProductsList/>
            <Newsletter/>
        </div>
    );
}

export default Home;