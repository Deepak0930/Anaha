import React from 'react'

export default function UserIcon(props) {
    return (
        <div style={{position:'absolute',height:'130px',width:'250px',top:'70px',right:'15px',background:'white',boxShadow:'0 0 3px 0',padding:'10px', borderRadius:"15px"}}>
            <div className='flex' style={{marginBottom:'10px'}}>
                <img 
                    src='media/teacher.jpg' 
                    alt='avatar' 
                    style={{height:'100px',width:'100px',marginRight:'20px'}} 
                />
                <div style={{display:"block", marginRight:"30px"}}>
                    <p className="profileData">Dr. Raquel</p>
                </div>
            </div>
            <div style={{paddingLeft:'0', height:'1px', background:'#E4E3E3'}}></div>
            <div className='flex' style={{padding:"5px"}}>
                <p className='userIconText'>Change Password</p>
                <p className='userIconText' style={{flex:'auto'}}>Logout</p>
            </div>
        </div>
    )
}
