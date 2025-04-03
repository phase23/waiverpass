import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WaiverPass - Antigua & Barbuda Customs Waiver Automation",
  description:
    "WaiverPass instantly extracts the key details from your ASYCUDA export file and auto-fills the Antigua & Barbuda Customs Waiver form.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="w-full py-4 px-4 md:px-6 border-b sticky top-0 bg-white z-50 shadow-sm">
            <div className="container flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-navy-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  W
                </div>
                <span className="font-bold text-xl text-navy-900">WaiverPass</span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-sm font-medium border-b-2 border-gold-500 text-navy-900">
                  Home
                </a>
                <a href="#" className="text-sm font-medium text-navy-700 hover:text-navy-900">
                  How it works
                </a>
                <a href="#" className="text-sm font-medium text-navy-700 hover:text-navy-900">
                  Services
                </a>
                <a href="#" className="text-sm font-medium text-navy-700 hover:text-navy-900">
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="hidden md:flex border-navy-800 text-navy-800">
                  Log in
                </Button>
                <Button size="sm" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  Sign up
                </Button>
              </div>
            </div>
          </header>
          {children}
          <footer className="w-full py-12 px-4 md:px-6 bg-navy-900 text-white">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-gold-500 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      W
                    </div>
                    <span className="font-bold text-xl">WaiverPass</span>
                  </div>
                  <p className="text-gray-400">Simplifying customs clearance in Antigua & Barbuda.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400">© 2024 WaiverPass. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682.124 1.161.124.849 0 1.682-.34 1.682-.34s2.239 3.17 7.34-1.49c1.107-1.264 1.978-2.65 1.978-4.808 0-5.533-4.477-10.017-10-10.017zm0 18.034c-4.41 0-7.983-3.573-7.983-7.983 0-4.41 3.573-7.983 7.983-7.983 4.41 0 7.983 3.573 7.983 7.983 0 4.41-3.573 7.983-7.983 7.983z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'