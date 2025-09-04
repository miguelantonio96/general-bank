export const HeaderSearch = () => {
  return (
    <div className="header__search-parent">
      <button className="header__search-close-btn">x</button>
      <div className="header__search-item">
        <input
          className="header__search-input"
          type="search"
          placeholder="Search Services"
        />
      </div>
    </div>
  );
};
