import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { CursorFX } from "./components/CursorFX";
import { Home } from "./pages/Home";
import { Terminal } from "./pages/Terminal";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { NotFound } from "./pages/NotFound";
import { Honeypot } from "./pages/Honeypot";
import { ThemeProvider } from "./lib/theme";
import { isHoneypotPath } from "./lib/honeypot";
import { useIsMobile } from "./lib/useIsMobile";

function CatchAll() {
  const location = useLocation();
  return isHoneypotPath(location.pathname) ? <Honeypot /> : <NotFound />;
}

function AppShell() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isTerminal = location.pathname === "/" && !isMobile;

  if (isTerminal) {
    return (
      <>
        <CursorFX />
        <Terminal />
      </>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface-0 text-content-primary">
      <CursorFX />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-content"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/site" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<CatchAll />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
