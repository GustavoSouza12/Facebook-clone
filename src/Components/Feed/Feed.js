import "./../../Styles/Feed.css"

import StoryReel from './../StoryReel/StoryReel'
import MessageSender from './../MessageSender/MessageSender'
import Post from './../Post/Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            <Post 
            profilePic={'https://avatars3.githubusercontent.com/u/62048657?s=400&v=4'}
            message={"wow this works"}
            timestamp={'this ia a timesamp'}
            username={'GSTDEV'}
            image={'https://miro.medium.com/max/2560/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg'}
             />
            <Post 
            profilePic={'https://avatars3.githubusercontent.com/u/62048657?s=400&v=4'}
            message={"wow this works"}
            timestamp={'this ia a timesamp'}
            username={'GSTDEV'}
             /> 

        </div>
    )
}

export default Feed