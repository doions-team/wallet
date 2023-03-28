import React from 'react'

function MainBody() {
    const onClickhandler = (n) =>{
        console.log(n)

        switch(n)
        {
            case 'addmoney':
                return <AddMoney handleClick={handleClick} />

                case 'tranfermoney':
                    return <TransferMoney handleClick={handleClick} />
        }

        //add a switch case statement to render various screens
    }

  return (
      <>
    <div onClick={()=>onClickhandler('addmoney')}>Add Money</div>
    <div onClick={()=>onClickhandler('tranfermoney')}>Tranfer Money</div>
    </>
  )
}

export default MainBody