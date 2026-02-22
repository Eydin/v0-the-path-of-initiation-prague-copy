export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xs tracking-[0.3em] text-primary">
              THE
            </span>
            <span className="font-serif text-sm tracking-[0.2em] text-primary">
              PATH OF
            </span>
            <span className="font-serif text-xs tracking-[0.3em] text-brown-light">
              INITIATION
            </span>
          </div>
          <p className="text-xs tracking-wider text-muted-foreground">
            Prague, Czech Republic
          </p>
          <div className="h-px w-16 bg-border" />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} The Path of Initiation Prague. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
