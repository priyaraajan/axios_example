import axios from "axios";
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'



export default class Userlist extends Component {

    state={
        users:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
            this.setState({users: response.data})
        });
    }

    constructor(props) {
        super(props)
    
        this.props = {
            users : []

        }

}

    render() {
        return (
            <div>
        {this.state.users.map((users, id) => (
    // <p key={id}>id no: {users.id} title :{users.title} content:{users.url}</p>

    <Card key={id} border="dark" style={{ width: '18rem' , display:'inline-block' , margin: '20px'}}>
    <Card.Header>{users.title}</Card.Header>
    <Card.Body>
    <Card.Title></Card.Title>
    <Card.Img variant="top" src="https://via.placeholder.com/150" />
    <Card.Text>
    <p>{users.id}</p>
    {users.url}
    </Card.Text>
    </Card.Body>
    </Card>

    ))}
                  {/* <p> id:
                  {this.state.users.map(users=>users.id)}
                 </p> 

                 <p> title:
                  {this.state.users.map(users=>users.title)}
                 </p>

                 <p>content:
                  {this.state.users.map(users=>users.body)}
                 </p>  */}

   

            </div>
        )
    }

}
