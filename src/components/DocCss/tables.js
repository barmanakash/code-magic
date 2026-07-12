import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSTablesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Table Formatting & Data Box Layouts</DocTitle>

            <DocP>
                The CSS Table rendering engine controls how tabular structures, cells, columns, and data matrices calculate boundaries and align borders. Although modern web interfaces rely on Grid and Flexbox for general page layouts, traditional CSS table properties are essential for rendering high-density data sheets, analytics summaries, and administrative ledgers with predictable spacing and alignment.
            </DocP>

            <DocH2>Table Formatting Property Matrix</DocH2>

            <DocH3>1. Border Resolution Models & Spacing</DocH3>
            <DocList
                items={[
                    'border-collapse: Dictates whether adjacent cell borders merge into a single shared frame or remain isolated. Values include separate (each cell maintains individual, detached borders) and collapse (overlapping cell borders merge into a single visual grid line, matching standard modern data sheet designs).',
                    'border-spacing: Configures the distance between adjacent cell borders when border-collapse is explicitly set to separate. It accepts horizontal and vertical length parameters (e.g., border-spacing: 8px 12px;).'
                ]}
            />



            <DocH3>2. Layout Calculation Strategies</DocH3>
            <DocList
                items={[
                    'table-layout: Controls the sizing algorithm used by the browser to draw column widths. This property directly impacts page load performance and visual layout stability:',
                    'table-layout: auto (Default): The browser scans the contents of every single cell across the entire table to compute optimal column widths. While highly adaptive, large datasets can trigger significant layout shifts and slow down page rendering.',
                    'table-layout: fixed: The browser calculates column widths based strictly on the explicit widths set on the first row or the <table> element itself. It ignores individual cell text volumes entirely, allowing the table to render instantly and preventing layout shifts. It is highly recommended for high-performance dashboards.'
                ]}
            />

            <DocH3>3. Specialized Structural Elements</DocH3>
            <DocList
                items={[
                    'caption-side: Positions the structural table title block element (<caption>). Options include top (renders text immediately above the header fields) and bottom (renders text beneath the data matrix layout).',
                    'empty-cells: Dictates whether cells with absolutely no visible content or whitespace characters render their borders and background fields when working under the border-collapse: separate; formatting context (show or hide).'
                ]}
            />

            <DocH2>Production High-Performance Data Matrix Blueprint</DocH2>
            <DocP>
                Below is a production-grade data layout module implementing high-performance fixed scaling, merged border lines, sticky headers, and text truncation constraints:
            </DocP>

            <DocH3>1. The Tabular Engine Module Sheet (tables-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION HIGH-PERFORMANCE DATA TABLE ARCHITECTURE
   ======================================================= */

.data-table-wrapper {
  width: 100%;
  overflow-x: auto; /* Guarantees mobile scroll-wrapping safety */
  border-radius: 8px;
  border: 1px solid oklch(0.9 0.01 240);
  background-color: #ffffff;
}

.enterprise-data-sheet {
  width: 100%;
  /* CRITICAL PERFORMANCE DUO: Collapses double borders and applies fixed layout math */
  border-collapse: collapse;
  table-layout: fixed; 
  
  font-size: 0.825rem;
  text-align: left;
}

/* DECLARATIVE POSITION POSITION ALIGNMENT ON COLUMN WIDTHS */
.enterprise-data-sheet th.col-id       { width: 80px; }
.enterprise-data-sheet th.col-payload  { width: 260px; }
.enterprise-data-sheet th.col-metric   { width: 120px; }
.enterprise-data-sheet th.col-status   { width: 100px; }

.enterprise-data-sheet th {
  background-color: oklch(0.97 0.01 240);
  color: oklch(0.25 0.02 240);
  font-weight: 600;
  padding: 12px 16px;
  border-bottom: 2px solid oklch(0.88 0.01 240);
  
  /* Enables sticky header rows for long vertical data lists */
  position: sticky;
  top: 0;
  z-index: 5;
}

.enterprise-data-sheet td {
  padding: 12px 16px;
  color: oklch(0.4 0.02 240);
  border-bottom: 1px solid oklch(0.92 0.01 240);
}

/* DATA CONTAINMENT SAFEGUARDS IN FIXED LAYOUTS */
.enterprise-data-sheet .truncated-cell-payload {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Forces text truncation if string outgrows defined column width */
}

/* CAPTION STYLING */
.enterprise-data-sheet caption {
  caption-side: bottom;
  padding: 12px;
  font-size: 0.7rem;
  color: oklch(0.55 0.01 240);
  text-align: right;
  background-color: oklch(0.99 0.005 240);
}`}
            />

            <DocH3>2. Layout Implementation View (DataTableWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './tables-engine.css';

interface TelemetryRow {
  id: string;
  payloadToken: string;
  latency: string;
  status: 'ACTIVE' | 'ROUTING';
}

const mockData: TelemetryRow[] = [
  { id: '104A', payloadToken: 'auth_session_token_sec_ctx_992x8a1c94b2f1z4', latency: '4.12 ms', status: 'ACTIVE' },
  { id: '104B', payloadToken: 'auth_session_token_sec_ctx_110v4m2s8f9e3k5o', latency: '12.81 ms', status: 'ROUTING' },
  { id: '104C', payloadToken: 'auth_session_token_sec_ctx_743q9p8o1w2e0r4t', latency: '6.45 ms', status: 'ACTIVE' }
];

export default function DataTableWorkspace() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="data-table-wrapper shadow-sm">
        
        <table className="enterprise-data-sheet">
          <caption>Cluster Telemetry Feed Registry // Index Updated Realtime</caption>
          
          <thead>
            <tr>
              <th className="col-id">Node ID</th>
              <th className="col-payload">Payload Frame Token</th>
              <th className="col-metric">Latency Axis</th>
              <th className="col-status">State</th>
            </tr>
          </thead>
          
          <tbody>
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="font-mono font-bold text-gray-800">{row.id}</td>
                <td>
                  {/* Fixed layout tracking cell wrapping safeguards */}
                  <span className="truncated-cell-payload" title={row.payloadToken}>
                    {row.payloadToken}
                  </span>
                </td>
                <td className="font-mono text-emerald-600 font-medium">{row.latency}</td>
                <td>
                  <span className={\`p-1 px-2 rounded text-[10px] font-bold \${
                    row.status === 'ACTIVE' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                  }\`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}`}
            />
        </>
    );
}