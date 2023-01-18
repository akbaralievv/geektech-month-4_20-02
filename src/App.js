import './style.css'
import Text from './components/Text';
import Content from './components/content';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const headerPath=['Home','About','News']
  return (
    <div className="App">
      <Header paths={headerPath}/>
      <Content>
        <div className='container'>
          <Text/>
        </div>
      </Content>
      <Footer paths={headerPath}/>
    </div>
  );
}

export default App;
