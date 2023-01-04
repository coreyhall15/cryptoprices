import{
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import App from './App';
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
import { priceLoader } from './Loader';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path='/' 
            element={<App/>}
        >
             <Route
                 path=''
                    element={<Main/>}
             />
                <Route
                    path='currencies'
                    element={<Currencies/>}
                />
                    <Route
                        path='price/:symbol'
                        element={<Price/>}
                        loader={priceLoader}
                     />
        </Route>
    )
);

export default router;