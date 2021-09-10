import React,{ useState } from 'react';

function Counter (props){
    
    function decrement() {
        if (props.count!=0)
        {
            props.setCount(props.count-1)
        }
        else{
            alert("you cant decrement than zero")
        }
    }
    return(
        <div className="section">
            <div className="main">
                <div className="counter">
                    <span>{props.count}</span>

                </div>
                <div className="assests">
                   
                        <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
                     
                   
                        <button onClick={decrement}>Decrement</button>

                    

                </div>

                <div className="reset">
                    <button onClick={()=>props.setCount(0)}>Reset</button>
                </div>

            </div>

        </div>
        )
}

export default Counter;