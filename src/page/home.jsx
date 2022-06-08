import { useState } from "react";
import List from "../components/list";
import NavBar from "../components/Navbar";



const Home = () => {
    const [data,setData] = useState(["Shaden","Bahar","Pouria","Benyamin","Maryam","Ali"])
    return ( <>
        <div className="container border border-primary mt-5" style={{width:"600px"}}>
            <NavBar/>
            {
                data.map((e,index)=><List text={e} key={index} />)
            }
        </div>
    </>);
}
 
export default Home;