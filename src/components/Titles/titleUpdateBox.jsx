import "./title.css";

function TitleUpdateBox({title}) {
  return (
    <div className="content-text">
      <h1>
        Update {title}
        <span className="highlight-color-titles"> Box. </span>
      </h1>
    </div>
  );
}

export default TitleUpdateBox;
