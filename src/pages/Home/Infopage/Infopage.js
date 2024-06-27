import "./Infopage.scss";

function Infopage() {
  return (
    <div className="info-page">
      <section className="info-page__section info-page__section--one">
        <h2>Feature 1</h2>
        <p>Learn about the amazing features of our website.</p>
        <img src="feature1.jpg" alt="Feature 1" />
      </section>
      <section className="info-page__section info-page__section--two">
        <h2>Feature 2</h2>
        <p>Explore how our website can help you achieve your goals.</p>
        <img src="feature2.jpg" alt="Feature 2" />
      </section>
      <section className="info-page__section info-page__section--three">
        <h2>Feature 3</h2>
        <p>Discover the tools and resources available to you.</p>
        <img src="feature3.jpg" alt="Feature 3" />
      </section>
      <section className="info-page__section info-page__section--four">
        <h2>Feature 4</h2>
        <p>See how our website makes your tasks easier.</p>
        <img src="feature4.jpg" alt="Feature 4" />
      </section>
    </div>
  );
}

export { Infopage };
