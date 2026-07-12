import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSRealProjectsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Production Layout Specifications & Real-World Projects</DocTitle>

            <DocP>
                Real-World Projects turn theoretical layout design systems into scalable frontend components. Managing enterprise interfaces—such as responsive dashboard grids, fluid e-commerce product matrices, multi-state admin panels, and cross-browser navbar drawers—requires combining modern layout engines (Flexbox, Grid), variable-driven token systems, and defensive UI behaviors to keep applications fast, reliable, and bug-free at scale.
            </DocP>

            <DocH2>The Application Layout Blueprint Matrix</DocH2>

            <DocH3>1. Data-Dense Dashboards & Admin Panels</DocH3>
            <DocList
                items={[
                    'The Asymmetric Holy-Grail Grid: Composes global application boundaries by dividing interfaces into a sticky top navigation header, a collapsible sidebar drawer, and a fluid main workspace channel using explicit <code>grid-template-areas</code>.',
                    'Data Widget Grid Containment: Leverages auto-fitting grid templates (<code>repeat(auto-fit, minmax(280px, 1fr))</code>) to ensure data visualization cards rearrange dynamically across viewport changes without requiring media queries.'
                ]}
            />



            <DocH3>2. Fluid E-Commerce UIs & Product Galleries</DocH3>
            <DocList
                items={[
                    'Aspect-Ratio Containment Tracks: Utilizes the native <code>aspect-ratio: 1 / 1</code> or <code>4 / 3</code> specifications on dynamic asset frames to reserve spatial dimensions before media loads, preventing Cumulative Layout Shift (CLS).',
                    'Flexbox Price Tag Mappings: Employs alignment hooks (<code>margin-top: auto</code>) inside item loops to lock actionable CTA anchors perfectly to the bottom of cards, regardless of varying product description heights.'
                ]}
            />

            <DocH3>3. Responsive Navbars & Component Libraries</DocH3>
            <DocList
                items={[
                    'Fluid Transformation Wrappers: Combines absolute layout masks with CSS transition curves to handle the shift from wide desktop navigation links into touch-friendly mobile drawer menus.',
                    'Design Token Component Contracts: Distributes isolated, self-contained layout variables to individual components, ensuring buttons, pricing boxes, and form inputs look consistent across the entire platform.'
                ]}
            />

            <DocH2>Enterprise Production Architecture Blueprint</DocH2>
            <DocP>
                Below is a production-grade layout implementation detailing a unified **E-Commerce Analytics & Application Workspace Dashboard** built using clean modern CSS layout rules and responsive component patterns:
            </DocP>

            <DocH3>1. The Comprehensive Architecture Matrix Core (projects-mesh.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION APPLICATION ARCHITECTURE WORKSPACE SHEET
   ======================================================= */

/* A. APPLICATION HOLY-GRAIL GRID LAYER */
.project-dashboard-frame {
  display: grid;
  grid-template-areas: 
    "navbar navbar"
    "sidebar main";
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr;
  min-height: 100vh;
  background-color: oklch(0.99 0.005 240);
  font-family: system-ui, -apple-system, sans-serif;
}

/* Responsive breakpoint adjusting column assignments */
@media (max-width: 768px) {
  .project-dashboard-frame {
    grid-template-areas: 
      "navbar"
      "main";
    grid-template-columns: 1fr;
  }
}

/* B. COMPONENT BLOCK LAYOUT LAYER */
.project-navbar {
  grid-area: navbar;
  background-color: #ffffff;
  border-bottom: 1px solid oklch(0.9 0.01 240);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.project-sidebar {
  grid-area: sidebar;
  background-color: #ffffff;
  border-right: 1px solid oklch(0.9 0.01 240);
  padding: 24px;
}

@media (max-width: 768px) {
  .project-sidebar {
    display: none; /* Collapses structural sidebar navigation rails on small viewports */
  }
}

.project-main-workspace {
  grid-area: main;
  padding: 32px;
  overflow-y: auto;
}

/* C. AUTO-FIT MULTI-COLUMN DATA MATRIX */
.project-data-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

/* D. ACCENT PRODUCT CARD BOUNDARY (SRP DESIGN RULES) */
.project-product-card {
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

.project-product-card__media-frame {
  aspect-ratio: 16 / 10;
  background-color: oklch(0.95 0.01 240);
  width: 100%;
}

.project-product-card__content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-product-card__cta {
  margin-top: auto; /* Clean alignment mechanism locking actions to bottom boundary */
  background-color: oklch(0.55 0.18 250);
  color: #ffffff;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.project-product-card__cta:hover {
  opacity: 0.9;
}`}
            />

            <DocH3>2. Layout Implementation View (RealProjectsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './projects-mesh.css';

export default function RealProjectsWorkspace() {
  return (
    <div className="project-dashboard-frame text-xs">
      
      {/* 1. Header Navigation Component Shell */}
      <header className="project-navbar">
        <div className="font-bold text-sm text-gray-900 tracking-tight">Enterprise Console</div>
        <nav className="flex items-center gap-4 text-gray-600 font-medium">
          <span className="cursor-pointer hover:text-blue-600">Dashboard</span>
          <span className="cursor-pointer hover:text-blue-600">Inventory</span>
        </nav>
      </header>

      {/* 2. Collapsible Left Navigation Column */}
      <aside className="project-sidebar space-y-3">
        <div className="font-mono text-[10px] text-gray-400 uppercase font-bold tracking-wider">Navigation Rails</div>
        <ul className="space-y-2 text-gray-700 font-medium">
          <li className="p-2 bg-blue-50 text-blue-700 rounded-md font-bold cursor-pointer">Live Workspace</li>
          <li className="p-2 hover:bg-gray-50 rounded-md cursor-pointer">Analytics Stream</li>
          <li className="p-2 hover:bg-gray-50 rounded-md cursor-pointer">System Clusters</li>
        </ul>
      </aside>

      {/* 3. Fluid Main Application Workspace Pane */}
      <main className="project-main-workspace">
        <div className="border-b pb-4">
          <h2 className="text-base font-bold text-gray-900">System Inventory Cluster</h2>
          <p className="text-gray-500 mt-0.5">Responsive item cards built using multi-column fluid grids and aspect-ratio layouts.</p>
        </div>

        {/* Dynamic Auto-Fit Product Cards Grid Container */}
        <div className="project-data-matrix">
          
          {[1, 2, 3].map((nodeId) => (
            <article key={nodeId} className="project-product-card shadow-sm">
              {/* Media Block maintaining structural spatial anchors to protect Core Web Vitals */}
              <div className="project-product-card__media-frame flex items-center justify-center text-gray-400 font-mono text-[10px]">
                IMAGE_ASSET_FRAME_MOCK
              </div>
              
              <div className="project-product-card__content">
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 mb-1">Node SKU-{nodeId}00x</span>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Telemetry Cluster Router Alpha</h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  This card utilizes <code>margin-top: auto</code> layout configurations to lock the actionable click targets down uniformly.
                </p>
                <div className="project-product-card__cta">
                  Provision Engine
                </div>
              </div>
            </article>
          ))}

        </div>
      </main>

    </div>
  );
}`}
            />
        </>
    );
}