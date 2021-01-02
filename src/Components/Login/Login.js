import { Button } from '@material-ui/core'
import './../../Styles/Login.css'

import {auth, provider } from './../../Firebase/firebase'
import { useStateValue } from '../../StateProvider/StateProvider'
import { actionTypes } from '../../Reducer/Reducer'


function Login() {

    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user)
        })
        .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt=""/>
                
                <img class="facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1200px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login