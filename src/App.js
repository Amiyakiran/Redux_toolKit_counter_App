import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    < >
     <div className='d-flex align-items-center justify-content-center flex-column w-100' style={{height:'100vh'}}>
        <div style={{backgroundColor:'white'}} className='border border-secondary p-5 rounded'>
          <h1 className='text-primary'>Counter Application</h1>
          <Counter/>
        </div>
     </div>
    </>
  );
}

export default App;
