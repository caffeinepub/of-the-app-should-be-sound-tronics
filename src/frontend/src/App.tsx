import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import LandingPage from './pages/LandingPage';
import InquiriesPage from './pages/InquiriesPage';
import { createRouter, RouterProvider, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteHeader from './components/site/SiteHeader';
import SiteFooter from './components/site/SiteFooter';
import { Outlet } from '@tanstack/react-router';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const inquiriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/inquiries',
  component: InquiriesPage,
});

const routeTree = rootRoute.addChildren([indexRoute, inquiriesRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
