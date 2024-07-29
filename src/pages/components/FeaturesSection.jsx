import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BarChart2, Bell } from 'lucide-react';

const features = [
  {
    icon: <Activity className="h-8 w-8 mb-4 text-primary" />,
    title: "Real-time Monitoring",
    description: "Get real-time insights into your Erlang applications."
  },
  {
    icon: <BarChart2 className="h-8 w-8 mb-4 text-primary" />,
    title: "Detailed Metrics",
    description: "Access detailed metrics and logs for better analysis."
  },
  {
    icon: <Bell className="h-8 w-8 mb-4 text-primary" />,
    title: "Alerting System",
    description: "Set up alerts to stay informed about critical issues."
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
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;