// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import Dishes from './Dishes';

const SectionBar = () => {
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
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Soup
            </div>
          </div>
        </div>

        <div style={{ padding: 5 }}>
          <div
            className={`btn btn-light `}
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Starters
            </div>
          </div>
        </div>

        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Rice
            </div>
          </div>
        </div>

        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Noodles
            </div>
          </div>
        </div>

        <div style={{ padding: 5 }}>
          <button
            onClick={onClick}
            className='btn btn-danger'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Poultry
            </div>
          </button>
        </div>

        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              SeaFood
            </div>
          </div>
        </div>

        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Meats
            </div>
          </div>
        </div>
        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Sushi
            </div>
          </div>
        </div>
        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Side
            </div>
          </div>
        </div>
        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Dessert
            </div>
          </div>
        </div>
        <div style={{ padding: 5 }}>
          <div
            className='btn btn-light'
            style={{
              height: 60,
              width: 80,
              borderRadius: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 17,
              }}
            >
              Add Section
            </div>
          </div>
        </div>
      </div>
      {active && <Dishes />}
    </div>
  );
};

export default SectionBar;
