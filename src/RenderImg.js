function RenderImages({ item }) {
  return (
    <div>
      <img src={item.download_url} className="img"  alt="img" />
    </div>
  );
}
export default RenderImages;
