function Header() {
    return (
      <div className="header">
        <h1>Mobile Phone</h1>
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <input type="search" name="" id="search" placeholder={'🔍 search'}/>
        </form>
      </div>
    );
  }
  export default Header;