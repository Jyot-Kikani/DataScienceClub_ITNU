import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Sparkles,
  Activity,
  ArrowRight,
  ChevronDown,
  Youtube,
  ExternalLink,
} from "lucide-react";

/**
 * Resources.tsx
 * Beautiful zig-zag timeline with scrolling progress line
 * Expandable resources on demand
 */

/* ---------- Phase data with enhanced gradient colors ---------- */
const PHASES = [
  {
    id: 0,
    title: "Phase 0 — Building Your AI Survival Kit",
    subtitle: "Math, Probability & Statistics fundamentals",
    summary: "Gear up with Linear Algebra, Calculus, Probability & Statistics — the mathematical backbone of all ML/DL.",
    topics: [
      "Linear Algebra (vectors, matrices, eigenvalues, SVD)",
      "Calculus (derivatives, gradients, Jacobian, Hessian)",
      "Probability (random variables, distributions, Bayes)",
      "Statistics (descriptive & inferential, hypothesis testing)",
    ],
    resources: [
      { 
        label: "Khan Academy — Calculus", 
        url: "https://www.khanacademy.org/math/calculus-1",
        type: "website"
      },
      { 
        label: "3Blue1Brown — Essence of Linear Algebra", 
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        type: "youtube"
      },
      { 
        label: "MIT 18.06 Linear Algebra (Strang)", 
        url: "https://ocw.mit.edu",
        type: "website"
      },
      { 
        label: "Mathematics for Machine Learning (Free Book)", 
        url: "https://mml-book.github.io/",
        type: "book"
      },
    ],
    gradient: "from-emerald-500/20 via-green-600/10 to-teal-500/20",
    bulletColor: "from-emerald-400 to-green-500",
    borderColor: "border-emerald-500/30",
    glowColor: "hover:shadow-emerald-500/30",
    lineColor: "from-emerald-400 to-green-500",
  },

  {
    id: 1,
    title: "Phase 1 — Coding Foundations",
    subtitle: "Python, NumPy, Pandas, SQL, Git, Conda, LaTeX",
    summary: "Build the essential toolkit: Python programming, data handling libraries, SQL for queries, and developer tools for reproducible work.",
    topics: [
      "Python Basics (syntax, OOP, file I/O)",
      "Linux CLI basics",
      "NumPy (arrays, broadcasting)",
      "Pandas (dataframes, cleaning, aggregation)",
      "Data visualization (Matplotlib, Seaborn)",
      "SQL (joins, aggregations, modeanalytics-style queries)",
      "Git & GitHub, Conda environments, LaTeX/Overleaf",
    ],
    resources: [
      { 
        label: "Google's Python Class", 
        url: "https://developers.google.com/edu/python",
        type: "website"
      },
      { 
        label: "Think Python (Free Book)", 
        url: "https://allendowney.github.io/ThinkPython/",
        type: "book"
      },
      { 
        label: "NumPy Quickstart", 
        url: "https://numpy.org/doc/stable/user/quickstart.html",
        type: "website"
      },
      { 
        label: "Corey Schafer - Python Tutorials", 
        url: "https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7",
        type: "youtube"
      },
    ],
    gradient: "from-amber-400/20 via-amber-500/10 to-yellow-400/20",
    bulletColor: "from-amber-300 to-yellow-400",
    borderColor: "border-amber-400/30",
    glowColor: "hover:shadow-amber-400/30",
    lineColor: "from-amber-300 to-yellow-400",
  },

  {
    id: 2,
    title: "Phase 2 — Machine Learning",
    subtitle: "Supervised / Unsupervised / Model evaluation & practical tools",
    summary: "Learn supervised and unsupervised algorithms, preprocessing, validation, feature engineering, and practical scikit-learn workflows.",
    topics: [
      "Foundations: supervised/unsupervised/reinforcement",
      "Data preprocessing (scaling, encoding, imputation)",
      "Supervised algorithms (LR, trees, SVM, kNN, ensembles)",
      "Unsupervised (k-means, hierarchical, DBScan, PCA, t-SNE)",
      "Evaluation & validation (confusion matrix, ROC/AUC, CV)",
      "Feature engineering & model tuning (GridSearch, CV)",
      "Mini projects: house prices, spam detection, segmentation",
    ],
    resources: [
      { 
        label: "Andrew Ng — Machine Learning (Coursera)", 
        url: "https://www.coursera.org/learn/machine-learning",
        type: "course"
      },
      { 
        label: "Kaggle Micro-Courses", 
        url: "https://www.kaggle.com/learn/overview",
        type: "course"
      },
      { 
        label: "StatQuest with Josh Starmer", 
        url: "https://www.youtube.com/@statquest",
        type: "youtube"
      },
      { 
        label: "Hands-On ML (Aurélien Géron)", 
        url: "https://github.com/ageron/handson-ml2",
        type: "book"
      },
    ],
    gradient: "from-cyan-500/20 via-cyan-600/10 to-blue-500/20",
    bulletColor: "from-cyan-400 to-cyan-600",
    borderColor: "border-cyan-500/30",
    glowColor: "hover:shadow-cyan-500/30",
    lineColor: "from-cyan-400 to-cyan-500",
  },

  {
    id: 3,
    title: "Phase 3 — Deep Learning & AI",
    subtitle: "Neural nets, CNNs, RNNs, Transformers, Generative models",
    summary: "Move from ML to deep learning: design, train and evaluate neural networks; explore vision, sequence models and transformer-based architectures.",
    topics: [
      "Neural network foundations (MLPs, activations, backprop)",
      "Training tricks (optimizers, regularization, batch norm)",
      "CNNs & vision architectures (ResNet, VGG, Inception)",
      "RNNs, LSTMs, GRUs for sequence data",
      "Attention & Transformers (BERT, GPT, ViT)",
      "Generative models (VAEs, GANs, Diffusion Models)",
      "Tools: TensorFlow/Keras, PyTorch, Hugging Face",
      "Mini projects: image classifier, sentiment analysis, text generation",
    ],
    resources: [
      { 
        label: "Dive into Deep Learning (D2L)", 
        url: "https://d2l.ai/",
        type: "book"
      },
      { 
        label: "CS231n (Stanford) — Computer Vision", 
        url: "https://cs231n.stanford.edu/",
        type: "course"
      },
      { 
        label: "3Blue1Brown — Neural Networks", 
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        type: "youtube"
      },
      { 
        label: "Hugging Face — Learn", 
        url: "https://huggingface.co/learn",
        type: "website"
      },
    ],
    gradient: "from-blue-500/20 via-blue-600/10 to-violet-500/20",
    bulletColor: "from-blue-400 to-blue-600",
    borderColor: "border-blue-500/30",
    glowColor: "hover:shadow-blue-500/30",
    lineColor: "from-blue-400 to-blue-500",
  },

  {
    id: 4,
    title: "Phase 4 — Only for the Brave of Heart",
    subtitle: "Research-level topics: SSMs, RL, Multi-modality, Diffusion",
    summary: "Advanced research topics — read papers, implement experiments, and follow cutting-edge repos. Expect math-heavy concepts and experimental work.",
    topics: [
      "State-Space Models & long-range sequence modeling (S4)",
      "Multi-modal models (text+image, CLIP-like systems)",
      "Reinforcement Learning (deep RL theory & practice)",
      "Diffusion Models & advanced generative techniques",
    ],
    resources: [
      { 
        label: "Spinning Up in Deep RL (OpenAI)", 
        url: "https://spinningup.openai.com/en/latest/",
        type: "website"
      },
      { 
        label: "Diffusion Models — Lilian Weng", 
        url: "https://lilianweng.github.io/posts/2021-07-11-diffusion-models/",
        type: "article"
      },
      { 
        label: "Stanford CS285 — Deep RL", 
        url: "http://rail.eecs.berkeley.edu/deeprlcourse/",
        type: "course"
      },
      { 
        label: "Yannic Kilcher — Paper Explanations", 
        url: "https://www.youtube.com/@YannicKilcher",
        type: "youtube"
      },
    ],
    gradient: "from-violet-500/20 via-violet-600/10 to-rose-500/20",
    bulletColor: "from-violet-400 to-violet-600",
    borderColor: "border-violet-500/30",
    glowColor: "hover:shadow-violet-500/30",
    lineColor: "from-violet-400 to-violet-500",
  },

  {
    id: 5,
    title: "Phase 5 — What's Next?",
    subtitle: "MLOps, deployment, continuous learning & contributing",
    summary: "This roadmap is a launchpad — move into deployment, MLOps, cloud, open-source, or research. Keep learning, building, and contributing.",
    topics: [
      "MLOps & Deployment (Docker, Kubernetes, CI/CD for ML)",
      "Cloud ML Platforms (AWS/GCP/Azure ML services)",
      "Open-source & community contributions",
      "Reading papers, publishing, and continuous learning",
    ],
    resources: [
      { 
        label: "MLOps Zoomcamp", 
        url: "https://github.com/DataTalksClub/mlops-zoomcamp",
        type: "course"
      },
      { 
        label: "Full Stack Deep Learning", 
        url: "https://fullstackdeeplearning.com/",
        type: "course"
      },
      { 
        label: "Made With ML — MLOps", 
        url: "https://madewithml.com/topics/mlops/",
        type: "website"
      },
      { 
        label: "Docker & Kubernetes Tutorials", 
        url: "https://www.youtube.com/playlist?list=PLy7NrYWoggjziYQIDorlXjTvvwweTYocP",
        type: "youtube"
      },
    ],
    gradient: "from-rose-500/20 via-rose-600/10 to-lime-500/20",
    bulletColor: "from-rose-400 to-rose-600",
    borderColor: "border-rose-500/30",
    glowColor: "hover:shadow-rose-500/30",
    lineColor: "from-rose-400 to-rose-500",
  },
];

/* ---------- Timeline Bullet Component ---------- */
const TimelineBullet: React.FC<{ phase: typeof PHASES[0]; isActive: boolean }> = ({ phase, isActive }) => {
  return (
    <div className="relative z-20">
      {/* Glowing effect when active */}
      {isActive && (
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${phase.bulletColor} blur-sm opacity-70 animate-pulse`} />
      )}
      
      {/* Main bullet */}
      <div className={`relative w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${phase.bulletColor} text-white font-bold text-lg shadow-lg border-2 border-white/20 backdrop-blur-sm transition-all duration-300 ${
        isActive ? 'scale-110 shadow-xl' : 'scale-100'
      }`}>
        {phase.id}
      </div>
    </div>
  );
};

/* ---------- Resource Link Component ---------- */
const ResourceLink: React.FC<{ resource: any }> = ({ resource }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'youtube': return <Youtube className="h-4 w-4 text-red-400" />;
      case 'book': return <BookOpen className="h-4 w-4 text-blue-400" />;
      case 'course': return <Activity className="h-4 w-4 text-green-400" />;
      case 'article': return <ExternalLink className="h-4 w-4 text-orange-400" />;
      default: return <ExternalLink className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'youtube': return 'Video';
      case 'book': return 'Book';
      case 'course': return 'Course';
      case 'article': return 'Article';
      default: return 'Resource';
    }
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
    >
      {getIcon(resource.type)}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{resource.label}</p>
        <p className="text-xs text-muted-foreground capitalize">{getTypeLabel(resource.type)}</p>
      </div>
      <ArrowRight className="h-4 w-4 flex-shrink-0" />
    </a>
  );
};

/* ---------- Progress Line Component ---------- */
/* ---------- Progress Line Component ---------- */
const ProgressLine: React.FC<{ activePhase: number }> = ({ activePhase }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const timeline = document.getElementById('timeline-container');
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline is visible and scrolled through
      const start = windowHeight;
      const end = -rect.height;
      const progress = 1 - (rect.top - end) / (start - end);
      
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const currentPhase = PHASES[activePhase];

  return (
    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 z-0">
      {/* Background line (light blue) */}
      <div className="absolute inset-0 bg-sky-200/20 rounded-full" />
      
      {/* Animated progress fill with light blue color */}
      <div 
        className="absolute top-0 left-0 w-full rounded-full transition-all duration-300 ease-out bg-gradient-to-b from-sky-400 to-blue-500"
        style={{ 
          height: `${scrollProgress * 100}%`,
        }}
      />
      
      {/* Combined White Circle with Glow Effect */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out z-20"
        style={{ 
          top: `${scrollProgress * 100}%`,
        }}
      >
        {/* Glowing effect */}
        <div className="absolute -inset-2 bg-sky-400 rounded-full blur-sm opacity-70 animate-pulse" />
        
        {/* White circle */}
        <div className="relative w-4 h-4 rounded-full bg-white border-2 border-sky-500 shadow-lg" />
      </div>
    </div>
  );
};

/* ---------- Main Component ---------- */
const Resources: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);

  const toggleResources = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  // Track which phase is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById('timeline-container');
      if (!timeline) return;

      const phases = document.querySelectorAll('[data-phase]');
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      phases.forEach((phaseElement, index) => {
        const rect = phaseElement.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = rect.bottom + scrollY;
        
        // Check if phase is in the central viewport area
        if (scrollY + windowHeight * 0.4 >= elementTop && scrollY + windowHeight * 0.6 <= elementBottom) {
          setActivePhase(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-background relative">
      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Data Science <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Roadmap</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A progressive journey from mathematical foundations to cutting-edge research. 
            Follow the colored path as concepts evolve in complexity.
          </p>
        </div>

        {/* Timeline Container */}
        <div id="timeline-container" className="relative">
          <ProgressLine activePhase={activePhase} />
          
          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-24 relative z-10">
            {PHASES.map((phase, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedPhase === phase.id;
              const isActive = activePhase === index;
              const isPast = index < activePhase;
              const isFuture = index > activePhase;
              
              return (
                <div 
                  key={phase.id} 
                  className="relative"
                  data-phase={phase.id}
                >
                  {/* Desktop Layout - Zig Zag */}
                  <div className="hidden lg:flex items-center justify-center gap-4">
                    {/* Left Side Content (Even indices) */}
                    {isEven && (
                      <div className="flex-1 flex justify-end pr-8">
                        <div className="max-w-lg w-full">
                          <PhaseCard 
                            phase={phase} 
                            isExpanded={isExpanded}
                            isActive={isActive}
                            isPast={isPast}
                            isFuture={isFuture}
                            onToggleResources={() => toggleResources(phase.id)}
                          />
                        </div>
                      </div>
                    )}

                    {/* Center Bullet with proper spacing */}
                    <div className="flex-shrink-0 w-20 flex justify-center relative z-20">
                      <TimelineBullet phase={phase} isActive={isActive} />
                    </div>

                    {/* Right Side Content (Odd indices) */}
                    {!isEven && (
                      <div className="flex-1 flex justify-start pl-8">
                        <div className="max-w-lg w-full">
                          <PhaseCard 
                            phase={phase} 
                            isExpanded={isExpanded}
                            isActive={isActive}
                            isPast={isPast}
                            isFuture={isFuture}
                            onToggleResources={() => toggleResources(phase.id)}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout - Stacked */}
                  <div className="lg:hidden flex gap-6 pl-16 relative z-10">
                    <div className="flex-shrink-0 w-12 flex justify-center relative z-20">
                      <TimelineBullet phase={phase} isActive={isActive} />
                    </div>
                    <div className="flex-1">
                      <PhaseCard 
                        phase={phase} 
                        isExpanded={isExpanded}
                        isActive={isActive}
                        isPast={isPast}
                        isFuture={isFuture}
                        onToggleResources={() => toggleResources(phase.id)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center relative z-10">
          <div className="inline-flex items-center gap-4 bg-muted/10 p-6 rounded-2xl border border-green-500/20 backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-green-400" />
            <div>
              <p className="text-lg font-semibold text-foreground">
                Ready to begin your journey?
              </p>
              <p className="text-muted-foreground mt-1">
                Start with Phase 0 and progress sequentially. Build projects at each stage!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Phase Card Component ---------- */
const PhaseCard: React.FC<{ 
  phase: typeof PHASES[0]; 
  isExpanded: boolean;
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
  onToggleResources: () => void;
}> = ({ phase, isExpanded, isActive, isPast, isFuture, onToggleResources }) => {
  const getCardEffect = () => {
    if (isActive) return 'opacity-100 scale-105';
    if (isPast) return 'opacity-20 scale-100 pointer-events-none';
    if (isFuture) return 'opacity-10 scale-95 pointer-events-none';
    return 'opacity-100 scale-100';
  };

  const getCardGlow = () => {
    if (isActive) return phase.glowColor.replace('hover:', '') + ' shadow-2xl';
    return '';
  };

  const getButtonGlow = () => {
    if (isActive) return phase.glowColor.replace('hover:', '').replace('500', '400') + ' shadow-lg';
    return phase.glowColor;
  };

  return (
    <Card className={`group relative overflow-hidden border ${phase.borderColor} bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm transition-all duration-500 hover:scale-105 ${phase.glowColor} ${getCardGlow()} ${getCardEffect()}`}>
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`} />
      
      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-center justify-between mb-3">
          <Badge className={`bg-gradient-to-r ${phase.bulletColor} text-white border-0 font-semibold backdrop-blur-sm transition-all duration-300 ${
            isActive ? 'scale-105' : 'scale-100'
          }`}>
            Phase {phase.id}
          </Badge>
          <Activity className={`h-5 w-5 transition-all duration-300 ${
            isActive ? 'text-foreground scale-110' : 'text-muted-foreground'
          }`} />
        </div>
        
        <CardTitle className="text-xl font-bold leading-tight transition-all duration-300">
          {phase.title}
        </CardTitle>
        
        <p className="text-sm text-muted-foreground mt-2 transition-all duration-300">
          {phase.subtitle}
        </p>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6">
        {/* Summary */}
        <p className="text-foreground/90 leading-relaxed transition-all duration-300">
          {phase.summary}
        </p>

        {/* Core Topics */}
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-muted-foreground transition-all duration-300">
            Core Topics
          </h4>
          <ul className="space-y-2">
            {phase.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-sm transition-all duration-300">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.bulletColor} mt-1.5 flex-shrink-0 transition-all duration-300 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`} />
                <span className="text-foreground/80 leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section - Expandable */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'
        }`}>
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Learning Resources
            </h4>
            <div className="space-y-3">
              {phase.resources.map((resource, i) => (
                <ResourceLink key={i} resource={resource} />
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Resources Button */}
        <Button
          onClick={onToggleResources}
          variant="outline"
          className={`w-full border ${phase.borderColor} bg-background/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${getButtonGlow()} ${
            isActive ? 'scale-105' : 'scale-100'
          }`}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          {isExpanded ? 'Hide Resources' : 'Show Resources'}
          <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Resources;
