import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.tsx'
import { Provider } from 'react-redux'
import store from './Redux/store.ts'
import { ThemeProvider } from './Provider/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
