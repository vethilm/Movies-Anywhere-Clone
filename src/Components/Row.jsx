import Thumbnail from "./Thumbnail";
import "./Row.css";

function Row(props) {
  var list = props.items;
  return (
    <>
      <div className="row">
        {props.header != null && (
          <>
            <div className="rowHeader">
              <h1 className="rowTitle">{props.header}</h1>
              <p className="subHeader seeAll">SEE ALL</p>
            </div>
          </>
        )}
        <div className="scrollRow">
          {props.items.map((item) => (
            <Thumbnail sale="9.99" tbn={props.tbn} key={item} />
          ))}
        </div>

        {/* add scroll arrows */}
      </div>
    </>
  );
}

export default Row;
