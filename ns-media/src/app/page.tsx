import { MusicIcon, PlayCircleIcon, UsersIcon, MailIcon, PhoneIcon, MapPinIcon, Mic2Icon, HeadphonesIcon, SpeakerIcon, PianoIcon, GuitarIcon, DrumIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gold">Nikhil Ns Media House</div>
          <ul className="flex space-x-6">
            {["Home", "Services", "Works", "Team", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 text-gold animate-pulse">Sonic Masterpieces</h1>
          <p className="text-xl mb-8">Where Creativity Meets Technical Excellence</p>
          <Button size="lg" className="bg-gold hover:bg-gold/80 text-black">
            Discover Our Sound
          </Button>
        </section>

        <section id="services" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gold">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Mic2Icon size={40} />, title: "Vocal Recording", description: "State-of-the-art vocal booth and processing" },
                { icon: <HeadphonesIcon size={40} />, title: "Music Production", description: "From concept to final master" },
                { icon: <SpeakerIcon size={40} />, title: "Sound Design", description: "Creating unique sonic landscapes" },
                { icon: <PianoIcon size={40} />, title: "Composition", description: "Original music for any project" },
                { icon: <GuitarIcon size={40} />, title: "Live Recording", description: "Multi-track recording for bands and ensembles" },
                { icon: <DrumIcon size={40} />, title: "Mixing & Mastering", description: "Polishing your sound to perfection" }
              ].map((service, index) => (
                <div key={index} className="bg-black p-6 rounded-lg text-center hover:bg-gray-800 transition-colors border border-gold/20">
                  <div className="mb-4 inline-block text-gold">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2 text-gold">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gold">Featured Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Studio Setup", "Mixing Console", "Vocal Recording", 
                "Guitar Session", "Drum Kit", "Mastering Suite"
              ].map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=${item}`}
                    alt={item}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" className="text-gold border-gold hover:bg-gold hover:text-black">
                      Explore Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gold">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Nikhil Ns", role: "Founder & Lead Producer" },
                { name: "Jane Doe", role: "Senior Sound Engineer" },
                { name: "John Smith", role: "Composer" },
                { name: "Emily Brown", role: "Artist Relations" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold">
                    <img
                      src={`/placeholder.svg?height=160&width=160&text=${member.name}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gold">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <Input type="text" placeholder="Your Name" className="bg-gray-800 border-gray-700 placeholder-gray-500" />
                  <Input type="email" placeholder="Your Email" className="bg-gray-800 border-gray-700 placeholder-gray-500" />
                  <Textarea placeholder="Your Message" className="bg-gray-800 border-gray-700 placeholder-gray-500" rows={5} />
                  <Button type="submit" className="w-full bg-gold hover:bg-gold/80 text-black">Send Message</Button>
                </form>
              </div>
              <div className="space-y-6">
                {[
                  { icon: <PhoneIcon size={24} />, text: "+1 (123) 456-7890" },
                  { icon: <MailIcon size={24} />, text: "contact@nikhilnsmediahouse.com" },
                  { icon: <MapPinIcon size={24} />, text: "123 Music Street, Melody City, MC 12345" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 text-gold">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Nikhil Ns Media House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}