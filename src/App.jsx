import { Principal } from './paginas/Principal';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <ThemeToggle />
      <Principal />
    </ThemeProvider>
  );
}

export default App;
