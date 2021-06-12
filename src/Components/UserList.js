import React from 'react'
import {Card,ListGroup} from "react-bootstrap"
const UserList = ({user}) => {
    return (
        <div className="userliste">
           < Card style={{ width: '18rem' }}>
  <Card.Header>Hello</Card.Header>
  <ListGroup variant="flush">
  {user.map((el) => (
      <di className="user" key={el.id}>
    <ListGroup.Item>ID:{el.id} </ListGroup.Item>
    <ListGroup.Item>Name:{el.name}</ListGroup.Item>
    <ListGroup.Item>Username:{el.username}</ListGroup.Item>
    <ListGroup.Item>Email:{el.email}</ListGroup.Item>
    {/* <ListGroup.Item>Address:{el.address}</ListGroup.Item> */}
    <ListGroup.Item>Phone:{el.phone}</ListGroup.Item>
    <ListGroup.Item>Website:{el.website}</ListGroup.Item>
    </di>
    ))}
  </ListGroup>
</Card>
        </div>
    )
}

export default UserList
