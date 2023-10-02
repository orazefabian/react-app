import loading_icon from "../assets/loading.png";
import "../App.css";

const Loading = () => {
  return (
    <>
      <div className="container mt-5">
        <img className="loading-spinner" src={loading_icon} />
      </div>
    </>
  );
};

export default Loading;
