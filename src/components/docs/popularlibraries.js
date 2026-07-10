import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function PopularLibrariesDoc() {
  return (
    <>
      <DocTitle eyebrow="Ecosystem Overview">Popular React Libraries</DocTitle>
      
      <DocP>
        The power of the React ecosystem lies in its vibrant collection of third-party libraries. These highly optimized tools solve common architecture problems, from state routing and form validation to fluid animations and scalable component layouts.
      </DocP>

      <DocH2>Ecosystem Category Matrix</DocH2>
      
      <DocH3>1. Routing & Data Fetching</DocH3>
      <DocList
        items={[
          'React Router: The industry-standard routing engine. It syncs the application UI states directly with browser URLs, handling nested route paths, route loaders, and dynamic link parameters seamlessly.',
          'Axios: A robust Promise-based HTTP client for the browser and Node.js. It features automated JSON transformation, request/response interceptors, connection timeout controls, and built-in CSRF defenses.',
          'TanStack Query (React Query): An advanced, asynchronous state-management engine. It takes complete control over server-state caching, automatic synchronization, deduplication, and stale data garbage collection.',
          'SWR: Vercel\'s lightweight, high-performance data-fetching hook library. It operates on the "Stale-While-Revalidate" cache invalidation strategy, providing instantaneous caching and background revalidation.'
        ]}
      />

      <DocH3>2. State Management</DocH3>
      <DocList
        items={[
          'Redux Toolkit (RTK): The official, opinionated toolset for scalable Redux architectures. It strips away standard boilerplate, incorporating automated immutability tracking via Immer and built-in asynchronous logic handlers like RTK Query.',
          'Zustand: A modern, ultra-lightweight, atomic state management engine. It uses a simple, centralized hook-based store architecture that avoids wrapping components in dense provider trees.'
        ]}
      />

      <DocH3>3. Form Architecture & Validation</DocH3>
      <DocList
        items={[
          'React Hook Form: A high-performance form framework that reduces re-renders by utilizing uncontrolled input references. It integrates flawlessly with external schema validators like Zod or Yup.',
          'Formik: A mature, declarative form helper component suite that simplifies tracking input values, validation states, touched fields, and submission actions.',
          'Zod / Yup: Schema validation utilities. Zod is a TypeScript-first schema declaration tool with automatic type inference, while Yup is a mature object schema validator designed closely with the JavaScript ecosystem.'
        ]}
      />

      <DocH3>4. Component Frameworks & UI Styling</DocH3>
      <DocList
        items={[
          'Tailwind CSS: A utility-first CSS framework that enables rapid user interface assembly directly within JSX string parameters using atomic helper classes.',
          'Material UI (MUI): Google\'s pre-built Material Design system component library. Highly customizable, robust, and feature-rich for modular developer workspaces.',
          'Chakra UI / Mantine / Ant Design: Diverse design philosophies. Chakra delivers intuitive, accessible token-driven structures; Mantine provides comprehensive hook-driven utility primitives; Ant Design delivers massive, enterprise-ready data grids.'
        ]}
      />

      <DocH3>5. Animation Engines</DocH3>
      <DocList
        items={[
          'Framer Motion: A fluid, declarative production animation library for React. It manages smooth orchestrations, gesture recognitions, layout shifts, and component exit/mount transitions automatically.'
        ]}
      />

      <DocH2>Unified Production Implementation</DocH2>
      <DocP>
        Below is a production-grade architecture that showcases **React Hook Form** paired with **Zod validation rules**, a centralized **Zustand store engine**, and styling handled with utility configurations:
      </DocP>

      <DocH3>1. The Central Store Infrastructure (useProfileStore.ts)</DocH3>
      <CodeBlock
        language="typescript"
        code={`import { create } from 'zustand';

interface ProfileState {
  username: string;
  isSynced: boolean;
  commitProfile: (name: string) => void;
}

// Instantiate an atomic Zustand store completely detached from React Context
export const useProfileStore = create<ProfileState>((set) => ({
  username: 'Anonymous User',
  isSynced: false,
  commitProfile: (name) => set({ username: name, isSynced: true }),
}));`}
      />

      <DocH3>2. Form Validation & UI Composability (RegistrationForm.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useProfileStore } from './useProfileStore';

// Define the schema rule contract using Zod with automatic type inference
const registrationSchema = z.object({
  userEmail: z.string().email({ message: 'Provide a valid workspace email hash.' }),
  accessPin: z.string().min(6, { message: 'The access PIN string must contain at least 6 characters.' })
});

type RegistrationFields = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const { username, isSynced, commitProfile } = useProfileStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegistrationFields>({
    resolver: zodResolver(registrationSchema)
  });

  const handleFormExecution = (fields: RegistrationFields) => {
    // Process form metrics and update global state
    commitProfile(fields.userEmail.split('@')[0]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <header className="mb-6">
        <h4 className="text-lg font-bold text-gray-900">Ecosystem Control Panel</h4>
        <p className="text-xs text-gray-500">Current Session Agent: <strong className="text-blue-600">{username}</strong></p>
        {isSynced && <span className="text-xs font-semibold px-2 py-0.5 bg-green-50 text-green-600 rounded">State Synced</span>}
      </header>

      <form onSubmit={handleSubmit(handleFormExecution)} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Agent Access Email</label>
          <input
            type="text"
            {...register('userEmail')}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="akash@domain.com"
          />
          {errors.userEmail && <p className="text-xs text-red-500 mt-1">{errors.userEmail.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Security PIN Code</label>
          <input
            type="password"
            {...register('accessPin')}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••"
          />
          {errors.accessPin && <p className="text-xs text-red-500 mt-1">{errors.accessPin.message}</p>}
        </div>

        {/* Framing dynamic exit/mount states natively using Framer Motion wrappers */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-blue-600 text-white rounded text-sm font-semibold transition-colors hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Syncing...' : 'Lock Form Record'}
        </motion.button>
      </form>
    </div>
  );
}`}
      />
    </>
  );
}