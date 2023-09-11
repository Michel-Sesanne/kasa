import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AppRoutes from './routes';
import { ListeLogementsProvider } from './components/ListeLogements/ListeLogements'

export default function App() {
  return (
    <ListeLogementsProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ListeLogementsProvider>
  );
}
