import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from "axios"

class GHSearch extends Component {
  state = {
    search: '',
    items: []
  }

 performSearch = async () => {
    const results = await axios.get(`https://api.github.com/search/users?q=${this.state.search}`)
    this.setState({ items: results.data.items })
  }

  setValue = (event) => {
    this.setState({ search: event.target.value })
  }

  render() {
    let itemsDisplay = this.state.items.map(item => {
      return (
        <li>{item.login}</li>
      )
    })
  
  return (
    <>
      <Input 
      onChange={e => this.setValue(e)}
      type="text" 
      name="search" 
      placeholder="Input GH username"
      />
      <Button 
      name="search"
      id="search"
      onClick={this.performSearch}>
        Search
        </Button>
        <ul id="search-results">
          {itemsDisplay}
        </ul>
    </>
  )
}
}

export default GHSearch
