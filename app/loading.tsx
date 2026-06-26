export default function Loading() {
  return (
    <main className="container mx-auto px-4 md:px-8 pt-6 pb-20 flex flex-col animate-pulse">
      {/* Hero skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="h-4 w-48 bg-neutral-300/60 rounded-full" />
          <div className="h-16 w-[80%] bg-neutral-300/60 rounded-2xl" />
          <div className="h-6 w-48 bg-neutral-300/40 rounded-xl" />
          <div className="h-4 w-full max-w-xl bg-neutral-300/30 rounded-lg" />
          <div className="h-4 w-[70%] max-w-xl bg-neutral-300/30 rounded-lg" />
          <div className="flex gap-4 mt-2">
            <div className="h-12 w-40 bg-neutral-300/50 rounded-2xl" />
            <div className="h-12 w-40 bg-neutral-300/40 rounded-2xl" />
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-[40px] bg-neutral-300/40" />
        </div>
      </div>

      {/* Projects skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/60 rounded-[32px] p-4 flex flex-col gap-4">
            <div className="aspect-video bg-neutral-300/40 rounded-2xl" />
            <div className="h-3 w-24 bg-neutral-300/40 rounded-full" />
            <div className="h-5 w-[60%] bg-neutral-300/50 rounded-lg" />
            <div className="h-3 w-full bg-neutral-300/30 rounded-lg" />
            <div className="flex gap-2 mt-2">
              <div className="h-6 w-16 bg-neutral-300/30 rounded-lg" />
              <div className="h-6 w-16 bg-neutral-300/30 rounded-lg" />
              <div className="h-6 w-16 bg-neutral-300/30 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
