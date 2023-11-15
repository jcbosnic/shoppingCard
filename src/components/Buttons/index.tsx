import { propsButtons } from "../../types/buttons";

const Buttons: React.FC<propsButtons> = ({ buttonName, buttonStyles }) => {
  return <button className={buttonStyles}>{buttonName}</button>;
};

export default Buttons;
