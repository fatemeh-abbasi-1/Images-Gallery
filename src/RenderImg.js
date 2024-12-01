function RenderImages({ item }) {
  return (
    <div>
      <img src={item.download_url} key={item.id} className="img"></img>
    </div>
  );
}
export default RenderImages;
