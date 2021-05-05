  
import React, { Component } from 'react'

class Search extends Component {
    
    handleChange = (e) => {
       this.props.search(e.target.value);
    }
   render() {
       return (
           <div>
               <input onChange={this.handleChange} name = "input"  type="text"/>
           </div>
       )
   }
}

export default Search