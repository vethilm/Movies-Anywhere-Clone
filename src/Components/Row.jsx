import Thumbnail from "./Thumbnail";
import Set from "./Set";
import { ArrowBtnRight } from "./ArrowBtn";
import "./Row.css";

function Row(props) {
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
                  sale={item.sale}
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
                  sale={item.sale}
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
