import React, { useState } from 'react';
import SectionBar from './SectionBar';

const MenuBar = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginTop: '1%' }}>
        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 130,
              width: 100,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 23,
                border: 'none',
              }}
            >
              Thai Menu
            </div>
          </div>
        </div>

        <div style={{ padding: 5 }}>
          <button
            onClick={onClick}
            className='btn btn-danger'
            style={{
              height: 130,
              width: 100,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 23,
              }}
            >
              Chinese Menu
            </div>
          </button>
        </div>
        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 130,
              width: 100,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 23,
              }}
            >
              Italian Menu
            </div>
          </div>
        </div>
        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 130,
              width: 100,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 23,
              }}
            >
              Add Menu
            </div>
          </div>
        </div>
      </div>
      {active && <SectionBar />}
    </div>
  );
};

export default MenuBar;
