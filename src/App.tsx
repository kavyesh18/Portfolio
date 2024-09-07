import { createTheme, MantineProvider } from '@mantine/core';
import './App.css';
import './index.css';
import "@mantine/core/styles.css";
import HomePage from './Components/HomePage';
import { pdfjs } from 'react-pdf';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024px',
      '2xl': '1280px'
    }
  });

  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
