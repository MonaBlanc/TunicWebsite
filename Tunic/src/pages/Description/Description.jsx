import { Slide } from "react-awesome-reveal";
import DescriptionStep from "../../components/DescriptionStep/DescriptionStep";
import "./Description.css";

const Description = () => {
  return (
    <div className="SectionDescription">
      <div className="quinconce-grid">
        <Slide className="slider" direction="right">
          <DescriptionStep
            className="right"
            name="BE COURAGEOUS, LITTLE ONE!"
            path="/src/assets/img/battle.png"
          >
            Dive into varied, technical combat. Dodge, block, parry, and strike!
            Learn how to conquer a wide cast of monsters, big and small — and
            discover useful new items to help you on your way.
          </DescriptionStep>
        </Slide>
        <Slide className="slider" direction="left">
          <DescriptionStep
            className="left"
            name="A RUINED LAND..."
            path="/src/assets/img/mapTunic.png"
          >
            During your travels, you’ll reconstruct the game’s Instruction
            Manual. Page by page, you’ll reveal maps, tips, special techniques,
            and the deepest of secrets. If you find every last one, maybe
            something good will happen...
          </DescriptionStep>
        </Slide>
        <Slide className="slider" direction="right">
          <DescriptionStep
            className="right trunic"
            name="... Full of secrets"
            path="/src/assets/img/gate.png"
          >
            Stories say that a great treasure is hidden somewhere in this land.
            Perhaps it lies beyond the golden door? Or somewhere deep beneath
            the earth?
          </DescriptionStep>
        </Slide>
      </div>
    </div>
  );
};

export default Description;
