import "../../assets/css/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <WhatshotIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Latest News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Coronavirus updates", "Top news - 1200 readers")}
      {newsArticle("test updates", "Top news - 800 readers")}
      {newsArticle("test News 2", "Top news - 300 readers")}
    </div>
  );
};

export default Widgets;
