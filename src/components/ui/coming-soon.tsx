// components/ui/ComingSoon.tsx
export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-lg">Coming soon...</p>
    </div>
  )
}
