import profileImg from './assets/profile.png';
import "./style.css";
export default function Me({ name, discription, image}){

    return(
        <div className="profile">
            <img className="profile__img" src={profileImg}></img>
            <h1 className="profile__name">{name}</h1>
            <p className="profile__description">{discription}</p>
        </div>
    )
}