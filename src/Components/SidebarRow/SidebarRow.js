import './../../Styles/SidebarRow.css'
import { Avatar } from '@material-ui/core'

function SidebarRow({ src, Icon, title }) {
    return (
        <div class="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
