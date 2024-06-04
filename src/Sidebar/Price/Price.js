import Input from "../../components/Input";
import "./Price.css";
import "../../db/data";
const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={150}
          title="0 - 150DT"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={500}
          title="150DT - 500DT"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1500}
          title="500DT - 1500DT"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2000}
          title="Over 1500DT"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
