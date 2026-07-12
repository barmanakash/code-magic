import React from 'react';
import { DocTitle, DocP, DocH2, DocList } from './DocPrimitives';

export default function HtmlDocs() {
  return (
    <>
      <DocTitle eyebrow="Get started">HTML essentials</DocTitle>
      <DocP>HTML gives structure to your web pages and is the foundation for every React UI you build.</DocP>

      <DocH2>Core building blocks</DocH2>
      <DocList
        items={[
          'Use semantic tags like header, main, section, and footer to give your page clear structure.',
          'Wrap content in meaningful elements so the page is easier to read and more accessible.',
          'Link styles and scripts from the document so your page can be enhanced with CSS and JavaScript.',
          'Use forms, inputs, buttons, and labels to collect and organize user information.'
        ]}
      />

      <DocH2>Common HTML elements</DocH2>
      <DocList
        items={[
          'Headings: h1 to h6 create a content hierarchy for readers and search engines.',
          'Paragraphs and lists: p, ul, ol, and li help present information clearly.',
          'Links and images: a and img connect pages and display visual content.',
          'Containers: div and span group content without changing the page structure by themselves.'
        ]}
      />
    </>
  );
}
