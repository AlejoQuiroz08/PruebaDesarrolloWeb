import axios from 'axios'
import './App.css'

axios.defaults.headers.post['Content-Type'] = 'application/json'
function App() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      user_info: {
        name: document.getElementById('name').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        experience: document.getElementById('experience').value,
        date_of_solicitation: document.getElementById('date_of_solicitation').value,
      },
      enterprise_info: {
        name: document.getElementById('nameE').value,
        recipient: document.getElementById('recipient').value,
        position: document.getElementById('position').value,
        vacant: document.getElementById('vacant').value,
        information: document.getElementById('information').value,
      },
    }
    const jsonString = JSON.stringify(data)
    try {
      const response  = await axios.post('https://prueba3-pofc.onrender.com/letter', jsonString)
      console.log(response.data);
      let letter = document.getElementById('showLetter')
      letter.ariaReadOnly = true
      letter.value = response.data.content
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id='name'/>
        <label htmlFor="lastName">Lastname:</label>
        <input type="text" id='lastName' />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="contact">Contact:</label>
        <input type="text" id="contact" />
        <label htmlFor="experience">Experience:</label>
        <input type="text" id="experience" />
        <label htmlFor="date_of_solicitation">Date of Solicitation:</label>
        <input type="date" id="date_of_solicitation" />
        <label htmlFor="nameE">Name Enterprise:</label>
        <input type="text" id='nameE'/>
        <label htmlFor="recipient">Recipient:</label>
        <input type="text" id="recipient" />
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" />
        <label htmlFor="vacant">Vacant:</label>
        <input type="text" id="vacant" />
        <label htmlFor="information">Information:</label>
        <input type="text" id="information" />
        <button type='submit'>Enviar</button>
      </form>
      <a href="https://prueba3-pofc.onrender.com/save-letter">Descargar archivo</a>
      <textarea readOnly name="" id="showLetter" cols={50} rows={10}></textarea>
    </>
  )
}

export default App