import React from 'react';
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from './CodeBlock';

const DocumentationSection = () => {
  const metricsExample = `
# Capture a simple counter metric
:telemetry.execute([:my_app, :request_count], %{count: 1}, %{path: "/api/users"})

# Capture a histogram metric
:telemetry.execute([:my_app, :request_duration], %{duration: 120}, %{path: "/api/users"})
  `;

  const loggingExample = `
require Logger

# Log an info message
Logger.info("User logged in", user_id: 123, ip_address: "192.168.1.1")

# Log an error with stacktrace
Logger.error("Failed to process payment", 
  reason: :invalid_card, 
  user_id: 456, 
  stacktrace: __STACKTRACE__)
  `;

  const tracingExample = `
:opentelemetry.get_tracer(:my_app)
|> :otel_tracer.start_span("process_order")
|> :otel_span.set_attribute("order_id", 789)

# ... perform order processing ...

:otel_span.end_span(span)
  `;

  return (
    <section id="documentation" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Documentation</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our comprehensive documentation provides all the information you need to get started 
          with Erlang Observability. From installation guides to advanced usage tips, we've got you covered.
        </p>
        <Tabs defaultValue="metrics" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="logging">Logging</TabsTrigger>
            <TabsTrigger value="tracing">Tracing</TabsTrigger>
          </TabsList>
          <TabsContent value="metrics">
            <CodeBlock code={metricsExample} language="erlang" />
          </TabsContent>
          <TabsContent value="logging">
            <CodeBlock code={loggingExample} language="erlang" />
          </TabsContent>
          <TabsContent value="tracing">
            <CodeBlock code={tracingExample} language="erlang" />
          </TabsContent>
        </Tabs>
        <Button size="lg" asChild className="mt-8">
          <a href="/docs" target="_blank" rel="noopener noreferrer">View Full Documentation</a>
        </Button>
      </div>
    </section>
  );
};

export default DocumentationSection;