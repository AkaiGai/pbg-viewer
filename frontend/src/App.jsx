import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AiSpacePage from './pages/AiSpacePage.jsx'
import DocumentsPage from './pages/DocumentsPage.jsx'
import EditPage from './pages/EditPage.jsx'
import ToolsPage from './pages/ToolsPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import { UserProvider } from './components/AuthContext.jsx'

const App = () => {

  return (
    <div className="min-h-screen">
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aispace" element={<AiSpacePage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </UserProvider>  
      </BrowserRouter>
    </div>
  );

};

export default App;