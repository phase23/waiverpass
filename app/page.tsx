import { FileUpload } from "@/components/file-upload"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { WhyChoose } from "@/components/why-choose"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section with Image */}
      <section className="w-full bg-navy-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Hero Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/20 z-10"></div>
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="Customs officer using ASYCUDA system"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Hero Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 bg-navy-900">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Upload. Convert.
                  <br />
                  Waiver Done.
                </h1>
                <p className="text-lg text-gray-300 max-w-[600px]">
                  WaiverPass instantly extracts the key details from your ASYCUDA export file and auto-fills the Antigua
                  & Barbuda Customs Waiver form — so you can focus on clearance, not paperwork.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg rounded-md">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-900">
                Beat the rush. Submit your waiver in minutes — not days.
              </h2>
              <p className="text-lg text-navy-700 max-w-[600px]">
                Just upload your ASYCUDA XML file and we'll handle the rest. No more manual data entry or formatting
                headaches.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 bg-gold-400 rounded-tl-3xl opacity-70"></div>
              <div className="relative z-10 p-6">
                <FileUpload />
              </div>
              <div className="absolute -z-20 -bottom-10 -left-10 w-20 h-20 bg-navy-800 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Contact Section */}
      <Contact />
    </main>
  )
}

