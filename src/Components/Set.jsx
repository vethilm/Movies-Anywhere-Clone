import Thumbnail from "./Thumbnail";
import "./Set.css";

function Set(props) {
  return (
    <>
    <div className="set">
        <a className="set-box" href="">
        <Thumbnail tbn="tbn set-portrait" />
            <div className="set-side-container">
                <Thumbnail tbn="tbn set-side" />
                <Thumbnail tbn="tbn set-side" />
                <Thumbnail tbn="tbn set-side" />
            </div>
        
    </a>
    <h2 className="movieTitle">Title</h2>
    </div>
    
      
    </>
  );
}

export default Set;