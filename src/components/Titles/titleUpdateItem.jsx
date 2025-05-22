import "./title.css";

function TitleUpdateItem({item}) {
  return (
    <div className="content-text">
      <h1>
        Let's Update <span className="highlight-color-titles">{item.name} </span>
      </h1>
    </div>
  );
}

export default TitleUpdateItem;
