
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    date: "Jan 2022 - Present",
    description: [
      "Lead development of the company's flagship SaaS product using React, TypeScript, and GraphQL",
      "Implemented modern CI/CD practices, reducing deployment time by 35%",
      "Mentored junior developers and conducted code reviews to ensure quality and best practices",
      "Collaborated with UX designers to improve user experience, resulting in a 25% increase in user retention",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions",
    location: "Austin, TX",
    date: "Mar 2019 - Dec 2021",
    description: [
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB",
      "Designed and implemented RESTful APIs for mobile and web applications",
      "Optimized database queries and implemented caching strategies, improving performance by 40%",
      "Collaborated with cross-functional teams to deliver projects on time and within budget",
    ],
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "WebTech Studios",
    location: "Seattle, WA",
    date: "Jun 2017 - Feb 2019",
    description: [
      "Assisted in the development of responsive websites for clients across various industries",
      "Implemented UI components using JavaScript, HTML, and CSS",
      "Participated in Agile development processes, including daily stand-ups and sprint planning",
      "Collaborated with senior developers to troubleshoot and debug issues",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-px bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-7 h-7 rounded-full bg-card border-2 border-primary/70 z-10"></div>
                
                {/* Content card */}
                <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-10' : 'sm:pr-10'} pl-10 sm:pl-0 pt-0`}>
                  <Card className="card-hover-effect">
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 text-primary/70 mr-2" />
                        <CardDescription>{exp.date}</CardDescription>
                      </div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 text-primary/70 mr-2" />
                        <CardDescription>
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-1">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
