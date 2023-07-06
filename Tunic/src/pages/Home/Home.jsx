import Fox from "../../components/fox/Fox";
import "./Home.css";
import "/src/assets/font/Trunic.otf";
export default function Home() {
  return (
    <div className="Home">
      <div className="header">
        <div className="Logo"></div>
        <div className="IconContainer">
          <img
            src="src/assets/img/tunicIcon.png"
            alt="icon"
            className="Icon"
          ></img>
        </div>
      </div>
      <div className="container">
        <div className="col intro">
          <div className="tableau">
          <h3>Game</h3>
          <table className="rounded-corners">
            <tbody>
            <tr>
              <td>Tunic</td>
              <td className="trunic">Secret Legend</td>
            </tr>
            <tr>
              <td className="trunic">Genre</td>
              <td>Action-Adventure</td>
            </tr>
            </tbody>
          </table>
          </div>
          <div className="Awards">
            <img src="src/assets/img/diceAward.png" alt="diceAward" style={{width:"200px", height:"auto"}}></img>
            <img src="src/assets/img/gameAwards.png" alt="gameAwards" style={{width:"400px", height:"auto", paddingTop:"30px"}}></img>
          </div>
        </div>
        <div className="col">
          <Fox />
        </div>
        <div className="col description">
          <h2>The Heir</h2>
          <span>____________</span>
          <p className="trunic" style={{ fontSize: "40px", fontWeight: "300" }}>
            the ruin seeker
          </p>
          <p>
            Armed with curiosity, this little fox <br />
            is ready to overcome the obstacles <br />
            and accomplish his destiny.
          </p>
        </div>
      </div>
    </div>
  );
}
