import React, { useState } from 'react'
import { Grid, ClickAwayListener, Breadcrumbs, Link, Typography } from "@material-ui/core"
import AppsIcon from '@material-ui/icons/Apps';
import ErrorIcon from '@material-ui/icons/Error';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import UserIcon from "./UserIcon"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function Header() {
    const [popup, setPopup] = useState(false)
    const [searchText, setSearchText] = useState('')

    const handlePopup = () => {
        setPopup(true)
    }

    const handleClickAway = () =>{
        setPopup(false)
    }

    const handleClick=(event)=> {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

    return (
        <div className="header">
            <Grid container direction="row" className="flexBase">
                <Grid xs={12} item container className="flexVertical">
                    <Grid xs={1} item>
                        <p className="companyName">ANAHA</p>
                    </Grid>
                    <Grid xs={3} item>
                        <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
                            <Link color="inherit" href="/" onClick={handleClick}>
                                Patient Profile
                            </Link>
                            <Typography color="textPrimary">Analytics</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid xs={5} item>
                        <div className="searchContainer">
                            <SearchIcon style={{opacity: "0.6", fontSize:"28px"}}/>
                            <input
                                className="input"
                                type="text"
                                placeholder="Search"
                                onChange={(e)=>setSearchText(e.target.value)}
                            />
                            {searchText ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
                        </div>
                    </Grid>
                    <Grid xs={3} item>
                        <div className="icons">
                            <ErrorIcon style={{ color: 'red' }}/>
                            <AppsIcon />
                            <NotificationsIcon />
                            <div className="flexCenter" style={{cursor:'pointer',}} onClick={handlePopup}>
                                <div style={{textAlign:'center', marginRight:"5px"}}>
                                    <div style={{width:'30px',height:'30px'}}>
                                        <img 
                                            src='media/teacher.jpg' 
                                            alt='img' 
                                            style={{width:'100%',height:'100%',borderRadius:'50%'}} 
                                        />
                                        {popup &&
                                            <ClickAwayListener onClickAway={handleClickAway}>
                                                <div>
                                                    <UserIcon 
                                                    />
                                                </div>
                                            </ClickAwayListener>
                                        }
                                    </div>
                                </div>
                                <p>Dr. Raquel</p>
                                {!popup ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
