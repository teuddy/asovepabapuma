import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootNavigation from './src/navigation'
import { ToastProvider } from 'react-native-toast-notifications'
import './src/config/firebase'
// import { getUserByEmail } from './src/utils/makeDeveloperRole';


// getUserByEmail('teuddycr@gmail.com')


const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
       <ToastProvider>
          <RootNavigation/>
       </ToastProvider>
    </QueryClientProvider>
  );
};

export default App;
