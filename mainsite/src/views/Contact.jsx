import React, { Component } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/contact.css';
import * as emailjs from 'emailjs-com'

class Contact extends Component {
  constructor(props) {
      super();
      this.state = {
          name: '',
          email: '',
          message: ''
      }
  }

  changeHandler = event => {
      event.preventDefault();

      this.setState({
          [event.target.name]: event.target.value
      })
  }

  sendMessage = event => {
      event.preventDefault();
      
      const { name, email, message } = this.state;

      let templateParams = {
        name: name,
        message: message,
        email: email,
       }

      let popup = document.getElementById('popUp');

       if(name && message && email) {
        emailjs.send(
          'gmail',
          'template_SPqTzvPP',
          templateParams,
          'user_ok070rGofhMku7T0N56rz'
        )
        .then((res) => {

            popup.style.opacity = '1';
            popup.innerHTML = 'Sent!'

            setTimeout(function(){ popup.style.opacity = '0' }, 3000)
            
          })
          .catch((err) => {
              console.error(err)
          })

          this.setState({ name: '', email: '', message: '' })
        }
        else {
          popup.style.opacity = '1';
          popup.innerHTML = 'Please fill out all fields.'

          setTimeout(function(){ popup.style.opacity = '0' }, 3000)
        }
}


  render() {
    return (
        <AbsoluteWrapper>
          <div className="contactBlock">
            <div id="popUp" style={{opacity: '0'}}>Sent!</div>
            <h5 className="projectsHeader">Contact</h5>
            <div className="emptyBorder"></div>
            <h6>Have a question or want to work together?</h6>
            <form onSubmit={this.sendMessage} className="contactForm">
              <input onChange={this.changeHandler} value={this.state.name} name="name" type="text" placeholder="Name"></input>
              <input onChange={this.changeHandler} value={this.state.email} name="email" type="text" placeholder="E-mail"></input>
              <textarea onChange={this.changeHandler} value={this.state.message} name="message" type="text" placeholder="Your message" rows="4" cols="50"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </AbsoluteWrapper>
    );
  }
}

export default Contact;
