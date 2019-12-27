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
          'null template',
          templateParams,
          'null user'
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
            <form onSubmit={this.sendMessage} className="contactForm">
              <input onChange={this.changeHandler} value={this.state.name} name="name" type="text" placeholder="Name"></input>
              <input onChange={this.changeHandler} value={this.state.email} name="email" type="text" placeholder="E-mail"></input>
              <textarea onChange={this.changeHandler} value={this.state.message} name="message" type="text" placeholder="Your message" rows="4" cols="50"></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
            <div className="contactInfo">
              <h2>LET'S GET IN TOUCH</h2>
              <p>
                Want to discuss your ideas for a 
                new project? We'd love to connect 
                with you. Just fill out the form 
                aside or contact us via the details 
                below.
              </p>
              <h2>CONTACT DETAILS</h2>
              <p>
                100 King Rail Drive<br/> 
                Lynnfield MA<br/> 
                01940 United States<br/>
              </p>
              <div className="iconContact">
                <i className="far fa-envelope"></i>
                <a href="bobv@graphlex.com">bobv@graphlex.com</a>
              </div>
              <div className="iconContact">
                <i className="fas fa-phone"></i>
                <h3>
                  978.758.6848
                </h3>
              </div>
            </div>
          </div>
        </AbsoluteWrapper>
    );
  }
}

export default Contact;
