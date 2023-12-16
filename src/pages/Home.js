import Documents from '../components/Documents.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Team from '../components/Team.js';
export default function Home(){
    return(
        <div>
            <h2> Home Page </h2>
            
            <Team/>
            <Documents/>
            <Footer/>
        </div>
    )
}