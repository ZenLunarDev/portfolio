import { Outlet } from 'react-router-dom';
import { theme } from '../../config/theme';

export function RootLayout() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Outlet />
    </div>
  );
}
