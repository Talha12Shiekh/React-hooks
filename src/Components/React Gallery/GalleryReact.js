import React, { useState } from 'react';
import Menu from './Menu';

const GalleryReact = () => {

  const allCatValues = [...new Set(Menu.map(element => element.category)),"all"];
  console.log(allCatValues);
  const [items, setitems] = useState(Menu);
  const [button,setbutton] = useState(allCatValues);
  

  const FilterFunction = (catgory) => {

    if (catgory === "all") {
      setitems(Menu);
      return;
    }

    const filteredItems = Menu.filter((element) => {
      return element.category === catgory;
    });

    setitems(filteredItems);
  }

  return (
    <>
      <h1 className='text-center my-3'>Order Your favourite Dish now</h1>
      <hr />
      <div className="d-flex justify-content-around">
      {
        button.map((element) => {
         return <button key={element} className="btn btn-warning" onClick={() => FilterFunction(element)}>{element}</button>
        })
      }
      </div>
      <div className="container">
        <div className="row d-flex justify-content-evenly my-5" style={{ flexWrap: 'wrap' }}>

          {
            items.map((element) => {
              const { id, image, name, price, description, category } = element;
              return <div className="col-md-3" key={id}>
                <div className="card d-flex justify-content-between my-2" style={{ flexDirection: 'column' }}>
                  <div className="img-fluid">
                    <img src={image} alt={name} style={{ height: '19vh', width: '100%' }} />
                  </div>
                  <div className="card-body d-flex" style={{ flexDirection: 'column' }}>
                    <h5 className="card-title text-uppercase">{name}</h5>
                    <h4 className="card-title">Price : {price}</h4>
                    <p className="card-text">{description}</p>
                    <button href="#" className="btn btn-info"> Category: {category}</button>
                  </div>
                </div>
              </div>
            })
          }


        </div>
      </div>
    </>
  )
}

export default GalleryReact
