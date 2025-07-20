import { Github, Linkedin, Mail } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 mt-8 flex justify-center">
      <div className="flex gap-6 text-muted-foreground">
        <a
          href="mailto:dhaivick@gmail.com"
          className="hover:text-foreground transition"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/yourgithub" // replace with actual
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/dhaivick"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  )
}
