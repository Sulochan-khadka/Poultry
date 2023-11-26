import React from 'react';

const Navbar = () => {
  return (
    <div className='' style={{ display: 'flex' }}>
      <div style={{ marginLeft: '15%' }}>
        <div
          className='btn btn-light '
          style={{ borderRadius: '0', marginRight: 5 }}
        >
          Menus
        </div>
        <div
          className='btn btn-danger'
          style={{ borderRadius: '0', marginRight: 5 }}
        >
          Sections
        </div>
      </div>
      <div style={{ marginLeft: '26%' }}>
        <div
          className='btn btn-danger'
          style={{ borderRadius: '0', marginRight: 5 }}
        >
          Preview
        </div>
        <div
          className='btn btn-light'
          style={{ borderRadius: '0', marginRight: 5 }}
        >
          Print
        </div>
        <div
          className='btn btn-light'
          style={{ borderRadius: '0', marginRight: 5 }}
        >
          Settings
        </div>
      </div>
      <div className='' style={{ marginLeft: '22%' }}>
        <div className='btn btn-light' style={{ borderRadius: '0' }}>
          Profile
        </div>
      </div>
    </div>
  );
};

export default Navbar;
