import Morbagh from "./Morbagh";

import Footer from "./Footer";
import { Emailform } from "./components/Emailform";
import { Paymentform } from "./components/Paymentform";
import { Signup } from "./components/Signup";


function Page6layout(){
    return(
        <div>
            <Morbagh/>   
            <Signup/>  
            <Footer/> 
        </div>
    )
}
export default Page6layout;