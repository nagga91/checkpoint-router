import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default class Modal1 extends Component { 
    constructor(){
        super()
        this.state={
            show:false

        }
    }
     handleSubmit = () => this.setState({show:!this.state.show});
    render() {
    return (
        <>
        <Button variant="primary" onClick={()=> this.handleSubmit()}>
          Launch demo modal
        </Button>
  
        <Modal show={this.state.show} onHide={()=> this.handleSubmit()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.handleSubmit()}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> this.handleSubmit()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      
    )
  }
}
