import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Navbar = ()=>{
    const {isAuth , handleAuth} = useContext(AuthContext);
    
     return (
			<div>
				<button onClick={()=>handleAuth()}> 
				{isAuth ? "Logout" : "Login"}
				</button>
				<h1>User</h1>
                <h3>Status : {isAuth ? "Login" : "Logged out"}</h3>
			</div>
		);
}