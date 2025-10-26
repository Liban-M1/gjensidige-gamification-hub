import { Phone, PhoneCall, Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    // Remove the full-width top border; we'll draw our own inside
    <footer className="bg-card text-card-foreground mt-auto">
      <div className="container mx-auto px-8 py-12 max-w-[1280px]">
        {/* Bold top line – dark, short of page width */}
        <div
          aria-hidden="true"
          className="h-[3px] bg-primary rounded-full max-w-[1160px] mx-auto mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Hva trenger du?</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Kundeservice</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Melde skade, tap eller sykdom</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Logg inn og endre avtaler</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Godt forberedt – tips og råd</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Om oss</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Om Gjensidige</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Jobbe hos oss</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Presse</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Investor</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">About us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Populære forsikringer</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Bilforsikring</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Reiseforsikring</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Innboforsikring</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Husforsikring</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Livsforsikring</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Barneforsikring</a></li>
              <li><a href="#" className="hover:underline hover:text-primary transition-colors">Alle forsikringer</a></li>
            </ul>
          </div>

          {/* Column 4 — Contact & social */}
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" /> 915 03 100
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <PhoneCall className="h-5 w-5 text-primary" /> Bli oppringt
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Instagram className="h-5 w-5 text-primary" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5 text-primary" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Facebook className="h-5 w-5 text-primary" /> Facebook
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground text-center md:text-left">
          <p>© 2025 Gjensidige Gamification Hub. Alle rettigheter forbeholdt.</p>
        </div>
      </div>
    </footer>
  )
}

