import React, { useState } from 'react'
import './SidebarStyle.css'
import ProfileImg from '../assets/imgs/SidePaneProfileImage.png'
import { NavLink } from 'react-router-dom'
import { RiArrowRightSLine,RiCloseFill } from 'react-icons/ri'
import sidebarData from '../helper/Sidebar_data'


const SideBar = () => {
    const [title, setTitle] = useState('Dashboard')
    return (
        <aside className='sidebar'>
            <div className='close-sidebar-wrapper'>
                <RiCloseFill className='close-sidebar-btn'/>
            </div>
            <div className="topsidebar">
                <div className="background-wrapper"></div>
                <div className="profile-wrapper">
                    <img src={ProfileImg} alt={'Profile'} />
                </div>
            </div>
            <ul className='tab-list'>
                {sidebarData.map((e) => {
                    return <NavLink to={e.path} className={'listItem'}
                        style={
                            title === e.name
                                ? { boxShadow: "1px 1px 3px #265b2998", color: "#265b29", }
                                : {}
                        }
                    >

                        <p>
                            <e.icon />
                           <span>
                             {e.name}
                            </span>
                        </p>

                        <RiArrowRightSLine
                            style={'Dashboard' === e.name ? { color: "#265b29" } : { color: "#fff" }}
                        />
                    </NavLink>
                })}

            </ul>
        </aside>
    )
}

export default SideBar