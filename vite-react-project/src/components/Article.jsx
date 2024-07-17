import udemy from "../assets/udemy.png";
import coursera from "../assets/coursera.png";
import yoga1 from "../assets/yoga1.jpeg";

const Article = () => {
  return (
    <main className="article container">
      <div className="article-content">
        <h1>INNER PEACE WITH YOGA </h1>
        <p>
          Yoga enhances mental clarity, reduces stress, and cultivates a sense
          of inner calm in the midst of life's challenges.
          Regular practice
          improves physical strength, flexibility, and balance, promoting
          overall health and well-being.
        </p>
        <div className="article-btn">
          <button>Join now</button>
          <button className="secondary-btn">Category</button>
        </div> 
        <div className="footer">
          <p>Available on</p>
          <div className="brand-icons">
            <img src={udemy} alt="udemy-logo" height="50px" />
            <img src={coursera} alt="coursera-logo" height="50px" />
          </div>
        </div>
      </div>
      <div className="article-img">
        <img src={yoga1} alt="lotus-pose" />
      </div>
    </main>
  );
};
export default Article;
