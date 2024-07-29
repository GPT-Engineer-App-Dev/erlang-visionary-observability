import React from 'react';
import { Button } from "@/components/ui/button"

const DocumentationSection = () => {
  return (
    <section id="documentation" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Documentation</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our comprehensive documentation provides all the information you need to get started 
          with Erlang Observability. From installation guides to advanced usage tips, we've got you covered.
        </p>
        <Button size="lg" asChild>
          <a href="/docs" target="_blank" rel="noopener noreferrer">View Full Documentation</a>
        </Button>
      </div>
    </section>
  );
};

export default DocumentationSection;