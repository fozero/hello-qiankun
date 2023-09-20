import { useHistory } from "react-router-dom";
const Page1 = () => {
  const history = useHistory();
  const viewHome = () => {
    history.push("/home");
  };
  return (
    <div>
      <div>子应用1-页面1</div>
      <div onClick={viewHome}>访问home首页</div>
    </div>
  );
};

export default Page1;
