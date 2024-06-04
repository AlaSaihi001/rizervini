import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">State</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="Kasserine"
          title="Kasserine"
          name="test1"
          color="Kasserine"
        />

        <Input
          handleChange={handleChange}
          value="Tunis"
          title="Tunis"
          name="test1"
          color="Tunis"
        />

        <Input
          handleChange={handleChange}
          value="Sousse"
          title="Sousse"
          name="test1"
          color="Sousse"
        />
      </div>
    </>
  );
};

export default Colors;
