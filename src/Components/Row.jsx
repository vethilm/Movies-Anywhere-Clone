import Thumbnail from "./Thumbnail";
import Set from "./Set";
import "./Row.css";

function Row(props) {
  var list = props.items;
  console.log(props.items);
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
        {props.rowType == null && (
          <>
            <div className="scrollRow">
              {props.items.map((item) => (
                <Thumbnail
                  tbn={props.tbn}
                  key={item.title}
                  item={item}
                  src={item.src}
                />
              ))}
            </div>
          </>
        )}
        {props.rowType == "set" && (
          <>
            <div className="scrollRow">
              {props.items.map((item) => (
                <Set
                  tbn={props.tbn}
                  key={item.title}
                  item={item}
                  src={item.src}
                />
              ))}
            </div>
          </>
        )}

        {/* add scroll arrows */}
      </div>
    </>
  );
}

export default Row;
