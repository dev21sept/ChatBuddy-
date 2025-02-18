import { Link } from "react-router-dom";

function WrongPage()
{
    return <>
        <div className="text-center">
            <img src="img/404.jpg" height={400} width={600}/>
            <Link to="/home"><h1>Home</h1></Link>
        </div>
        
        
    </>
}
export default WrongPage;