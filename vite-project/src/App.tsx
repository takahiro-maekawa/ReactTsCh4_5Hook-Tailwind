import './css/App.css'
import RankUpMagic from './RankUpMagic'
import {Suspense} from 'react';
import Loading from './rankUpMagic/loading/component/Loading'
import { QueryClient, QueryClientProvider } from 'react-query';

const cli = new QueryClient({
  defaultOptions:{
    queries:{
      suspense: true
    }
  }
})
function App() {

  return (
    <>
    <Suspense fallback={<Loading/>}>
      <QueryClientProvider client={cli}>
        <RankUpMagic />
      </QueryClientProvider>
    </Suspense>    
    </>
  )
}

export default App
