import React, { lazy, Suspense } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function RoutingDoc() {
    return (
        <>
            <DocTitle eyebrow="Navigation Engine">Routing (React Router)</DocTitle>

            <DocP>
                Routing acts as the navigation spinal cord of a Single Page Application (SPA). It maps external browser URL addresses directly onto explicit React component structures without forcing traditional, heavy server-side page reloads.
            </DocP>

            <DocH2>Core Component Layer</DocH2>
            <DocList
                items={[
                    'BrowserRouter: The foundational context provider wrapper that synchronizes your application views with the standard HTML5 history API layout.',
                    'Routes: The centralized routing core engine component that evaluates all child Route paths against the modern window URL address to pick the optimal view matching sequence.',
                    'Route: A declarations mapping block that accepts a path string attribute and a corresponding target element prop to compile when hit.',
                    'Link: The standard declarative replacement tag for anchor tags (<a>) that intercepts default browser link behaviors to execute completely soft in-memory SPA transitions.',
                    'NavLink: A specialized wrapper variant of the Link tag that automatically tracks active styling behaviors by injecting an explicit active utility class name whenever its path destination matches the URL.'
                ]}
            />

            <DocH2>Advanced Architecture Configurations</DocH2>
            <DocList
                items={[
                    'Nested Routes: The design approach of placing Route nodes inside another Route block to compose layout sections across sub-dashboards.',
                    'Outlet: A unique placeholder slot element used inside parent layout views to designate precisely where child nested views must render.',
                    'Dynamic Paths & Params: Routes constructed with variable segments (e.g., path="/user/:userId"). The value is pulled via the useParams() hook interface.',
                    'Query Params: Reading unstructured trailing key-value query strings from URLs (e.g., ?search=react) cleanly using the useSearchParams() state hook configuration.',
                    'Protected Routes: A wrapper component layout that evaluates current authentication states before either outputting the requested view or executing a soft Navigate forward redirect.',
                    'Lazy Loading (Code Splitting): Merging React.lazy() alongside Suspense blocks to dynamically stream split chunks of route views only when explicitly hit, shrinking initial bundle sizes.'
                ]}
            />

            <DocH2>Unified Architecture Implementation</DocH2>
            <DocP>
                Below is a complete enterprise routing flow example detailing dynamic configurations, nesting architectures, protected route wrappers, and lazy loaded code blocks:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, useParams, useSearchParams, Navigate } from 'react-router-dom';

// 1. Lazy loaded chunks for optimal initial bundle sizes
const DashboardHome = lazy(() => import('./pages/DashboardHome'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

// 2. Authentication Gate (Protected Route Pattern)
function ProtectedLayout({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="dashboard-wrapper">
      <nav>
        <NavLink to="/dashboard" end>Home</NavLink>
        <NavLink to="/dashboard/users/akash">My Profile</NavLink>
      </nav>
      <hr />
      {/* Outlet marks the exact spot child route layouts assemble inside */}
      <Suspense fallback={<div>Loading Sub-View Component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

// 3. Dynamic Sub-View handling Params and Query Strings
function UserDetailsView() {
  const { username } = useParams(); // Extracts dynamic URL tokens
  const [searchParams] = useSearchParams(); // Reads URL trailing queries (?status=active)
  const filterType = searchParams.get('filter') || 'none';

  return (
    <div>
      <h4>User Profile: {username}</h4>
      <p>Applied Query Filter Parameter: {filterType}</p>
    </div>
  );
}

// 4. Central Application Core Router Setup
export default function AppNavigationEngine() {
  const userLoggedInStatus = true; // Hardcoded fallback context authentication flag

  return (
    <BrowserRouter>
      <header>
        <Link to="/">Landing Home</Link> | <Link to="/dashboard">Dashboard</Link>
      </header>

      <Routes>
        {/* Simple Standalone Route */}
        <Route path="/" element={<h3>Welcome to Code Magic Production Hub</h3>} />
        <Route path="/login" element={<h3>Public Credentials Gateway Page</h3>} />

        {/* Protected Nested Routing Cluster Architecture */}
        <Route path="/dashboard" element={<ProtectedLayout isAuthenticated={userLoggedInStatus} />}>
          <Route index element={<DashboardHome />} />
          <Route path="users/:username" element={<UserDetailsView />} />
        </Route>

        {/* Catch-All Fallback Route */}
        <Route path="*" element={<h3>404 Error: Gateway Route Destination Missing</h3>} />
      </Routes>
    </BrowserRouter>
  );
}`}
                </code>
            </pre>
        </>
    );
}