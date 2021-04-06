import "../../assets/css/PostOption.css";
const PostOption = ({ Icon, title, color,fontSize }) => {
  return (
    <div className="postOption">
      <Icon style={{ color ,fontSize}} />
      <h4> {title}</h4>
    </div>
  );
};

export default PostOption;
