import "./Infopage.scss";

function Infopage() {
  return (
    <div className="info-page">
      <h2>Ad Page</h2>
      <form className="info-page__form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { Infopage };
