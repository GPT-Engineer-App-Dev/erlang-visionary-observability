import React from 'react';
import { Card } from "@/components/ui/card"

export const CodeBlock = ({ code, language }) => {
  return (
    <Card className="mt-4 p-4">
      <pre className="text-left overflow-x-auto">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </Card>
  );
};