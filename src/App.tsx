import { Routes, Route } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'
import BackgroundGrain from './components/BackgroundGrain'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Approach from './components/Approach'
import Experience from './components/Experience'
import Stack from './components/Stack'
import GitHubActivity from './components/GitHubActivity'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function HomePage({
  theme,
  toggleTheme,
}: {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}) {
  return (
    <div id="top">
      <BackgroundGrain />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <Approach />
        <Experience />
        <Stack />
        <GitHubActivity />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}