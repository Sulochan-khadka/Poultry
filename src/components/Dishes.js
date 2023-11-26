import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dishes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/dishes')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  console.log('Data is : ', data);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [available, setAvailable] = useState('');
  const [price, setPrice] = useState('');
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState('');
  //   const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const id = data.length;
    const newDish = { id, title, description, available, price };

    fetch('http://localhost:8000/dishes', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newDish),
    })
      .then((res) => {
        alert('saved successfully');
        // navigate('/');
      })
      .catch((e) => {
        console.error(e);
      });
    setTitle('');
    setDescription('');
    setAvailable('');
    setPrice('');
  };
  const onEditHandler = (id) => {
    setEditId(id);
    setEdit(!edit);
    data.map((item) => {
      if (item.id === id) {
        setTitle(item.title);
        setDescription(item.description);
        setAvailable(item.available);
        setPrice(item.price);
      }
      return null; // Add a return statement to avoid returning an array
    });
  };
  const onDeleteHandler = (id) => {
    fetch(`http://localhost:8000/dishes/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      //   body: JSON.stringify(newDish),
    })
      .then((res) => {
        alert('deleted successfully');
        // navigate('/');
      })
      .catch((e) => {
        console.error(e);
      });
    setTitle('');
    setDescription('');
    setAvailable('');
    setPrice('');
  };
  const saveEditHandler = (editId) => {
    // e.preventDefault();
    // const id = data.length;
    const newDish = { title, description, available, price };
    // data.map((item) => {
    //   if (item.id === editId) {
    //     item.title = title;
    //     item.description = description;
    //     item.available = available;
    //     item.price = price;
    //   }
    //   return null; // Add a return statement to avoid returning an array
    // });

    fetch(`http://localhost:8000/dishes/${editId}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newDish),
    })
      .then((res) => {
        alert('saved successfully');
        // navigate('/');
      })
      .catch((e) => {
        console.error(e);
      });
    setTitle('');
    setDescription('');
    setAvailable('');
    setPrice('');
    setEdit(!edit);
  };
  const onClear = () => {
    setTitle('');
    setDescription('');
    setAvailable('');
    setPrice('');
  };
  const onPaste = () => {
    console.log('onPaste button');
  };
  const onRandomFill = () => {
    console.log('onRandom Fill');
  };
  return (
    <div>
      {!edit && (
        <div>
          <div
            style={{
              display: 'flex',
              border: '1px solid #ccc',
              height: '40px',
              width: '500px',
              padding: '0px',
              margin: '10px',
              backgroundColor: '#f0f0f0',
              justifyContent: 'left',
              alignItems: 'left',
              fontSize: '30px',
            }}
          >
            <b>POULTRY</b>
          </div>
          {data?.map((item) => (
            <div>
              <div
                style={{
                  //   display: 'flex',
                  border: '1px solid #ccc',
                  height: '22%',
                  width: '500px',
                  padding: '15px',
                  margin: '10px',
                  backgroundColor: '#d4d4d4',
                  justifyContent: 'left',
                  alignItems: 'left',
                }}
              >
                <div style={{ display: 'flex', fontSize: '23px' }}>
                  <div>
                    <b>{item?.title}</b>
                  </div>
                  <div
                    style={{
                      marginLeft: '22%',
                      color: 'blue',
                    }}
                  >
                    <b>
                      <i>({item?.available})</i>
                    </b>
                  </div>
                </div>
                <div style={{ fontSize: '12px' }}>{item?.description}</div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'right',
                    color: 'green',
                  }}
                >
                  <b>{item?.price}</b>
                </div>
              </div>
              {/* <div style={{ display: 'flex' }}> */}
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* <div> */}
                <button
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '10px',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                  onClick={() => {
                    onEditHandler(item.id);
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>EDIT</b>
                  </div>
                </button>
                <div
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '8px',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>UP</b>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '8px',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>DOWN</b>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '8px',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>MERGE</b>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '8px',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>COPY</b>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '8px',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>UNDO</b>
                  </div>
                </div>
                {/* </div> */}
                {/* <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'right',
          }}
        > */}
                <div
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '33%',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>SAVE</b>
                  </div>
                </div>
                {/* <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'right',
            }}
          > */}
                <button
                  style={{
                    border: '1px solid #fafa33',
                    height: '35px',
                    width: '35px',
                    padding: '3px',
                    marginLeft: '8px',
                    backgroundColor: '#fafa33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '8px',
                  }}
                  onClick={() => {
                    onDeleteHandler(item.id);
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>DELETE</b>
                  </div>
                  {/* </div> */}
                  {/* </div> */}
                </button>
              </div>
            </div>
          ))}
          {/* </div> */}
          <form onSubmit={submitHandler}>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: 101,
                  color: 'white',
                  marginLeft: '8px',
                  marginTop: '8px',
                }}
              >
                DISH NAME
              </div>
              <div style={{ marginLeft: '3%', marginTop: '8px' }}>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: 101,
                  color: 'white',
                  marginLeft: '8px',
                  marginTop: '8px',
                }}
              >
                DESCRIPTION
              </div>
              <div style={{ marginLeft: '3%', marginTop: '8px' }}>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: 101,
                  color: 'white',
                  marginLeft: '8px',
                  marginTop: '8px',
                }}
              >
                AVAILABLE
              </div>
              <div style={{ marginLeft: '3%', marginTop: '8px' }}>
                <input
                  value={available}
                  onChange={(e) => setAvailable(e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: 101,
                  color: 'white',
                  marginLeft: '8px',
                  marginTop: '8px',
                }}
              >
                PRICE
              </div>
              <div
                style={{
                  marginLeft: '3%',
                  marginTop: '8px',
                  marginBottom: '8px',
                }}
              >
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {/* <div> */}
              <button
                onClick={onClear}
                style={{
                  border: '1px solid #fafa33',
                  height: '35px',
                  width: '35px',
                  padding: '3px',
                  marginLeft: '24%',
                  backgroundColor: '#fafa33',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '7px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <b>CLEAR</b>
                </div>
              </button>
              <button
                onClick={onPaste}
                style={{
                  border: '1px solid #fafa33',
                  height: '35px',
                  width: '35px',
                  padding: '3px',
                  marginLeft: '8px',
                  backgroundColor: '#fafa33',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '7px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <b>PASTE</b>
                </div>
              </button>
              <button
                onClick={onRandomFill}
                style={{
                  border: '1px solid #fafa33',
                  height: '35px',
                  width: '35px',
                  padding: '3px',
                  marginLeft: '8px',
                  backgroundColor: '#fafa33',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '7px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <b>RANDOM FILL</b>
                </div>
              </button>
              {/* <div
            style={{
              border: '1px solid #fafa33',
              height: '35px',
              width: '35px',
              padding: '3px',
              marginLeft: '8px',
              backgroundColor: '#fafa33',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <b>MERGE</b>
            </div>
          </div> */}
              {/* <div
            style={{
              border: '1px solid #fafa33',
              height: '35px',
              width: '35px',
              padding: '3px',
              marginLeft: '8px',
              backgroundColor: '#fafa33',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <b>COPY</b>
            </div>
          </div> */}
              {/* <div
            style={{
              border: '1px solid #fafa33',
              height: '35px',
              width: '35px',
              padding: '3px',
              marginLeft: '8px',
              backgroundColor: '#fafa33',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <b>UNDO</b>
            </div>
          </div> */}
              {/* </div> */}
              {/* <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'right',
          }}
        > */}
              <button
                style={{
                  border: '1px solid #fafa33',
                  height: '35px',
                  width: '35px',
                  padding: '3px',
                  marginLeft: '43%',
                  backgroundColor: '#fafa33',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '14px',
                  cursor:
                    title.length &&
                    description.length &&
                    available.length &&
                    price.length
                      ? 'pointer'
                      : 'not-allowed',
                  pointerEvents:
                    title.length &&
                    description.length &&
                    available.length &&
                    price.length
                      ? 'auto'
                      : 'none',
                }}
                type='submit'
                disabled={
                  !title.length ||
                  !description.length ||
                  !available.length ||
                  !price.length
                }
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <b>ADD</b>
                </div>
              </button>

              {/* <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'right',
            }}
          > */}
              {/* <div
            style={{
              border: '1px solid #fafa33',
              height: '35px',
              width: '35px',
              padding: '3px',
              marginLeft: '8px',
              backgroundColor: '#fafa33',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '8px',
            }}
          > */}
              {/* <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <b>DELETE</b>
            </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </form>
        </div>
      )}
      {edit && editId && (
        <div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: 101,
                color: 'white',
                marginLeft: '8px',
                marginTop: '8px',
              }}
            >
              DISH NAME
            </div>
            <div style={{ marginLeft: '3%', marginTop: '8px' }}>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: 101,
                color: 'white',
                marginLeft: '8px',
                marginTop: '8px',
              }}
            >
              DESCRIPTION
            </div>
            <div style={{ marginLeft: '3%', marginTop: '8px' }}>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: 101,
                color: 'white',
                marginLeft: '8px',
                marginTop: '8px',
              }}
            >
              AVAILABLE
            </div>
            <div style={{ marginLeft: '3%', marginTop: '8px' }}>
              <input
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
              />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: 101,
                color: 'white',
                marginLeft: '8px',
                marginTop: '8px',
              }}
            >
              PRICE
            </div>
            <div
              style={{
                marginLeft: '3%',
                marginTop: '8px',
                marginBottom: '8px',
              }}
            >
              <input value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>
          <button
            style={{
              border: '1px solid #fafa33',
              height: '35px',
              width: '35px',
              padding: '3px',
              marginLeft: '33%',
              backgroundColor: '#fafa33',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '8px',
            }}
            onClick={() => {
              saveEditHandler(editId);
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <b>SAVE</b>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Dishes;
