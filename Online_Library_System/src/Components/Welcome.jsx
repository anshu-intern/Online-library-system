import "./Welcome.css";

function Welcome(){
    return(
    <article className="welcome">
        <div className="welcomeBox">
    <h2 className="welcomeHead">
        Welcome to Online Library System – Your Digital Gateway to Knowledge!
    </h2>
    <p className="welcomeMsg">
        We're thrilled to have you here! Whether you're a lifelong reader, a curious learner, or just browsing for your next favorite book, our online library offers a world of stories, facts, and ideas at your fingertips.
    </p>
    <p className="welcomeMsg">
        Explore thousands of titles across diverse genres, available anytime, anywhere.
    </p>
    <p className="welcomeGreet">Happy reading!</p>
    </div>
    </article>
    )
}

export default Welcome;