import './App.css'
import ContactForm from './component/ContactForm/ContactForm'
import SearchBox from './component/SearchBar/SearchBar'

function App() {

  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm/>
        <SearchBox/>
      </div>
    </>
  )
}

export default App
