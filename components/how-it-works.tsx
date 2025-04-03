import { Card, CardContent } from "@/components/ui/card"
import { FileText, Upload, Database, FileJson } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Export Your Completed Declaration from ASYCUDA",
      description:
        "Log into ASYCUDA and export your completed declaration as an XML file. This file contains all the data needed to start your waiver.",
    },
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Upload Your ASYCUDA XML File",
      description:
        "Drop your ASYCUDA export file here. We extract the key fields needed to complete the official exemption form.",
    },
    {
      icon: <FileJson className="h-10 w-10 text-white" />,
      title: "Instant JSON Output",
      description:
        "You get a structured JSON with all required form fields, including declarant, importer, itemized duties, and more — ready to review, submit, or integrate.",
    },
    {
      icon: <Database className="h-10 w-10 text-white" />,
      title: "Auto-Fill the Official Waiver",
      description:
        "Use the JSON output to directly populate the waiver at customs.gov.ag/exemption-form — or hand it off to your broker, already pre-filled.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-navy-800 flex items-center justify-center mb-4 z-10 relative">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-20 w-full h-0.5 bg-gold-400 -z-10"></div>
                )}
              </div>
              <Card className="w-full h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-navy-900">
                    <span className="inline-block w-8 h-8 rounded-full bg-gold-100 text-navy-800 text-center mr-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-navy-700">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <p className="text-xl font-medium text-center px-6 py-3 bg-gold-100 rounded-full text-navy-800">
            Fast. Reliable. Built for the Antigua Customs process.
          </p>
        </div>
      </div>
    </section>
  )
}

