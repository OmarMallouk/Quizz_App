
import { useSelector } from "react-redux";
import "../styles/navbar.css"



const Navbar = () =>{
    let totalScore = useSelector(state=>state.scoreCount.value)

    return(

<div className="totalScore">
    <h2 >Total Score: {totalScore}</h2>
</div>


    );
}


export default Navbar;