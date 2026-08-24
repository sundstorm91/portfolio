import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Stack } from './components/Stack/Stack';
import { Projects }from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Stack />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;