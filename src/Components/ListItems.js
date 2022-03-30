import React from 'react'
import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props) {
    const items = props.tasks
    // console.log(items)
    // loop through each items and return an element
    const listItems = items.map(item => 
        {
           return <div className='list' key={item.key}>
               <p key={item.key} className="listItem">
                    <input type="text"
                        value={item.userInput} 
                        id={item.key}
                        onChange={(evt) => {
                            props.updateEdit(evt.target.value, item.key)
                        }}
                    />
                    <span>
                        <FontAwesomeIcon className='faicons' icon="fa-solid fa-trash" 
                            onClick={() => {props.deleteItem(item.key)}}
                        />
                    </span>
                </p>
                
           </div>;
        })
        // console.log(listItems)

    return(
        <div>
            {listItems} 
        </div>
    )
    
}

export default ListItems;