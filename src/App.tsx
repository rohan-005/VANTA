import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-vanta-black text-vanta-text-primary">
      <main className="w-full">
        {/* Placeholder before section components */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-display font-bold text-vanta-lime">
            VANTA
          </h1>
          <p className="font-mono text-xs text-vanta-text-muted mt-2">
            [ ENGINE_STATUS: INITIALIZING ]
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
