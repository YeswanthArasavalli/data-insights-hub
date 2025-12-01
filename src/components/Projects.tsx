import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard analyzing 2 years of sales data with KPI tracking and trend visualization.",
      tools: ["Power BI", "SQL", "Excel"],
      github: "#",
      live: "#",
      case: "#",
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Python-based clustering analysis to identify customer segments for targeted marketing strategies.",
      tools: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      github: "#",
      live: "#",
      case: "#",
    },
    {
      title: "Automated Reporting System",
      description: "Python automation script that generates and emails weekly reports to stakeholders automatically.",
      tools: ["Python", "Pandas", "SMTP", "Schedule"],
      github: "#",
      live: "#",
      case: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world data solutions that delivered measurable results
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Tools Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.case} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-1" />
                      Case
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              More projects coming soon, including machine learning and AI implementations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
