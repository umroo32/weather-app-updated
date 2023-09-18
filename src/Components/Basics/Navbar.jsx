import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <nav className='navbar justify-content-center'>
    <div className='btn-group'>
    {
        menuList.map((data,index)=>{
            return(
                <button key={index} className='btn-group__item' onClick={()=>filterItem(data)}>{data}</button>
                   )
        })
    }
       

    </div>
</nav>
  )
}

export default Navbar