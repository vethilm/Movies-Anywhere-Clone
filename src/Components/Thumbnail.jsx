import "./Thumbnail.css";

function Thumbnail(props) {
  // const imgSrc = "\x22" + props.item.src + "\x22";
  return (
    <>
      <div className={props.tbn}>
        <img className="thumbImg" src={props.src}></img>
        {props.tbn === "tbn landscape" && (
          <>
            <div className="playBar"></div>
            <h2 className="movieTitle">{props.item.title}</h2>
          </>
        )}
        {props.sale != null && (
          <>
            <p className="saleText">
              <span className="saleHighlight">Sale </span>
              from ${props.sale}
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Thumbnail;
