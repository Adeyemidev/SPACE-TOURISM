
import './App.css'
import { createBrowserRouter, 
  createRoutesFromElements,
   Route, 
   RouterProvider} from 'react-router-dom'
import { Root } from './Layout/Root';
import {Home} from './Pages/Home'
import { Destination } from './Pages/Destination';
import { Crew } from './Pages/Crew';
import { Technology } from './Pages/Technology';
import { Error } from './Pages/Error';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<>
       <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/destination' element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path='/technology' element={<Technology />} />
      <Route path='*' element={<Error />} />
     </Route>
    </>
    )
  );
  
    return (
      <>
        <RouterProvider router={router}>
          {router}
        </RouterProvider>
      </>
    
    
  )
}

export default App
