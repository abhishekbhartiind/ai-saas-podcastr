export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <main>
        <div>Left</div>
        {children}
        <div>Right</div>
      </main>
    </div>
  )
}
