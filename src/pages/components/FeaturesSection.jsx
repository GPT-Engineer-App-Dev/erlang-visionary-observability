import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BarChart2, Bell } from 'lucide-react';

const features = [
  {
    icon: <Activity className="h-8 w-8 mb-4 text-primary" />,
    title: "Real-time Monitoring",
    description: "Get real-time insights into your Erlang applications with metrics, logs, and traces.",
    example: "Use :telemetry.execute/3 to emit metrics in real-time."
  },
  {
    icon: <BarChart2 className="h-8 w-8 mb-4 text-primary" />,
    title: "Detailed Metrics",
    description: "Access detailed metrics and logs for better analysis of your Erlang systems.",
    example: "Leverage the Logger module for structured logging with metadata."
  },
  {
    icon: <Bell className="h-8 w-8 mb-4 text-primary" />,
    title: "Distributed Tracing",
    description: "Implement distributed tracing to understand request flow across your Erlang services.",
    example: "Use OpenTelemetry for comprehensive distributed tracing."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{feature.description}</p>
                <p className="text-sm text-muted-foreground">{feature.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;