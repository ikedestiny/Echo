/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '../style/profiles.css'
import { GrPrevious, GrNext } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { PiTagSimpleBold } from "react-icons/pi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
const ProfileDetail = ({ props }) => {
    const navigate = useNavigate()
    return (
        <div className="profile-home">


            <div className="profile-container">
                <img src="https://i.pinimg.com/736x/a3/42/a5/a342a5261e23a03fdfa88be4c793e27e.jpg" alt="" className='profile-image' />
                <h2 className='username'>username</h2>
                <button className='viewProfile' onClick={() => { navigate("/connect") }}>back</button>

                <GrPrevious className='previous' size={50} />
                <GrNext className='next' size={50} />
            </div>
            <div className="user-info">
                <p><FcAbout size={100} style={{ padding: "10px" }} /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates nulla nisi dolore deserunt tenetur. Facilis animi quis rerum
                    autem doloribus molestias. Incidunt accusamus eligendi delectus voluptates facilis adipisci omnis quidem.</p>
                <p><BsGenderAmbiguous style={{ padding: "10px" }} size={25} color='skyblue' /> {props?.gender || "F"}  </p>
                <p><PiTagSimpleBold style={{ padding: "10px" }} size={25} color='skyblue' /> Music Lover, Anime </p>
                <p><CiLocationOn style={{ padding: "10px" }} size={25} color='skyblue' /> North Dakota</p>

            </div>


        </div>
    )
}

export default ProfileDetail