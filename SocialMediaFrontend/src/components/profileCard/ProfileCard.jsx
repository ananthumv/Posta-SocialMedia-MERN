import React from 'react'
import classes from './profileCard.module.css'
import {Link} from 'react-router-dom'
import { capitalizeFirstLetter } from '../../util/capitalizeFirstLetter'
import {format} from 'timeago.js'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
  const {user} = useSelector((state) => state.auth)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.imgContainer}>
            <img src={`http://localhost:5000/images/${user?.profileImg}`} className={classes.profileUserImg}/>
          </div>
          <div className={classes.usernameAndCreatedAt}>
            <p className={classes.username}>{capitalizeFirstLetter(user.username)}</p>
            <p className={classes.createdAt}><span>Created </span> {format(user.createdAt)}</p>
          </div>
        </div>
        <hr />
        <div className={classes.bottom}>
          <p>Followers: <span>{user.followers.length}</span></p>
          <p>Followings: <span>{user.followings.length}</span></p>
        </div>
      </div>
        <Link style={{textDecoration: 'none'}} to={`/profileDetail/${user._id}`}>
          <h3 className={classes.myProfile}>Profile</h3>
        </Link>
    </div>
  )
}

export default ProfileCard