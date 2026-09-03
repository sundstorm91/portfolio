import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Stack } from './components/Stack/Stack';
import { Projects }from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import './App.css';
import { useLanguage } from './context/LanguageContext';


function App() {
  const {lang, toggleLang} = useLanguage()

  return (
    <div className="app">
      <Header lang={lang} toggleLang={toggleLang} />
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