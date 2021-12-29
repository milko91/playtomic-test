import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Login, Dashboard, Settings } from './modules/main-app/pages';
import { StoreProvider } from './modules/store';
import { PrivateRoute, NotFound } from './modules/security-management';

export const App: FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute redirectTo="/login" component={Home} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
