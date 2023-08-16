import './App.css';
import Create from './pages/Create';
import Note from './pages/Note';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';



const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
 

  return (
    <>
        <ThemeProvider theme={theme}>
            <Router>
              <Layout>
                      <Routes>
                        <Route path="/" element={<Note/>} />
                        <Route path="/create" element={<Create/>} />
                      </Routes>
              </Layout>
            </Router>
        </ThemeProvider>
    </>
  );
}

export default App;
