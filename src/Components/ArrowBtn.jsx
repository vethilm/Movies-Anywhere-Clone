import "./Row.css";

export function ArrowBtnRight(props) {
  return (
    <>
      <button onClick={props.onClick} className="arrowContainer cRight">
        <div className="arrow right"></div>
      </button>
    </>
  );
}

export function ArrowBtnLeft(props) {
  return (
    <>
      <button onClick={props.onClick} className="arrowContainer cLeft">
        <div className="arrow left"></div>
      </button>
    </>
  );
}
