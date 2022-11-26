import React, { useEffect, useState } from 'react'
import './SidebarStyle.css'
import ProfileImg from '../assets/imgs/SidePaneProfileImage.png'
import { NavLink } from 'react-router-dom'
import { RiArrowRightSLine, RiCloseFill } from 'react-icons/ri'
import sidebarData from '../helper/Sidebar_data'
import { useSelector } from 'react-redux'
import { userInfo } from '../features/user/userSlice'
import { Spinner } from 'react-bootstrap'


const SideBar = () => {

    const [title, setTitle] = useState('Dashboard')
    const [index, setIndex] = useState('')
    const [name, setName] = useState('')
    const resp = useSelector(userInfo)

    useEffect(() => {
        if (resp['status'] === 'loaded') {
            const { data: { data }, status } = resp;
            const { Name, St_Id } = data
            setName(Name)
            setIndex(St_Id)
        }
    }, [resp])


    return (
        <aside className='sidebar'>
            <div className='close-sidebar-wrapper'>
                <RiCloseFill className='close-sidebar-btn' />
            </div>
            <div className="topsidebar">
                <div className="background-wrapper"></div>
                <div className="profile-wrapper">
                    <img src={ProfileImg} alt={'Profile'} />
                </div>

            </div>
            <div className="info-wrapper">
                {
                    resp['status'] === 'loading' ? <Spinner /> :
                        <>
                            <h5>{name}</h5>
                            <small>{index}</small>
                        </>
                }

            </div>
            <ul className='tab-list'>
                {sidebarData.map((e) => {
                    return <NavLink onClick={()=> setTitle(e.name)} key={e.id} to={e.path} className={'listItem'}
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
                            style={title === e.name ? { color: "#265b29" } : { color: "#fff" }}
                        />
                    </NavLink>
                })}

            </ul>
        </aside>
    )
}

export default SideBar