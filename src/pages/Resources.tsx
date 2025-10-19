import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BookOpen, Rocket, Cpu, Brain, Code2 } from "lucide-react";

const Resources = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const roadmapPhases = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: "Phase 1: Fundamentals",
      description: "Learn Python, statistics, and essential math for AI/ML.",
      resources: [
        { name: "Python for Everybody", link: "https://www.py4e.com" },
        { name: "Khan Academy – Statistics", link: "https://www.khanacademy.org/math/statistics-probability" },
        { name: "Mathematics for Machine Learning", link: "https://mml-book.github.io/" },
      ],
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "Phase 2: Data Handling",
      description: "Master data preprocessing, visualization, and manipulation.",
      resources: [
        { name: "Pandas Documentation", link: "https://pandas.pydata.org/docs/" },
        { name: "Seaborn Gallery", link: "https://seaborn.pydata.org/examples/index.html" },
        { name: "Kaggle Data Visualization Course", link: "https://www.kaggle.com/learn/data-visualization" },
      ],
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "Phase 3: Machine Learning",
      description: "Dive into ML algorithms and model evaluation.",
      resources: [
        { name: "Andrew Ng's ML Course", link: "https://www.coursera.org/learn/machine-learning" },
        { name: "Scikit-learn Tutorials", link: "https://scikit-learn.org/stable/tutorial/" },
        { name: "Google ML Crash Course", link: "https://developers.google.com/machine-learning/crash-course" },
      ],
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Phase 4: Deep Learning",
      description: "Build and train deep neural networks using PyTorch and TensorFlow.",
      resources: [
        { name: "Deep Learning Specialization", link: "https://www.coursera.org/specializations/deep-learning" },
        { name: "PyTorch Tutorials", link: "https://pytorch.org/tutorials/" },
        { name: "Fast.ai Course", link: "https://course.fast.ai/" },
      ],
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "Phase 5: Deployment & Projects",
      description: "Learn MLOps, Streamlit, and deployment strategies.",
      resources: [
        { name: "Streamlit Docs", link: "https://docs.streamlit.io/" },
        { name: "Full Stack Deep Learning", link: "https://fullstackdeeplearning.com/" },
        { name: "Hugging Face – Model Deployment", link: "https://huggingface.co/docs" },
      ],
    },
  ];

  // Scroll progress logic
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
        setScrollProgress((scrollTop / scrollHeight) * 100);
      }
    };
    const ref = containerRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-y-auto pt-24 pb-20 px-4 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI/ML <span className="bg-gradient-primary bg-clip-text text-transparent">Learning Roadmap</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow this step-by-step journey to master AI and Machine Learning — from fundamentals to deployment.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="w-full h-2 bg-muted rounded-full mb-10 relative overflow-hidden">
          <div
            className="h-full bg-gradient-primary rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Roadmap */}
        <div className="space-y-8">
          {roadmapPhases.map((phase, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-transparent backdrop-blur-md hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-6 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-900/10 border border-blue-800/20">
                      {phase.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                        {phase.title}
                      </h2>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="mt-4 sm:mt-0 text-blue-500 hover:text-blue-400"
                    onClick={() => setExpanded(expanded === index ? null : index)}
                  >
                    {expanded === index ? (
                      <>
                        Hide <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        View Resources <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>

                {expanded === index && (
                  <div className="mt-6 pl-2 border-l-2 border-blue-800/30 space-y-3 animate-fade-in-up">
                    {phase.resources.map((res, i) => (
                      <a
                        key={i}
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        • {res.name}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>

              {/* Gradient hover overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-900 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;