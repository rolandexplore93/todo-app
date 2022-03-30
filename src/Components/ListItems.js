import React from 'react'
import './ListItems.css'

function ListItems(props) {
    const items = props.tasks
    // console.log(items)
    // loop through each items and return an element
    const listItems = items.map(item => 
        {
           return <div className='list' key={item.key}>
               <p key={item.key} className="listItem">{item.userInput}</p>

           </div>;
        })
        // console.log(listItems)

    return(
        <div>
            {listItems} 
            ListItems
        </div>
    )
    
}

export default ListItems;