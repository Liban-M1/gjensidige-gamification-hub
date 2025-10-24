export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: "forsikring" | "digital-trygghet" | "svindel"
}

export interface Tip {
  id: number
  title: string
  description: string
  category: "forsikring" | "digital-trygghet" | "svindel"
  icon: string
}

export interface Badge {
  id: number
  name: string
  description: string
  icon: string
  requirement: number
  earned: boolean
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Hva dekker en innboforsikring?",
    options: ["Kun møbler og elektronikk", "Alt løsøre i hjemmet ditt", "Bare verdisaker over 10 000 kr"],
    correctAnswer: 1,
    explanation:
      "En innboforsikring dekker alt løsøre i hjemmet ditt, inkludert møbler, klær, elektronikk og personlige eiendeler.",
    category: "forsikring",
  },
  {
    id: 2,
    question: "Hva er phishing?",
    options: ["En type datavirus", "Svindelforsøk via e-post eller meldinger", "En sikker måte å handle på nett"],
    correctAnswer: 1,
    explanation:
      "Phishing er når svindlere utgir seg for å være en pålitelig avsender for å lure deg til å oppgi personlig informasjon.",
    category: "svindel",
  },
  {
    id: 3,
    question: "Hvor ofte bør du endre passordene dine?",
    options: ["Hver måned", "Hvert år eller når det er mistanke om brudd", "Aldri, hvis det er sterkt nok"],
    correctAnswer: 1,
    explanation: "Du bør endre passord årlig eller umiddelbart hvis du mistenker at kontoen din er kompromittert.",
    category: "digital-trygghet",
  },
  {
    id: 4,
    question: "Hva er en egenandel?",
    options: ["Det du betaler selv ved skade", "Forsikringspremien din", "Maksbeløpet forsikringen dekker"],
    correctAnswer: 0,
    explanation: "Egenandel er det beløpet du må betale selv når du har en skade, før forsikringen dekker resten.",
    category: "forsikring",
  },
  {
    id: 5,
    question: "Hva bør du gjøre hvis du mottar en mistenkelig e-post?",
    options: [
      "Klikke på lenker for å sjekke om det er ekte",
      "Slette den og rapportere til IT-avdelingen",
      "Svare for å bekrefte identiteten",
    ],
    correctAnswer: 1,
    explanation:
      "Aldri klikk på lenker i mistenkelige e-poster. Slett dem og rapporter til IT eller sikkerhetsteamet ditt.",
    category: "svindel",
  },
]

export const tips: Tip[] = [
  {
    id: 1,
    title: "Bruk sterke passord",
    description:
      "Et sterkt passord inneholder minst 12 tegn, store og små bokstaver, tall og spesialtegn. Bruk en passordbehandler for å holde oversikt.",
    category: "digital-trygghet",
    icon: "🔐",
  },
  {
    id: 2,
    title: "Sjekk forsikringsbehovet ditt årlig",
    description:
      "Livssituasjonen din endrer seg. Gjennomgå forsikringene dine minst en gang i året for å sikre at du har riktig dekning.",
    category: "forsikring",
    icon: "📋",
  },
  {
    id: 3,
    title: "Vær skeptisk til uoppfordrede henvendelser",
    description:
      "Banker og forsikringsselskaper ber aldri om passord eller BankID over telefon eller e-post. Kontakt dem direkte hvis du er usikker.",
    category: "svindel",
    icon: "⚠️",
  },
  {
    id: 4,
    title: "Aktiver tofaktorautentisering",
    description:
      "Legg til et ekstra sikkerhetslag på kontoene dine ved å aktivere tofaktorautentisering (2FA) der det er mulig.",
    category: "digital-trygghet",
    icon: "🛡️",
  },
  {
    id: 5,
    title: "Forstå hva forsikringen dekker",
    description:
      "Les forsikringsvilkårene nøye. Vit hva som er inkludert, ekskludert, og hvilke egenandeler som gjelder.",
    category: "forsikring",
    icon: "📖",
  },
  {
    id: 6,
    title: "Hold programvare oppdatert",
    description:
      "Oppdater regelmessig operativsystemet, nettleseren og appene dine for å beskytte mot kjente sikkerhetshull.",
    category: "digital-trygghet",
    icon: "🔄",
  },
]

export const badges: Badge[] = [
  {
    id: 1,
    name: "Trygghetsmerke",
    description: "Fullført 5 quiz om digital trygghet",
    icon: "🛡️",
    requirement: 5,
    earned: false,
  },
  {
    id: 2,
    name: "Forsikringsguru",
    description: "Fullført 10 quiz om forsikring",
    icon: "🎓",
    requirement: 10,
    earned: false,
  },
  {
    id: 3,
    name: "Svindeldetektiv",
    description: "Fullført 5 quiz om svindel",
    icon: "🔍",
    requirement: 5,
    earned: false,
  },
  {
    id: 4,
    name: "Nybegynner",
    description: "Fullført din første quiz",
    icon: "⭐",
    requirement: 1,
    earned: false,
  },
  {
    id: 5,
    name: "Ekspert",
    description: "Oppnådd 1000 poeng",
    icon: "🏆",
    requirement: 1000,
    earned: false,
  },
]
