import { propsInputs } from "../../types/Inputs";

const Inputs: React.FC<propsInputs> = ({
  inputTypes,
  inputClass,
  inputHolder,
}) => {
  return (
    <>
      <input
        type={inputTypes}
        className={inputClass}
        placeholder={inputHolder}
      />
    </>
  );
};

export default Inputs;
