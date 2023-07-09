import "./DescriptionStep.css";
const DescriptionStep = (props) => {
  return (
    <div className="grid-item">
      <div className="img-container">
        <img className="project" src={props.path} />
      </div>
      <div className="information">
        <div className="contour">
          <h1 className={`name ${props.className ?? ""}`}>{props.name}</h1>
        </div>
        <p className="description">{props.children}</p>
      </div>
    </div>
  );
};

export default DescriptionStep;
