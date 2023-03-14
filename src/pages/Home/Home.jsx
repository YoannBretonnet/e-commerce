
import Annoucement from "../../components/Annoucement";
import Categories from "../../components/Categories";
import Navbar from "../../components/Navbar";
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
        </div>
    );
}

export default Home;