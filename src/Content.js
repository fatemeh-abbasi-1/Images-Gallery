import RenderImg from "./RenderImg";
import { useContext } from "react";
import DataContext from "./context/DataCantext";

function Content() {
  const { items, loading, fetchError } = useContext(DataContext);
  return (
    <div className="content">
      {loading && <h1 className="color-massage">loading...</h1>}
      {fetchError && (
        <h1 className="color-massage">
          Somthing went wrong , please try again...{" "}
        </h1>
      )}
      {!fetchError && items.map((item) => <RenderImg item={item} />)}
    </div>
  );
}
export default Content;
