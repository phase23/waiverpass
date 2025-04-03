import { Card, CardContent } from "@/components/ui/card"
import { MapPin, FileText, FileJson, Shield, Quote } from "lucide-react"

export function WhyChoose() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-navy-800" />,
      title: "Purpose-Built for Antigua",
      description: "Designed specifically for the Customs Exemption workflow in Antigua & Barbuda.",
    },
    {
      icon: <FileText className="h-8 w-8 text-navy-800" />,
      title: "No Manual Entry",
      description:
        "Skip the retyping. We auto-extract key fields from ASYCUDA XML including CIF values, duties, and concessionaire info.",
    },
    {
      icon: <FileJson className="h-8 w-8 text-navy-800" />,
      title: "Form-Ready JSON",
      description: "Output matches the format of the government form — no guessing, no gaps.",
    },
    {
      icon: <Shield className="h-8 w-8 text-navy-800" />,
      title: "Secure & Fast",
      description: "All processing happens in real-time with strict data handling protocols.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-32 h-32 bg-gold-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-navy-800 rounded-full opacity-20"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
            Why Choose WaiverPass
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gold-100 p-3 rounded-lg">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-900">{feature.title}</h3>
                    <p className="text-navy-700">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-0 shadow-lg bg-gradient-to-r from-gold-50 to-gold-100 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <Quote className="h-12 w-12 text-navy-800 mt-1" />
              <div>
                <p className="text-xl font-medium italic mb-4 text-navy-800">
                  "WaiverPass shaved an hour off every submission — game changer."
                </p>
                <p className="text-lg text-navy-700 font-semibold">— J. George, Broker</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

