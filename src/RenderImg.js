function RenderImages({ item }) {
  return (
    <div>
      <img src={item.download_url} className="img" key={item.id} />
    </div>
  );
}
export default RenderImages;
