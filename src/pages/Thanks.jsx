import { Link } from "react-router";
import Footer from "../components/Footer";

// Melhorar essa página, porque está péssima kkkkkkk
const Thanks = () => {
    return (
        <>
            <div className="w-full gap-4 flex flex-col items-center justify-center p-4">
                <div className="bg-mypurple text-center gap-5 p-5 flex flex-col items-center justify-center w-full text-white poppins-font">
                    <h1 className="text-6xl font-bold">THANK YOU!</h1>
                    <p className="text-lg">We have received your email and will get back to you soon.</p>
                </div>
                <Link className="bg-mypurple poppins-font hover:bg-purple-900 transition-colors duration-500 flex items-center justify-center w-35 h-12 rounded-lg text-white" to="/">Go Back Home</Link>
            </div>
            <div className="footer-thanks-page fixed w-full bottom-0">
                <Footer />
            </div>
        </>
    );
};

export default Thanks;