import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Closed Space" title="Closed space" />
          <Button onClickHandler={handleClick} value="Open Space" title="Open space" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
