import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import config from './config';
import Contact from './pages/Contact';


const AppRouter = ()=>( 
   <div>
       <Switch>
           <Route component={Home} path={config.routes.home}  exact />
           <Route component={Portfolio} path={config.routes.portfolio}  exact />
           <Route component={Contact} path={config.routes.contact}  exact />
       </Switch>
   </div>
)

export default AppRouter;