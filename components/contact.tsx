import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">Contact Us</h2>
            <p className="text-xl text-navy-700">
              Have questions or need support? Reach out any time — we&apos;re here to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gold-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-navy-800" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">Email</p>
                  <p className="text-lg font-medium text-navy-800">hello@waiverpass.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gold-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-navy-800" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">Phone</p>
                  <p className="text-lg font-medium text-navy-800">+1 (264) XXX-XXXX</p>
                </div>
              </div>
            </div>
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg rounded-md mt-4">
              Get in Touch
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-gold-400 rounded-full opacity-30"></div>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-navy-800">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-navy-800">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-800"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-navy-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-800"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

