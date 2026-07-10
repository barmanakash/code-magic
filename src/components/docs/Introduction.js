import React from 'react';
import { DocTitle, DocP, DocH2, DocList } from '../../components/docs/DocPrimitives';

export default function Introduction() {
  return (
    <>
      <DocTitle eyebrow="Get started">Introduction</DocTitle>
      <DocH2> What is React?</DocH2>

      <DocP>
        React (sometimes called React.js or ReactJS) is a popular, open-source JavaScript library used for
        building user interfaces (UIs), specifically for single-page applications. It was created by
        Meta (formerly Facebook) in 2013 and is maintained by them alongside a massive community of developers.
      </DocP>

      <DocH2>The History of React</DocH2>
      <DocList
        items={[
          '2011 (FaxJS): Jordan Walke created an early prototype called FaxJS to speed up development on Facebook News Feed.',
          '2012 (Instagram Acquisition): Facebook acquired Instagram. To help Instagram use this new UI approach, React was decoupled from Facebooks internal systems.',
          'May 2013 (Open Source): Facebook officially open-sourced React at the JSConf US conference. Initially, the developer community was skeptical because it combined HTML and JavaScript (JSX).',
          '2015 (React Native & Stability): Facebook released React Native, allowing developers to build mobile apps using React. This skyrocketed its popularity.',
          '2017 (React 16 & Fiber): React was rewritten from scratch under the codename Fiber. This fundamentally improved rendering performance and paved the way for future features.',
          '2019 (React 16.8 & Hooks): Hooks were introduced, allowing developers to use state and other React features without writing class components. This revolutionized how React code is written today.',
          '2022 (React 18): Introduced Concurrent Rendering, Suspense for data fetching, and automatic batching to improve app responsiveness.',
          '2024–Present (React 19): Introduced React Server Components (RSC), native support for Actions (form handling), and the React Compiler to automatically optimize rendering.'
        ]}
      />

      {/* <DocP>
        Use the sidebar on the left to jump between sections. If you're brand new, start with{' '}
        <strong>Installation</strong>.
      </DocP> */}

      <DocH2>Why React?</DocH2>
      <DocP>React is chosen for web development because of four core advantages:</DocP>
      <DocList
        items={[
          'Component - Based: Break the UI down into reusable, self-contained building blocks, making code highly maintainable.',
          'Declarative UI: You describe what the UI should look like based on the data, and React handles updating the browser automatically.',
          'High Performance: Uses a Virtual DOM to calculate changes first, updating the real browser DOM only where necessary to keep apps fast.',
          'Massive Ecosystem: Backed by Meta and a massive community, offering endless third-party libraries, tools, and the ability to transition to mobile via React Native.',
        ]}
      />

      <DocH2>Features</DocH2>
      <DocP>React offers powerful built-in features designed for performance and simplicity:</DocP>
      <DocList
        items={[
          'JSX (JavaScript XML): A syntax extension allowing you to write your UI structure directly within JavaScript.',
          'Virtual DOM: A lightweight copy of the real DOM that optimizes rendering updates for fluid app performance.',
          'Component-Driven Design: Encourages modular architecture by breaking UIs into independent, reusable building blocks.',
          'Unidirectional Data Flow: Data flows down through props, keeping application state predictable and easy to trace.',
          'React Hooks: Native functions like useState and useEffect that provide state and lifecycle features without writing class components.',
          'React Compiler: An automatic optimization layer that removes the overhead of manual tuning like useMemo or useCallback.',
          'Server Components (RSC): Enables server-side rendering out-of-the-box for faster initial loads and zero-bundle-size components.',
          'Built-in Actions: Native framework support for seamless asynchronous form handling, status tracking, and error management.'
        ]}
      />

      <DocH2>Advantages</DocH2>
      <DocP>Key benefits of choosing React for modern application development:</DocP>
      <DocList
        items={[
          'Faster Development: Reusable components eliminate repetitive coding, allowing teams to build complex apps quickly.',
          'Easier Maintenance: The self-contained nature of components ensures updates to one part of the app won\'t break others.',
          'Optimized Performance: Minimal updates to the real browser DOM prevent UI lag and maintain a smooth user experience.',
          'Strong Backing & Longevity: Continuous support from Meta and an enormous community ensures the framework remains stable and modern.',
          'SEO Friendly: Seamless server-side rendering support indexes content efficiently for search engines.',
          'Mobile Ready: Core knowledge translates directly to building cross-platform native mobile apps via React Native.'
        ]}
      />
      <DocH2>Disadvantages</DocH2>
      <DocP>While highly powerful, React comes with certain challenges and trade-offs:</DocP>
      <DocList
        items={[
          'High Pace of Development: The ecosystem changes rapidly, requiring continuous learning to keep up with new patterns and deprecations.',
          'Poor Documentation Coverage: Because the ecosystem moves so fast, third-party library documentation can quickly become outdated.',
          'JSX Learning Curve: Combining HTML-like syntax within JavaScript can be confusing and complex for beginners to grasp initially.',
          'Not a Full Framework: React only handles the UI layer, forcing developers to rely on external libraries for routing, state management, and APIs.',
          'Build Tool Complexity: Setting up a robust project environment from scratch often requires complex bundling and compilation configurations.'
        ]}
      />

      <DocH2>React vs Angular</DocH2>
      <DocP>A quick comparison between the two leading frontend technologies:</DocP>
      <DocList
        items={[
          'Architecture: React is a flexible UI library that requires external packages for full-stack features, while Angular is a complete, opinionated framework with built-in tools.',
          'Data Binding: React utilizes unidirectional (one-way) data binding for predictable state flow, whereas Angular supports bidirectional (two-way) data binding to sync UI and model automatically.',
          'DOM Model: React relies on a Virtual DOM to optimize rendering performance, while Angular uses the real browser DOM combined with incremental DOM techniques.',
          'Language Support: React works primarily with JavaScript and optional JSX/TypeScript, while Angular strictly enforces TypeScript for all development.',
          'Learning Curve: React has a gentler learning curve focusing mainly on component logic, while Angular has a steep learning curve due to complex built-in concepts like RxJS, Dependency Injection, and Modules.'
        ]}
      />

      <DocH2>React vs Vue</DocH2>
      <DocP>A comparison between the two most popular component-driven UI libraries:</DocP>
      <DocList
        items={[
          'Architecture: React is a pure library focusing solely on the view layer, while Vue is a progressive framework providing more official built-in tools like routing and state management.',
          'Syntax: React uses JSX to combine HTML structure into JavaScript logic, whereas Vue uses traditional HTML templates combined with separate script and style blocks.',
          'State Management: React relies on explicit state management updates via Hooks (useState), while Vue uses a reactive system with proxies to automatically track and update data dependencies.',
          'Ecosystem: React features a massive, community-driven ecosystem with endless third-party choices, while Vue relies on a more centralized, officially maintained ecosystem.',
          'Learning Curve: React requires a strong foundation in modern JavaScript and functional programming, while Vue is generally easier for beginners due to its familiar HTML/CSS-like structure.'
        ]}
      />

      <DocH2>React Ecosystem</DocH2>
      <DocP>A breakdown of the standard, widely adopted tools and libraries used alongside React:</DocP>
      <DocList
        items={[
          'Meta-Frameworks: Next.js and Remix provide server-side rendering (SSR), static site generation (SSG), file-based routing, and built-in API optimizations.',
          'State Management: Redux Toolkit and Zustand handle global application state, while React Context manages simpler, lightweight data sharing across components.',
          'Routing: React Router is the standard industry choice for managing navigation and dynamic URLs in client-side Single Page Applications (SPAs).',
          'Data Fetching: TanStack Query (React Query) and RTK Query manage asynchronous API requests, caching, background synchronization, and loading states.',
          'UI Components: Material UI (MUI), Tailwind CSS, and Shadcn/ui offer ready-to-use component primitives and styling utilities for rapid interface development.',
          'Build Tools & Bundlers: Vite and Next.js Compiler (Turbopack) handle fast module bundling, hot module replacement (HMR), and production code optimization.'
        ]}
      />

      <DocH2>When to Use React</DocH2>
      <DocP>React is the ideal choice for projects that demand high interactivity, scaling capabilities, and dynamic state changes:</DocP>
      <DocList
        items={[
          'Single Page Applications (SPAs): Perfect for web apps that need to load content dynamically without refreshing the entire browser page.',
          'Highly Interactive UIs: Best suited for applications with complex, real-time user actions, such as messaging platforms, media streaming sites, and interactive dashboards.',
          'Large-Scale Enterprise Projects: Ideal when multiple teams need to collaborate, thanks to its reusable component-driven architecture and predictable data flow.',
          'Dynamic Data-Driven Content: Excellent for platforms where data changes frequently and the view must instantly update, such as e-commerce checkouts and stock market trackers.',
          'Cross-Platform Planning: A strong strategic choice if you intend to launch a mobile version of your product later, as much of the core frontend logic can transition to React Native.'
        ]}
      />



    </>
  );
}