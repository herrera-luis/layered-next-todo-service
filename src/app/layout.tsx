import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'

export const metadata = {
  title: 'Todo App',
  description: 'Todo app service using layered architecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
