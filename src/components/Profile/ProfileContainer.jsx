import Profile from "./Profile";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useParams } from "react-router-dom";
import { getProfileInfo, getUserStatus, updateStatus } from './../../redux/profile-reducer';
import withAuthRedirect from './../../hoc/withAuthRedirect';

function ProfileContainer(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.profilePage.userProfile)
    const status = useSelector(state => state.profilePage.status)
    const id = useSelector(state => state.auth.userId)

    let params = useParams()
    let userId = (params.id ? params.id : id)

    useEffect(() => {
        dispatch(getProfileInfo(userId))
        dispatch(getUserStatus(userId))
    }, [userId])
    
    function updateUserStatus(status)
    {
        dispatch(updateStatus(status))
    }

    return (
        <Profile updateStatus = {updateUserStatus} status={status} state={state}></Profile>
    )
}

let ProfileContainerAuth = withAuthRedirect(ProfileContainer)

export default ProfileContainerAuth;