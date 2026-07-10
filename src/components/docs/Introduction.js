import React from 'react';
import { DocTitle, DocP, DocH2, DocList } from '../../components/docs/DocPrimitives';

export default function Introduction() {
  return (
    <>
      <DocTitle eyebrow="Get started">Introduction</DocTitle>

      <DocP>
        Code Magic is a landing page project built with React and MUI (Material UI). This documentation
        site is part of the same project — it explains how the project was created, how to run it on your
        own machine, how the code is organized, and how to deploy it.
      </DocP>

      <DocP>
        This guide assumes no prior React experience, but does assume you have basic comfort with a
        terminal / command prompt.
      </DocP>

      <DocH2>What you'll find in these docs</DocH2>
      <DocList
        items={[
          'Installation — the tools you need before you start.',
          'Creating the project — the exact commands used to scaffold this app from scratch.',
          'Running the project — how to start the dev server, run tests, and build for production.',
          'Project structure — a tour of every folder and what lives where.',
          'Components overview — what each component does and how they fit together.',
          'Theming — how the color palette, typography, and MUI theme are configured.',
          'Deployment — shipping the built site to a static host.',
          'FAQ & troubleshooting — fixes for the most common setup issues.',
        ]}
      />

      <DocP>
        Use the sidebar on the left to jump between sections. If you're brand new, start with{' '}
        <strong>Installation</strong>.
      </DocP>
    </>
  );
}