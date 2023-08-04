import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import React from "react";

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
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="/__env.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}
