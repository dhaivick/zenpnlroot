'use client'

import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react' // icon
import { ModeToggle } from '../ui/mode-toggle'

export default function SiteHeader() {
  return (
    <header className="w-full border-b">
    <div className="flex items-center justify-between px-4 max-w-7xl mx-auto py-4">
        <Link href="/" className="text-lg font-bold tracking-wide">
        DHAIVICK
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/login" className="hover:underline">Login</Link>
        <ModeToggle />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
        <Sheet>
            <SheetTrigger className="p-2 rounded-md hover:bg-accent">
            <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="pt-10 px-6 space-y-6">
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/login" className="hover:underline">Login</Link>
            </SheetContent>
        </Sheet>
        </div>
    </div>
    </header>
  )
}
