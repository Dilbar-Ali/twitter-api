import React from 'react'
import './Navbar.css';
import {Menubar} from 'primereact/menubar';
import { InputSwitch } from 'primereact/inputswitch';
const Navbar = () => {
const [value, setValue] = React.useState(false);
  return (
    <>
    <Menubar className='menu' end={<InputSwitch  checked={value} onChange={(e) => setValue(e.value)}/>} id='menu' start= { <i className="pi pi-twitter" style={{'fontSize': '2.3em','color':'white'}} >Twitter</i>} />
    </>
 

  )
}

export default Navbar