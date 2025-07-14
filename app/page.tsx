"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Download, Linkedin, Mail, Phone, CalendarDays, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { translations, type Language } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils" // Import cn for conditional class names

export default function ProfilePage() {
  const [language, setLanguage] = useState<Language>("en")
  const [activeTab, setActiveTab] = useState("about") // State for custom tabs
  const t = translations[language]

  useEffect(() => {
    // You could try to detect browser language here or load from localStorage
    // For now, it defaults to 'en'
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

  const navItems = [
    { id: "about", label: t.navAbout },
    { id: "experience", label: t.navExperience },
    { id: "expertise", label: t.navExpertise },
    { id: "portfolio", label: t.navPortfolio },
    { id: "education", label: t.navEducation },
    { id: "tools", label: t.navTools },
    { id: "languages", label: t.navLanguages },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Desktop Navigation - Custom Tabs */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-1 rounded-md bg-muted p-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-sm transition-all",
                    activeTab === item.id ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted/50",
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
          <div className="flex items-center gap-4 ml-auto">
            <LanguageSwitcher onLanguageChange={handleLanguageChange} currentLanguage={language} />
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="relative bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:p-16 mb-16 overflow-hidden border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-60 z-0 animate-pulse-slow"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-40 h-40 md:w-52 md:h-52 border-4 border-primary shadow-xl transition-transform duration-300 hover:scale-105 ring-4 ring-primary/30">
              <AvatarImage src="/placeholder.svg?height=200&width=200" alt={t.name} />
              <AvatarFallback className="text-7xl font-extrabold bg-primary text-primary-foreground">VP</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-3 leading-tight tracking-tight">
                {t.name}
              </h1>
              <p className="text-2xl md:text-4xl text-primary font-semibold mb-5 animate-fade-in-up">{t.title}</p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 mb-6">{t.summary}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <Link href="https://linkedin.com/in/raivivekprakash" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all duration-200 hover:scale-105 transform hover:-translate-y-1">
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
                    className="gap-2 border-primary text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105 transform hover:-translate-y-1 bg-transparent"
                  >
                    <Download className="w-5 h-5" /> {t.downloadCV}
                  </Button>
                </Link>
                <Link href="https://calendly.com/vivekpanna" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="gap-2 border-green-500 text-green-700 hover:bg-green-50 transition-all duration-200 hover:scale-105 transform hover:-translate-y-1 bg-transparent"
                  >
                    <CalendarDays className="w-5 h-5" /> {t.scheduleCall}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-primary to-transparent h-0.5" />

        {/* Mobile Navigation - Custom Tabs (can be a dropdown for better UX on small screens) */}
        <div className="md:hidden mb-8">
          <div className="flex flex-wrap justify-center gap-2 rounded-md bg-muted p-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-sm transition-all",
                  activeTab === item.id ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted/50",
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Content Sections based on activeTab */}
        {activeTab === "about" && (
          <>
            <section id="about" className="mb-16 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.aboutMe}</h2>
              <div className="bg-white rounded-xl shadow-md p-8 text-lg text-gray-700 leading-relaxed border border-gray-200">
                <p className="mb-4">{t.aboutMeContent1}</p>
                <p>{t.aboutMeContent2}</p>
              </div>
            </section>

            <Separator className="my-16 bg-gradient-to-r from-transparent via-primary to-transparent h-0.5" />

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.keyAchievements}</h2>
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  {t.achievementsList.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">
                        <ChevronDown className="w-4 h-4 rotate-90" />
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}

        {activeTab === "experience" && (
          <section id="experience" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.professionalJourney}</h2>
            <Accordion type="single" collapsible className="w-full">
              {t.experience.map((exp, index) => (
                <Card
                  key={index}
                  className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="p-6 text-left hover:no-underline">
                      <div className="flex flex-col items-start">
                        <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                        <p className="text-md text-gray-600">
                          {exp.company} {exp.location && `| ${exp.location}`} | {exp.duration}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </section>
        )}

        {activeTab === "expertise" && (
          <section id="expertise" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.coreExpertise}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.expertiseCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200"
                >
                  <CardTitle className="text-xl mb-4 text-primary">{category.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${getBadgeColorClass(category.color)} text-sm px-3 py-1 rounded-full`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === "portfolio" && (
          <section id="portfolio" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.showcaseOfWork}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 group"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Project%20${index + 1}`}
                      width={400}
                      height={200}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent transition-all duration-200 hover:scale-105"
                      >
                        <Globe className="w-4 h-4" /> {item.linkText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === "education" && (
          <section id="education" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
              {t.educationCertifications}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200">
                <CardTitle className="text-xl mb-4 text-primary">Education</CardTitle>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {t.educationList.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200">
                <CardTitle className="text-xl mb-4 text-primary">Certifications</CardTitle>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {t.certificationsList.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>
        )}

        {activeTab === "tools" && (
          <section id="tools" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.toolsMethods}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.toolsCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200"
                >
                  <CardTitle className="text-xl mb-4 text-primary">{category.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <Badge
                        key={itemIndex}
                        variant="secondary"
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === "languages" && (
          <section id="languages" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">{t.languageKnowledge}</h2>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                {t.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4 text-lg">{t.footerText}</p>
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="https://linkedin.com/in/raivivekprakash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200 transform hover:-translate-y-1"
            >
              <Linkedin className="w-7 h-7" />
            </Link>
            <Link
              href={`mailto:${t.email}`}
              className="hover:text-blue-400 transition-colors duration-200 transform hover:-translate-y-1"
            >
              <Mail className="w-7 h-7" />
            </Link>
            <Link
              href={`tel:${t.phone}`}
              className="hover:text-blue-400 transition-colors duration-200 transform hover:-translate-y-1"
            >
              <Phone className="w-7 h-7" />
            </Link>
            <Link
              href="https://calendly.com/vivekpanna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200 transform hover:-translate-y-1"
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
