// app/dashboard/about/page.tsx
import React from 'react';
import { AboutTab } from './_components/aboutTabs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Content Management.',
  description: 'Manage about page sections, team members, company history, and more',
};

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/40 via-white to-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
            About Content Management
          </h1>
          <p className="text-emerald-600/70 mt-2">
            Manage the about page story, sections and gallery from one place
          </p>
        </div>
        <AboutTab />
      </div>
    </div>
  );
}

export default About;