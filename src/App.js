import { Route, Router, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import Register from './pages/Register/Register';
import CheckOutTemPlate from './templates/CheckOutTemplate/CheckOutTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { Suspense, lazy } from 'react';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import { history } from './index';

function App() {
  const CheckOutTemPlate = lazy(() => import('./templates/CheckOutTemplate/CheckOutTemplate'))
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <UserTemplate path='/register' exact Component={Register} />
        <UserTemplate path='/login' exact Component={Login}></UserTemplate>
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/detail/:id' exact Component={Detail}></HomeTemplate>
        <HomeTemplate path='/profile' exact Component={Profile} />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <CheckOutTemPlate path='/checkout/:id' exact Component={Checkout}></CheckOutTemPlate>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
