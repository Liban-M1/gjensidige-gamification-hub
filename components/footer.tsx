export function Footer() {
  return (
    <footer className="border-t border-border bg-primary/50 backdrop-blur mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-primary-foreground">© 2025 Gjensidige Gamification Hub</p>
            <p className="text-xs text-muted-foreground mt-1">Lær forsikring og digital trygghet på en morsom måte</p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-secondary transition-colors hover:underline decoration-2 underline-offset-4"
            >
              Om oss
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors hover:underline decoration-2 underline-offset-4"
            >
              Personvern
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors hover:underline decoration-2 underline-offset-4"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
