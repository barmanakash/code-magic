import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLTablesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Tables: Structural Grid Architecture, Data Relationships, and Accessibility</DocTitle>

            <DocP>
                HTML tables are powerful semantic structures designed specifically for presenting multi-dimensional, tabular data. While layout tables (using tables for web page design) are obsolete and heavily penalized for accessibility issues, structured semantic data tables are crucial. They allow user agents, screen readers, and database scrapers to map columns, rows, headers, and individual data cells into a cohesive logical grid.
            </DocP>

            <DocH2>Anatomy of a Semantic Data Table</DocH2>

            <DocH3>1. Core Row and Cell Elements</DocH3>
            <DocList
                items={[
                    'table: The parent wrapper container that initializes the table rendering context.',
                    'tr (Table Row): Defines a horizontal row of cells.',
                    'th (Table Header): Defines a header cell, typically rendered in bold and centered by default. It is crucial to assign the scope attribute (scope="col" or scope="row") to explicitly declare if it headings a column or a row, ensuring screen readers read the data in the correct context.',
                    'td (Table Data): Represents a standard table data cell containing text, links, or media.',
                    'caption: Provides a visible title or description for the table. It must be placed immediately after the opening <table> tag.'
                ]}
            />

            <DocH3>2. Structural Grouping Elements</DocH3>
            <DocP>
                Grouping elements categorize rows into logical blocks, which helps the browser style and print large, multi-page tables cleanly:
            </DocP>
            <DocList
                items={[
                    'thead: Wraps the header rows, remaining pinned at the top of the table viewport.',
                    'tbody: Wraps the primary body rows containing the actual data.',
                    'tfoot: Wraps summary rows, calculation results, or totals at the bottom.'
                ]}
            />



            <DocH2>Spanning Grid Cells: Colspan & Rowspan</DocH2>
            <DocP>
                To create complex structures where cells span across multiple grid spaces, HTML provides two key spanning attributes:
            </DocP>
            <DocList
                items={[
                    'colspan: Specifies the integer number of columns a single cell should stretch horizontally (e.g., colspan="3" merges three adjacent cells in the same row).',
                    'rowspan: Specifies the integer number of rows a single cell should stretch vertically down (e.g., rowspan="2" merges two cells vertically in the same column).'
                ]}
            />
            <blockquote>
                <strong>Layout Calculation Warning:</strong> When applying spanning attributes, you must decrease the number of standard cells (<code>&lt;td&gt;</code> or <code>&lt;th&gt;</code>) in adjacent positions or subsequent rows. Failing to do so will push remaining cells out, breaking the table grid layout.
            </blockquote>

            <DocH2>Production-Grade Table Implementation</DocH2>
            <DocP>
                Below is a production-level, fully validated, and accessible HTML5 table demonstration featuring colspans, rowspans, and explicit headers:
            </DocP>

            <DocH3>1. Complete Semantic Table Structure (table-production.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="c-table-wrapper" tabindex="0">
  <table class="c-data-table">
    <caption>System Telemetry Core Memory Registry Log</caption>

    <thead class="c-data-table__head">
      <tr>
        <th scope="col">Cluster Region</th>
        <th scope="col">Node Endpoint</th>
        <th scope="col">Average Latency</th>
        <th scope="col">Security Level</th>
      </tr>
    </thead>

    <tbody class="c-data-table__body">
      <tr>
        <td rowspan="2" class="u-text-semibold">ap-south-1</td>
        <td>api.node-alpha.com</td>
        <td>12ms</td>
        <td class="u-badge u-badge--high">High</td>
      </tr>
      <tr>
        <td>api.node-beta.com</td>
        <td>15ms</td>
        <td class="u-badge u-badge--high">High</td>
      </tr>
      <tr>
        <td>us-east-2</td>
        <td>api.node-gamma.com</td>
        <td>48ms</td>
        <td class="u-badge u-badge--medium">Medium</td>
      </tr>
    </tbody>

    <tfoot class="c-data-table__foot">
      <tr>
        <td colspan="2" scope="row">Average Latency Baseline</td>
        <td colspan="2" class="u-highlight-val">25ms (All Clusters)</td>
      </tr>
    </tfoot>
  </table>
</div>`}
            />

            <DocH3>2. Layout Integration View (HTMLTablesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLTablesWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Table Constructor</h3>
        <p className="text-gray-500 mt-1">
          Observe how the browser parses and renders row headers, column span totals, and vertical row spans.
        </p>
      </header>

      {/* Interactive Table Mock */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Table DOM Renderer
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[11px]">
            <caption className="text-[10px] text-gray-400 font-mono text-left mb-2 font-bold uppercase tracking-wider">
              System Uptime Registry
            </caption>
            
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
              <tr>
                <th scope="col" className="p-2 border border-slate-100">Zone</th>
                <th scope="col" className="p-2 border border-slate-100">Host</th>
                <th scope="col" className="p-2 border border-slate-100">Uptime</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td rowSpan={2} className="p-2 border border-slate-100 bg-slate-50/50 font-bold text-blue-700">
                  Zone Alpha
                </td>
                <td className="p-2 border border-slate-100">prod-web-01</td>
                <td className="p-2 border border-slate-100 text-emerald-600 font-semibold">99.98%</td>
              </tr>
              <tr>
                {/* Spanned column cell skipped */}
                <td className="p-2 border border-slate-100">prod-web-02</td>
                <td className="p-2 border border-slate-100 text-emerald-600 font-semibold">99.99%</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-100 bg-slate-50/50 font-bold text-blue-700">
                  Zone Beta
                </td>
                <td className="p-2 border border-slate-100">prod-db-01</td>
                <td className="p-2 border border-slate-100 text-amber-600 font-semibold">99.90%</td>
              </tr>
            </tbody>

            <tfoot className="bg-slate-50 font-bold text-slate-700">
              <tr>
                <td colSpan={2} className="p-2 border border-slate-100">Overall Target Status</td>
                <td className="p-2 border border-slate-100 text-blue-600">Optimal</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Accessibility Guidelines */}
        <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-1.5 text-indigo-950">
          <span className="font-bold text-indigo-900 text-[10px] uppercase block">Accessibility Checklist</span>
          <ul className="list-disc pl-4 text-[11px] space-y-1">
            <li>Always assign the <code>scope="col"</code> or <code>scope="row"</code> attributes on your <code>&lt;th&gt;</code> elements so screen readers map headers correctly.</li>
            <li>Wrap tables in responsive containers (using CSS <code>overflow-x: auto;</code>) to avoid breaking mobile page layouts.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}