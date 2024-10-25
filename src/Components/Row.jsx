import { useEffect } from "react";
import Thumbnail from "./Thumbnail";
import Set from "./Set";
import { ArrowBtnRight } from "./ArrowBtn";
import { ArrowBtnLeft } from "./ArrowBtn";
import "./Row.css";

function Row(props) {
  const moveRight = (event) => {
    event.target.parentElement.scrollLeft -= 1000;
  };
  const moveLeft = (event) => {
    event.target.parentElement.scrollLeft += 1000;
  };

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
              <ArrowBtnLeft onClick={moveLeft} />
              {props.items.map((item) => (
                <Thumbnail
                  key={item.title}
                  item={item}
                  src={item.src}
                  sale={item.sale}
                />
              ))}
              <ArrowBtnRight onClick={moveRight} />
            </div>
          </>
        )}
        {props.rowType == "set" && (
          <>
            <div className="scrollRow">
              <ArrowBtnLeft onClick={moveLeft} />
              {props.items.map((item) => (
                <Set
                  key={item.title}
                  item={item}
                  src={item.src}
                  sale={item.sale}
                />
              ))}
              <ArrowBtnRight onClick={moveRight} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Row;
