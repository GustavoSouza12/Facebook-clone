import './../../Styles/Sidebar.css'

import SidebarRow from '../SidebarRow/SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import  { ExpandMoreOutlined } from '@material-ui/icons/'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://avatars3.githubusercontent.com/u/62048657?s=460&u=8a5d6c9f11e1d288cc9e8c2465838b916a0c66f6&v=4' title='Gustavo' />            
            
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />    

            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
           
            <SidebarRow Icon={PeopleIcon} title="Friends"/>

            <SidebarRow Icon={ChatIcon} title="Messenger"/>  

            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/> 
                       
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>

            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

        </div>
    )
}

export default Sidebar
