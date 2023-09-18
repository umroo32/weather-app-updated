import React from 'react'

const MenuCard = ({menu}) => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
            {menu.map((curElem)=>{
            const {id, name, category, Image, description, price} = curElem
            return (
                <div className='card-container col-3 float-start my-4 d-flex' key={id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number subtle card-circle'>{id}</span>
                    <span className='card-author subtle'>{category}</span>
                    <h2 style={{fontSize:'40px'}} className='card-title'>{name}</h2>
                    <span className='card-description subtle'>
                    {description}
                    </span><br/>
                    <span className='card-read'>{price} Rs.</span>
                </div>
                <img src={Image} alt='images' className='card-media' />
                <span className='card-tag subtle mx-auto btn-info btn my-2'>Order Now</span> 
            </div>
        </div>
            )
          })
         }
            </div>
        </div>
    </div>
         
    </>
  )
}

export default MenuCard