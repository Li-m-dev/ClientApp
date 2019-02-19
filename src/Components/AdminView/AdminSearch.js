import React from "react";

const AdminSearch = () => {
  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        onChange={e => this.props.customFunc(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default AdminSearch;
