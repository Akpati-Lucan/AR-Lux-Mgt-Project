import FlexPayNavBar from "./FlexPayNavBar";


export default function FlexPayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
       <FlexPayNavBar />

      {/* Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}