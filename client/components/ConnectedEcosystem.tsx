import { useState, useEffect } from "react";
import {
  Brain,
  Zap,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Mail,
  FileText,
  TrendingUp,
} from "lucide-react";

const ecosystemNodes = [
  {
    id: "ai",
    name: "AI",
    icon: Brain,
    position: { x: 20, y: 30 },
    color: "purple",
  },
  {
    id: "flow",
    name: "Flow",
    icon: Zap,
    position: { x: 50, y: 20 },
    color: "yellow",
  },
  {
    id: "feedback",
    name: "Feedback",
    icon: MessageSquare,
    position: { x: 80, y: 30 },
    color: "orange",
  },
  {
    id: "insight",
    name: "Insight",
    icon: BarChart3,
    position: { x: 50, y: 60 },
    color: "indigo",
  },
];

const connections = [
  { from: "ai", to: "flow" },
  { from: "flow", to: "feedback" },
  { from: "feedback", to: "insight" },
  { from: "insight", to: "ai" },
];

const animationSteps = [
  {
    step: 1,
    title: "Smart Email Processing",
    description: "AI analyzes incoming emails and extracts key information",
    activeNodes: ["ai"],
    icon: Mail,
  },
  {
    step: 2,
    title: "Automated Workflow",
    description: "Flow creates invoice and sets up follow-up sequences",
    activeNodes: ["ai", "flow"],
    icon: FileText,
  },
  {
    step: 3,
    title: "Customer Feedback",
    description: "Feedback collects responses and sentiment analysis",
    activeNodes: ["flow", "feedback"],
    icon: MessageSquare,
  },
  {
    step: 4,
    title: "Business Insights",
    description: "Insight generates reports and revenue dashboards",
    activeNodes: ["feedback", "insight"],
    icon: TrendingUp,
  },
];

export default function ConnectedEcosystem() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % animationSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (nodeId: string, colorType: string) => {
    const colors = {
      purple: {
        bg: "bg-purple-100",
        border: "border-purple-300",
        icon: "text-purple-600",
        active: "bg-purple-500",
      },
      yellow: {
        bg: "bg-yellow-100",
        border: "border-yellow-300",
        icon: "text-yellow-600",
        active: "bg-yellow-500",
      },
      orange: {
        bg: "bg-orange-100",
        border: "border-orange-300",
        icon: "text-orange-600",
        active: "bg-orange-500",
      },
      indigo: {
        bg: "bg-indigo-100",
        border: "border-indigo-300",
        icon: "text-indigo-600",
        active: "bg-indigo-500",
      },
    };

    const node = ecosystemNodes.find((n) => n.id === nodeId);
    const colorScheme = colors[node?.color as keyof typeof colors];
    return colorScheme?.[colorType as keyof typeof colorScheme];
  };

  const isNodeActive = (nodeId: string) => {
    return animationSteps[currentStep].activeNodes.includes(nodeId);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-subtle to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_var(--brand-primary)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Works{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Seamlessly Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Use one or use all—your data syncs across the Just Better ecosystem.
            Watch how a simple email transforms into actionable business
            insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Network Map */}
          <div className="relative">
            <div className="relative h-96 bg-gradient-to-br from-white to-surface-elevated rounded-3xl border border-border/50 shadow-xl overflow-hidden">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {connections.map((connection, index) => {
                  const fromNode = ecosystemNodes.find(
                    (n) => n.id === connection.from,
                  );
                  const toNode = ecosystemNodes.find(
                    (n) => n.id === connection.to,
                  );

                  if (!fromNode || !toNode) return null;

                  const fromX = (fromNode.position.x / 100) * 400;
                  const fromY = (fromNode.position.y / 100) * 400;
                  const toX = (toNode.position.x / 100) * 400;
                  const toY = (toNode.position.y / 100) * 400;

                  const isActive =
                    isNodeActive(connection.from) &&
                    isNodeActive(connection.to);

                  return (
                    <line
                      key={index}
                      x1={fromX}
                      y1={fromY}
                      x2={toX}
                      y2={toY}
                      stroke={
                        isActive
                          ? "hsl(var(--brand-primary))"
                          : "hsl(var(--border))"
                      }
                      strokeWidth={isActive ? 3 : 2}
                      strokeDasharray={isActive ? "0" : "5,5"}
                      className="transition-all duration-500"
                    />
                  );
                })}
              </svg>

              {/* Nodes */}
              {ecosystemNodes.map((node) => {
                const IconComponent = node.icon;
                const isActive = isNodeActive(node.id);

                return (
                  <div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? `${getNodeColor(node.id, "active")} border-white text-white shadow-lg scale-110`
                          : `${getNodeColor(node.id, "bg")} ${getNodeColor(node.id, "border")} ${getNodeColor(node.id, "icon")}`
                      }`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-sm font-medium text-foreground">
                        {node.name}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Data flow particles */}
              {animationSteps[currentStep].activeNodes.length > 1 && (
                <div className="absolute inset-0">
                  {connections.map((connection, index) => {
                    const fromNode = ecosystemNodes.find(
                      (n) => n.id === connection.from,
                    );
                    const toNode = ecosystemNodes.find(
                      (n) => n.id === connection.to,
                    );

                    if (!fromNode || !toNode) return null;

                    const isActive =
                      isNodeActive(connection.from) &&
                      isNodeActive(connection.to);

                    if (!isActive) return null;

                    const fromX = fromNode.position.x;
                    const fromY = fromNode.position.y;
                    const toX = toNode.position.x;
                    const toY = toNode.position.y;

                    // Calculate particles along the path
                    return [1, 2, 3].map((particle) => {
                      const progress = particle * 0.25; // 25%, 50%, 75% along the path
                      const particleX = fromX + (toX - fromX) * progress;
                      const particleY = fromY + (toY - fromY) * progress;

                      return (
                        <div
                          key={`${index}-${particle}`}
                          className="absolute w-2 h-2 bg-brand-primary rounded-full animate-ping"
                          style={{
                            left: `${particleX}%`,
                            top: `${particleY}%`,
                            animationDelay: `${particle * 150 + index * 100}ms`,
                          }}
                        ></div>
                      );
                    });
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Animation Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Live Example: Email to Revenue Report
            </h3>

            {animationSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === currentStep;

              return (
                <div
                  key={step.step}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border-2 border-brand-primary/20"
                      : "bg-surface-elevated border border-border/30"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          isActive
                            ? "bg-brand-primary text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        Step {step.step}
                      </span>
                      {isActive && (
                        <ArrowRight className="w-4 h-4 text-brand-primary animate-pulse" />
                      )}
                    </div>
                    <h4
                      className={`font-semibold mb-1 transition-colors duration-500 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-500 ${
                        isActive
                          ? "text-foreground/80"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {animationSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "bg-brand-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
