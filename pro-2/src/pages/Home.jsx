import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  const viewPage1 = () => {
    history.push("/page1");
  };
  return (
    <div>
      <div>子应用2-首页</div>
      <div onClick={viewPage1}>访问page1</div>
    </div>
  );
};

export default Home;
