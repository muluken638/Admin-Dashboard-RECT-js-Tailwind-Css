import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Dashboard from './components/pages/Dashboard';
import JobTable from './components/Tables/JobTable';
import DumpRuns from './components/pages/DumpRuns';
import ProductList from './components/pages/ProductList';
import SalesReport from './components/pages/SalesReport';
import ProductsReport from './components/pages/ProductsReport';
import UserTables from './components/pages/UserTable';
import ViewOrders from './components/pages/ViewOrders';
import ViewReturns from './components/pages/ViewReturns';
import SettingsPage from './components/pages/SettingsPage';
import ProfilePage from './components/pages/ProfilePage';
import CreateNewUser from './components/pages/CreateNewUser';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="job" element={<JobTable />} />
          <Route path="dump-runs" element={<DumpRuns />} />
          <Route path="/product-management/view" element={<ProductList />} />
          <Route path="/reports/sales" element={<SalesReport />} />
          <Route path="/reports/products" element={<ProductsReport />} />
          <Route path="/user-management/view" element={<UserTables />} />
          <Route path="/order-management/view" element={<ViewOrders />} />
          <Route path="/order-management/returns" element={<ViewReturns />} />
          <Route path='/settings' element={<SettingsPage/>}/>
          <Route path='/profile-settings' element={<ProfilePage/>}/>

          <Route path='/user-management/create' element={<CreateNewUser/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
