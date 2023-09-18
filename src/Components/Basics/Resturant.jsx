import React, { useState } from 'react'
import './style.css'
import Menu from '../MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const UniqueList =[ ...new Set(Menu.map((curElem)=>{
    return curElem.category
})
),"All"
]

const Resturant = () => {
    const [menu, setMenu] = useState(Menu)
    const [MenuList, setmenuList ]=useState(UniqueList)
    const filterItem = (category) =>{
        if(category === "All"){
           setMenu(Menu)
           return; 
        }
        const updateList = Menu.filter((curElement) =>{
            return curElement.category === category
        })
        setMenu(updateList)
        console.log(updateList)
    }
  return (
    <>
       <Navbar menuList={MenuList} filterItem = {filterItem}/>
      <MenuCard menu={menu}/> 
    </>
  )
}

export default Resturant