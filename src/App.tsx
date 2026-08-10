import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { RootLayout } from './app/layouts/RootLayout';
import Home from './app/routes/Home';
import Projects from './app/routes/Projects';
import { queryClient } from './shared/lib/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="portfolio" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
