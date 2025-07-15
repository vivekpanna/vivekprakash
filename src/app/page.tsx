"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Download, Linkedin, Mail, Phone, CalendarDays, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { translations, type Language } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ProfilePage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  useEffect(() => {
    // You could try to detect browser language here or load from localStorage
    // For now, it defaults to 'en'
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    } else {
      setLanguage("en")
    }
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  const getBadgeColorClass = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-100 text-purple-800"
      case "green":
        return "bg-green-100 text-green-800"
      case "blue":
        return "bg-blue-100 text-blue-800"
      case "orange":
        return "bg-orange-100 text-orange-800"
      case "red":
        return "bg-red-100 text-red-800"
      case "pink":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm flex justify-end p-4">
        <LanguageSwitcher onLanguageChange={handleLanguageChange} currentLanguage={language} />
      </header>
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 lg:p-16 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-36 h-36 md:w-48 md:h-48 border-4 border-primary shadow-xl transition-transform duration-300 hover:scale-105">
              <AvatarImage src="/placeholder-user.png" alt={t.name} />
              <AvatarFallback className="text-6xl font-extrabold bg-primary text-primary-foreground">VP</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 leading-tight">{t.name}</h1>
              <p className="text-2xl md:text-3xl text-purple-700 font-semibold mb-5">{t.title}</p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 mb-6">{t.summary}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <Link href="https://linkedin.com/in/raivivekprakash" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all duration-200 hover:scale-105">
                    <Linkedin className="w-5 h-5" /> {t.connectLinkedIn}
                  </Button>
                </Link>
                <Link
                  href="https://docs.google.com/document/d/1cy6uMl_o7MeggUnpJXadZMnjFKPUCmfx/edit?usp=sharing&ouid=102903050804561374918&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="gap-2 border-purple-500 text-purple-700 hover:bg-purple-50 transition-all duration-200 hover:scale-105 bg-transparent"
                  >
                    <Download className="w-5 h-5" /> {t.downloadCV}
                  </Button>
                </Link>
                <Link href="https://calendly.com/vivekpanna" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="gap-2 border-green-500 text-green-700 hover:bg-green-50 transition-all duration-200 hover:scale-105 bg-transparent"
                  >
                    <CalendarDays className="w-5 h-5" /> {t.scheduleCall}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* About Me Section */}
        <section className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.aboutMe}</h2>
          <div className="bg-white rounded-xl shadow-md p-8 text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">{t.aboutMeContent1}</p>
            <p>{t.aboutMeContent2}</p>
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* Key Achievements Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.keyAchievements}</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              {t.achievementsList.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.professionalJourney}</h2>
          <div className="relative space-y-12 md:space-y-16 before:absolute before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gray-300">
            {t.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } group`}
              >
                <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 shadow-md group-hover:scale-125 transition-transform duration-300">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <Card
                  className={`w-full md:w-[45%] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-purple-800">{exp.title}</CardTitle>
                    <CardDescription className="text-md text-gray-600">
                      {exp.company} {exp.location && `| ${exp.location}`} | {exp.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* Expertise Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.coreExpertise}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.expertiseCategories.map((category, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardTitle className="text-xl mb-4 text-purple-700">{category.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className={getBadgeColorClass(category.color)}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* Portfolio Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.showcaseOfWork}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <Image
                  src={`/Vivek-Linkedin-photo.jpg?height=200&width=400&text=Project%20${index + 1}`}
                  width={400}
                  height={200}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-purple-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                  <Link href="https://raivivekprakash.wixsite.com/profile" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <Globe className="w-4 h-4" /> {item.linkText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* Education & Certifications Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
            {t.educationCertifications}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardTitle className="text-xl mb-4 text-purple-700">Education</CardTitle>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.educationList.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardTitle className="text-xl mb-4 text-purple-700">Certifications</CardTitle>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.certificationsList.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* Tools & Methods Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.toolsMethods}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.toolsCategories.map((category, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardTitle className="text-xl mb-4 text-purple-700">{category.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className="bg-gray-100 text-gray-800">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-gray-300 h-0.5" />

        {/* Language Knowledge Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.languageKnowledge}</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              {t.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4 text-lg">{t.footerText}</p>
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="https://linkedin.com/in/raivivekprakash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin className="w-7 h-7" />
            </Link>
            <Link href={`mailto:${t.email}`} className="hover:text-blue-400 transition-colors duration-200">
              <Mail className="w-7 h-7" />
            </Link>
            <Link href={`tel:${t.phone}`} className="hover:text-blue-400 transition-colors duration-200">
              <Phone className="w-7 h-7" />
            </Link>
            <Link
              href="https://calendly.com/vivekpanna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <CalendarDays className="w-7 h-7" />
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {t.name}. {t.footerCopyright}
          </p>
        </div>
      </footer>
    </div>
  )
}
