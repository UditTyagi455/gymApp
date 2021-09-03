import "./App.css"
import Body1 from "./component/Body1"
import Body2 from "./component/Body2"
import Footer from "./component/Footer"
import Header from "./component/Header"
import HeroSection from "./component/HeroSection"
import HeroSection2 from "./component/HeroSection2"
import HeroSection3 from "./component/HeroSection3"

const App = () => {
    return (
        <>
            <Header />
            <Body1 />
            <Body2/>
            <HeroSection />
            <HeroSection2/>
            <HeroSection3/>
            <Footer/>
        </>
    )
}

export default App
