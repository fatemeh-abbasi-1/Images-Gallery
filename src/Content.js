import RenderImg from './RenderImg';

function Content({ items , loading}) {
  
  return (
    <div className="content">
      {loading && <h1>loading...</h1>}
     {items.map((item) => <RenderImg item={item}/>)}
    </div>
  );
}
export default Content;
