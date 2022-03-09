import React from 'react'
import {Link, useParams} from 'react-router-dom'
import DashboardWrapper from './DashboardWrapper'
import {Button as div, List, ListItem} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from 'react-redux'
import {toggleMenu} from '../../redux/actions'
import {faCircleNotch,faHome, faImages, faNewspaper, faShekelSign,faTasks,faUserFriends,faUsers,faVideo} from '@fortawesome/free-solid-svg-icons'
import {Slide} from 'react-awesome-reveal';
import {BiSearchAlt } from 'react-icons/bi';
import {MdCall} from 'react-icons/md';
import {initialStateType} from '../../types'

const menus = [
  {to:'home',title:'Home', icon: faHome},
  {to:'users',title:'Users', icon: faUsers},
  {to:'todos',title:'Todos', icon: faTasks},
  {to:'albums',title:'Albums', icon: faVideo},
  {to:'photos',title:'Photos', icon: faImages},
  {to:'posts',title:'Posts', icon: faNewspaper}
] 

const Dashboard = ({children}:{children: any;}) => {

    const dispatch=useDispatch();
    const {menu} = useParams();

    const show= useSelector((state:initialStateType) =>{return state.isSidebarShow})

  return (
   <DashboardWrapper>
         <div className={`sidebar border-end  ${show && "show" || ""}`}>
                <div className="d-flex justify-content-between mb-5">
                    <FontAwesomeIcon className="iconLogo" icon={faShekelSign} />

                    <div className="toggle" onClick={() => toggleMenu(dispatch)} >
                        <FontAwesomeIcon icon={faCircleNotch} />
                    </div>
                </div>
                <div>
                    <p>General</p>
                    <List component="nav">
                        {menus.map((v, i) => <li>
                            <Slide delay={i * 30}>
                                <Link key={v.to} to={`/dashboard/${v.to}`}
                                    className={`${menu === v.to ? "active" : ""}`}>
                                    <ListItem button >
                                        <FontAwesomeIcon icon={v.icon} className="me-2" /> {v.title}
                                    </ListItem>
                                </Link>
                            </Slide>
                        </li>)}
                        </List>
                </div>
            </div>
            <div className="rightside">
                {/* <header className="d-flex justify-content-between">
                    <div className="search">
                        <BiSearchAlt />
                    </div>
                    <div className="text-end d-flex justify-content-center align-items-center">
                        <span></span>
                        <div className="others me-4"><MdCall /></div>
                        <div className="others"><FontAwesomeIcon icon={faUserFriends} /></div>
                        <a href="#" className="user"><img src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" alt="" /></a>
                    </div>
                </header> */}
                <div className="content">
                    {children}
                </div>
            </div>
    </DashboardWrapper>    
  )
}

export default Dashboard