import { Box, IconButton, CssBaseline, Typography, Link } from '@mui/material';
import './App.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useMemo, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import profileImageDark from '@/assets/images/00002.png';
import profileImageLight from '@/assets/images/00003.png';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const myTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    const localStoragePreference = localStorage.getItem('color-schema');
    if (localStoragePreference !== undefined) {
      setDarkMode(localStoragePreference === 'dark');
      return;
    }

    const darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(darkMode);
  }, [isDarkMode]);

  const darkModeToggle = useMemo(() => {
    return (
      // @ts-expect-error "variant" prop is not recognized by IconButton
      <IconButton
        variant="text"
        aria-label='Toggle dark mode'
        style={{ position: 'absolute', top: 10, right: 10 }}
        onClick={() => {
          localStorage.setItem('color-schema', isDarkMode ? 'light' : 'dark');
          setDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    );
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box className="top-header" sx={{background: isDarkMode ? 'rgba(39, 39, 39, 0.187)': 'rgba(184, 184, 184, 0.187)'}}>
        <Box className="flex-container" sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          <Box sx={{ flex: 1, justifyContent: 'center', display: 'flex'}}>
            About
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h2" component="h3" sx={{ textAlign: 'center', fontFamily: 'Dancing Script', fontWeight: 700 }}>
              Magical Rocks
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            {darkModeToggle}
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: `url(${isDarkMode ? profileImageDark : profileImageLight}) no-repeat `, width: '100%', height: '100%', backgroundSize: 'cover' }}>
      </Box>
      <Box className="bottom-bar">
        <Typography variant="body2" sx={{ color: isDarkMode ? 'white' : 'black' }}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="https://privacy.magical.rocks">Contact</Link>
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default App;
