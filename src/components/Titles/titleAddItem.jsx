import "./title.css";

function TitleAddItem({box}) {
  return (
    <div className="content-text">
      <h1>
        Let's Add The Magic <span className="highlight-color-titles">Item </span>
        To <span className="highlight-color-titles">{box.name} Box</span>
      </h1>
    </div>
  );
}

export default TitleAddItem;
