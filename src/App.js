import './App.css';
import Button from './components/Button';
import { Sidebar } from './components/Sidebar';
import { Page } from './components/Page';


function App() {
  return (
    <div class='app'>
    <Page>
      <Button size="lg" color='primary' disabled/>
      <Button size='lg' color='default' />
      <Button color='danger'/>
    </Page>
      
    </div>
    
  );
}

export default App;
