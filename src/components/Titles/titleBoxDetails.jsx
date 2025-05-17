import "./title.css";

function TitleBoxDetails({title}) {
  return (
    <div className="content-text-1line">
      <h1>
        Box
        <span className="highlight-color-titles"> {title} </span>
      </h1>
    </div>
  );
}

export default TitleBoxDetails;
