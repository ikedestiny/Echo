import { useNavigate } from 'react-router-dom';
import '../style/profiles.css'
import { GrPrevious, GrNext } from "react-icons/gr";
import { PiTagSimpleBold } from "react-icons/pi";


const Connect = () => {
    const navigate = useNavigate()
    return (
        <div className="profile-home">


            <div className="profile-container">
                <img src="https://i.pinimg.com/736x/a3/42/a5/a342a5261e23a03fdfa88be4c793e27e.jpg" alt="" className='profile-image' />

                <button className='viewProfile' onClick={() => { navigate("/profileDetail") }}>View</button>

                <GrPrevious className='previous' size={50} />
                <GrNext className='next' size={50} />
                <h2 className='username'>username</h2>
            </div>


            <div className="user-info">

                <p><PiTagSimpleBold style={{ padding: "10px" }} size={25} color='skyblue' /> Music Lover, Anime </p>

            </div>


        </div>
    )
}

export default Connect