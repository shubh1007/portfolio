
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Medal, Star, GraduationCap, Crown } from "lucide-react";
import { useState } from "react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Best Web App Award",
    description: "Won first place in the Annual Developer's Conference for innovative web application design and implementation.",
    date: "2023",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "1M+ Downloads",
    description: "Created an open-source library that has been downloaded over 1 million times by developers worldwide.",
    date: "2022",
    icon: <Star className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Hackathon Winner",
    description: "Led a team of developers to win first place in a 48-hour hackathon with an AI-powered accessibility tool.",
    date: "2021",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Google Certification",
    description: "Received advanced certification in cloud architecture and deployment, scoring in the top 5% globally.",
    date: "2021",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Featured Publication",
    description: "Research paper on scalable architecture patterns published in a leading technology journal.",
    date: "2020",
    icon: <Medal className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Industry Recognition",
    description: "Named as one of the '30 Under 30' developers to watch by a prominent tech publication.",
    date: "2019",
    icon: <Crown className="h-6 w-6" />,
  },
];

export default function AchievementsSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl">
            Highlighting some key milestones and recognition from my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id}
              className={`card-hover-effect overflow-hidden cursor-pointer transition-all ${
                expandedCard === achievement.id ? 'ring-2 ring-primary/50 scale-[1.01]' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === achievement.id ? null : achievement.id)}
            >
              <CardHeader className="p-6 pb-2">
                <div className="flex justify-between items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-card-hover flex items-center justify-center text-primary">
                    {achievement.icon}
                  </div>
                  <CardDescription className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 dark:bg-primary/20">
                    {achievement.date}
                  </CardDescription>
                </div>
                <CardTitle className="text-xl mt-4">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <CardDescription className="text-sm leading-relaxed">
                  {achievement.description}
                </CardDescription>
              </CardContent>
              <div 
                className={`bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 left-0 right-0 h-20 transition-opacity duration-300 pointer-events-none ${
                  expandedCard === achievement.id ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
