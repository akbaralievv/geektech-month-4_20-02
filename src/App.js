import './style.css'
import Text from './components/Text';
import Content from './components/content';
import Header from './components/Header';
import Footer from './components/Footer';
import Ul from './components/Ul';

function App() {
  const headerPath=['Home','About','News']
  const listText=['one','twoo','three','four']
  return (
    <div className="App">
      <Header paths={headerPath}/>
      <Content>
        <div className='container'>
          <Text/>
          <ul>
            <Ul text={listText}/>
          </ul>
        </div>
      </Content>
      <Footer paths={headerPath}/>
    </div>
  );
}

export default App;
