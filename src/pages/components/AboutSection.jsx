import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Erlang Observability</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4">
            Erlang Observability is a crucial tool for monitoring and optimizing Erlang applications. 
            It provides developers and operations teams with real-time insights, detailed metrics, 
            and powerful alerting capabilities.
          </p>
          <p className="text-lg">
            Our tool helps you maintain high performance, quickly identify and resolve issues, 
            and ensure the reliability of your Erlang-based systems. With Erlang Observability, 
            you can focus on building great applications while we take care of the monitoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;