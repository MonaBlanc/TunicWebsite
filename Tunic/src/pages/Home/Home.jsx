import Fox from "../../components/fox/Fox";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      <div className="header">
        <div className="Logo"></div>
        <div className="IconContainer">
            <img src="src/assets/img/tunicIcon.png" alt="icon" className="Icon" ></img>
        </div>
      </div>
      <div className="container">
        <div className="col">
          <p>hello</p>
        </div>
        <div className="col">
          <Fox />
        </div>
        <div className="col">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
