import profile_pic from "./assets/shrek.jpg"


function Card(){

    return(
        <div className="card" >
            <img className="card-image" src={profile_pic} alt=""></img>
            <h2 className="card-title">Leo Amorim</h2>
            <p className="card-text">Student trying to learn something new everyday.</p>
        </div>
    );
}

export default Card