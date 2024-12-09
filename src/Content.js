import RenderImg from "./RenderImg";
import { useContext } from "react";
import DataContext from "./context/DataCantext";

function Content() {
  const { data, loading, fetchError } = useContext(DataContext);
  return (
    <div className="content">
      {loading && <h1 className="color-massage">loading...</h1>}
      {fetchError && (
        <h1 className="color-massage">
          Somthing went wrong , please try again...{" "}
        </h1>
      )}
      {!fetchError && data.map((item) => <RenderImg item={item} key={item.id}/>)}
    </div>
  );
}
export default Content;
