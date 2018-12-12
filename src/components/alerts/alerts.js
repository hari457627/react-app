import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class Alert extends Component {
	constructor(props){
    super(props);
    console.log(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  } 
  toggle() {
    console.log('exec');
    this.setState({
      modal: true
    });
  }

  cancelModal() {
    this.setState({
      modal: false
    });
  }
		
  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>
          {this.props.title}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cancelModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Alert;