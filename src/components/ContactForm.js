import { useState } from "react";

function ContactForm (){

    const [inputs, setInputs] = useState({username:'', useremail:'', subject:'', usermessage:''});
    const[inputMessage, setInputMessage] = useState( );

    const handleChange = (event) => {
      const name = event.target.name;

      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();

      if(inputs.username == '' || inputs.useremail == '' || inputs.subject == '' || inputs.usermessage == ''){
        setInputMessage('Please fill out this field');
        return;
      }

      console.log(inputs);

    }


    return(
    <div className="contact-form-wrap">
        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
            <div className="form-item">
                <input 
                type="text" 
                className="form-input"
                placeholder="Name" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
                 />
                 {inputs.username ? '' : <span className="input-field-massage">{inputMessage}</span>}
            </div>
            <div className="form-item">
                <input 
                type="email" 
                className="form-input" 
                placeholder="Email" 
                aria-describedby="emailHelp" 
                name="useremail" 
                value={inputs.useremail || ""} 
                onChange={handleChange} 
                />
                {inputs.useremail ? '' : <span className="input-field-massage" >{inputMessage}</span>}
                
            </div>
            <div className="form-item">
                <input type="text" 
                className="form-input" 
                placeholder="Subject" 
                name="subject" 
                value={inputs.subject || ""} 
                onChange={handleChange}   
                />
                {inputs.subject ? '' : <span className="input-field-massage">{inputMessage}</span>}
            </div>
            <div className="form-item">
                <textarea 
                className="form-input" 
                placeholder="Your Message"  
                rows="5" 
                name="usermessage" 
                value={inputs.message} 
                onChange={handleChange} >
                </textarea>
                {inputs.usermessage ? '' : <span className="input-field-massage">{inputMessage}</span>}
            </div>
            <button type="submit" className="naail-btn btn-fill">Seend Message</button>
        </form>
    </div>
    )
}

export default ContactForm;