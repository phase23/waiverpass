import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Lightbulb } from "lucide-react"

export function Pricing() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-400 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-navy-800 rounded-full opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-navy-700">
              One-time processing fee: $20.00 USD per waiver. No subscriptions, no hidden costs.
            </p>
          </div>
          <Card className="w-full max-w-md shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-navy-800 to-navy-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-center text-3xl">
                <DollarSign className="h-8 w-8 mr-2" />
                $20.00 USD
              </CardTitle>
              <p className="text-white/80">per waiver</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4 rounded-md bg-gold-50 p-4 mb-4">
                <Lightbulb className="h-6 w-6 text-gold-600 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-base font-medium leading-none text-navy-800">Not sure it&apos;ll work?</p>
                  <p className="text-sm text-navy-600">
                    Send us your file — if it doesn&apos;t process, you don&apos;t pay.
                  </p>
                </div>
              </div>
              <p className="text-center text-lg font-medium text-navy-700">
                Just upload your ASYCUDA file — we handle the rest.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

