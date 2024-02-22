import Thumbnail from "./Thumbnail";
import "./Set.css";

function Set(props) {
  return (
    <>
      <div className="set">
        <a className="set-box" href="">
          <Thumbnail tbn="tbn set-portrait" src={props.src} />
          <div className="set-side-container">
            <Thumbnail tbn="tbn set-side owned" />
            <Thumbnail tbn="tbn set-side" />
            <Thumbnail tbn="tbn set-side" />
          </div>
        </a>
        <h2 className="movieTitle">{props.item.title}</h2>
        <p className="subTitle">1 OF 4</p>
      </div>
    </>
  );
}

export default Set;
