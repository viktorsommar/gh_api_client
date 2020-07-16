import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input } from 'semantic-ui-react'

class GHSearch extends Component {
  state = {
    users: []
  }
  
  search = async (event) => {
    event.preventDefault()

    let response = await axios.get('/search/users', {
      params: { query: event.target.query.value }
    })

    this.setState({
      users: response.data.results
    })
  }

  render() {
    let users;
    this.state.users && (
      users = this.state.users.map(user => {
        return (
          <>
            <label>login:</label>
            <p>{user.login}</p>
          </>
        )
      })
    )
  

    return (
      <>
        <form onSubmit={this.search}>
        <Input type="text" name="search" placeholder="Input GH username"/>
        <Button type="submit">Search</Button>
        </form>
      </>
    )
  }
}

export default GHSearch
