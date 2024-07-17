import shoe from '../assets/nike_shoe.png'
import img1 from '../assets/flipkart.png'
import img2 from '../assets/amazon.png'
const MainArticle = () => {
  return (
    <main className="article_container">
      <div className="article_header">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Access exclusive products, shop trending clothing and sneakers, 
            and stay up-to-date with the newest Member experiences
            Shop online in the Nike shopping app</p>

        <div className="article_btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="article_footer">
          <h3>Also Available on</h3>
          <div className="article_icons">
            <img src={img1} alt="Flipkart" />
            <img src={img2} alt="Amazon" />
          </div>
        </div>
      </div>
      <div className="article_img">
        <img src={shoe} alt="Nike Shoe" />
      </div>
    </main>
  );
};

export default MainArticle;
