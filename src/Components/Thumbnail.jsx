import "./Thumbnail.css";

function Thumbnail(props) {
  return (
    <>
      <div className={props.tbn}>
        <img
          className="thumbImg"
          src="https://images.moviesanywhere.com/959ef1bcb5c9a8e31e384f8d20384efa/7b57798c-b6d2-4b46-8487-bc0ca59934ec.webp?h=375&resize=fit&w=250"
        ></img>
        {props.tbn === "tbn landscape" && (
          <>
            <div className="playBar"></div>
            <h2 className="movieTitle">Title</h2>
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
