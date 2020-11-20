import React from 'react'


export default function ConvertToPPT() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form method="get" action="/flask/">
                        <label>Topic</label>
                        <input type="text" name="topic"></input>
                        <label>User</label>
                        <input type="text" name="user"></input>
                        <button type="submit" onClick={ () => {
                        alert("presentation can been made!")
                        }}>Submit</button>
                    </form>
                </div>
               
            </div>
            
        </div>
    )
}
