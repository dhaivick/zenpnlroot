'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 ">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 py-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Dhaivick 👋</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Full Stack Developer specializing in SaaS platforms, cloud infrastructure, and e-commerce integrations.
        </p>
        <div className="flex justify-center gap-4 pt-6">
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
        </div>
      </motion.section>

      {/* About Me */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-muted-foreground">
          I&apos;m a full stack engineer with 5+ years of experience building SaaS applications, shipping integrations,
          and scalable infrastructure on AWS. I&apos;ve worked with React, Node, MongoDB, and cloud services like
          Lambda, S3, CloudFront, and Beanstalk. I care about clean code, modular architecture, and performance.
        </p>
      </motion.section>

      {/* Projects Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <p className="text-muted-foreground">Personal projects coming soon...</p>
      </motion.section>

      {/* Blog Preview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold">Latest Blog Posts</h2>
        <p className="text-muted-foreground">Stay tuned for technical deep dives and build notes.</p>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center py-12"
      >
        <h2 className="text-xl font-semibold mb-4">Let’s collaborate or connect!</h2>
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </motion.section>
    </div>
  )
}
