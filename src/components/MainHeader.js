import React from 'react'

function MainHeader() {
  return (
    <div
    style={{
        maxWidth:'1080px',
        display:'block',
        margin:'auto',
        backgroundColor:'aqua',
        minHeight:"40px",
        textAlign:"center",
        fontWeight:"bold",
        paddingTop:'10px',
       
        
    }}
    >Wallet Bhare!
    {/*this will get replaced by a Balance Component later and it will fetch the balance usign the token and the user_id */}
    <span
    style ={{
        display:'flex',
        justifyContent:'right'
    }}
    
    >
        Rs 10000/-{/**it will become a varibale passing from the component */}
        </span></div>
  )
}

export default MainHeader