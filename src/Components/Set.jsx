import Thumbnail from "./Thumbnail";
import "./Set.css";

function Set(props) {
  return (
    <>
      <div className="set">
        <a className="set-box" href="">
          <Thumbnail tbn="tbn set-portrait" src={props.src} />
          <div className="set-side-container">
            <Thumbnail tbn="set-side owned" src={props.src} />
            <Thumbnail tbn="set-side" src={props.src} />
            <Thumbnail tbn="set-side" src={props.src} />
          </div>
        </a>
        <h2 className="movieTitle">{props.item.title}</h2>
        <p className="subTitle">1 OF 4</p>
      </div>
    </>
  );
}

export default Set;
