import './style/App.css';
import './style/header.css';
import './style/Footer.css';
import './style/Form.css';

import Header from './Header';
import Footer from './Footer';
import Form from './Form';

function App() {
  return (
    <div className="App">
     <Header/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
