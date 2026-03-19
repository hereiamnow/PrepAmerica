
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, BookOpen, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    title: "Civilian First Responder Certification",
    desc: "Master the basics of trauma care, bleeding control, and life-saving interventions in high-stress environments.",
    duration: "12 Hours",
    lessons: 24,
    level: "Intermediate",
    img: "https://picsum.photos/seed/course1/600/400"
  },
  {
    title: "Off-Grid Power Systems Design",
    desc: "Learn how to build solar and battery backup systems for long-term power outages.",
    duration: "8 Hours",
    lessons: 15,
    level: "Advanced",
    img: "https://picsum.photos/seed/course2/600/400"
  },
  {
    title: "Home Defense & Perimeter Security",
    desc: "Comprehensive strategy for securing your household against intruders during emergencies.",
    duration: "5 Hours",
    lessons: 10,
    level: "Beginner",
    img: "https://picsum.photos/seed/course3/600/400"
  },
  {
    title: "Survival Sanitation & Hygiene",
    desc: "Critical knowledge for maintaining health when municipal water and waste systems fail.",
    duration: "3 Hours",
    lessons: 6,
    level: "Beginner",
    img: "https://picsum.photos/seed/course4/600/400"
  }
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mb-16 space-y-4">
        <h1 className="text-4xl font-headline font-bold text-primary">Training & Certifications</h1>
        <p className="text-muted-foreground text-lg">
          Practical skills for real-world survival. Our courses are taught by former first responders and emergency management experts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courses.map((course, i) => (
          <Card key={i} className="flex flex-col md:flex-row overflow-hidden border shadow-sm group">
            <div className="relative w-full md:w-2/5 h-48 md:h-auto">
              <Image
                src={course.img}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex flex-col p-6">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">{course.level}</Badge>
              </div>
              <CardTitle className="text-xl mb-2 font-headline text-primary">{course.title}</CardTitle>
              <CardDescription className="mb-6 line-clamp-3">{course.desc}</CardDescription>
              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" /> {course.lessons} Lessons
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold">Enroll in Course</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <section className="mt-20 bg-muted/50 p-12 rounded-3xl text-center space-y-6">
        <Award className="h-16 w-16 text-primary mx-auto" />
        <h2 className="text-3xl font-bold font-headline text-primary">PrepAmerica Certified Household</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Complete our core curriculum (First Aid, Sanitation, and Planning) to receive the official PrepAmerica Certified Household designation and an emergency vehicle decal.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-primary">
          <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Expert Content</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Lifetime Access</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Professional Certificates</div>
        </div>
      </section>
    </div>
  );
}
