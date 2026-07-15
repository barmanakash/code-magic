import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLInputTypesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Input Types: Client-Side Constraints, Input Validation, and Mobile Keyboards</DocTitle>

            <DocP>
                The <code>&lt;input&gt;</code> element is the foundational primitive for web forms. By configuring its <code>type</code> attribute, you instruct the browser engine how to store form data, enforce client-side validation rules, and optimize mobile layouts by triggering specialized virtual keyboards.
            </DocP>

            <DocH2>Text, Security, and Specialized Alphanumeric Input Types</DocH2>

            <DocH3>1. Standard Core Strings</DocH3>
            <DocList
                items={[
                    'text: The default, single-line text box. It captures arbitrary string data without forcing formatting constraints.',
                    'password: Masks input characters visually using dots or asterisks. Modern security requires assigning the <code>autocomplete="current-password"</code> or <code>new-password</code> attributes to help password managers autofill securely.',
                    'search: Functions identically to standard text inputs but provides optimization tweaks like a quick "clear text" close icon and maps natively to the "search" action key on mobile keyboards.'
                ]}
            />

            <DocH3>2. Semantic Structured Syntaxes</DocH3>
            <DocList
                items={[
                    'email: Enforces structural string checks, verifying if the entered text includes an @ symbol and a domain extension. It automatically triggers the email-optimized keyboard layout on mobile devices.',
                    'url: Validates that the input contains a absolute network protocol scheme (e.g., https://), changing the mobile keyboard spacebar to include shortcuts like "." and ".com".',
                    'tel: Designed for telephone numbers. It does not enforce a rigid format because phone number patterns vary globally, but it automatically opens a phone keypad layout on mobile devices.'
                ]}
            />

            <DocH3>3. Numeric & Range Bound Adjustments</DocH3>
            <DocList
                items={[
                    'number: Restricts input strictly to floating-point numbers or integers. It includes small up/down arrows in the input field and accepts bounding constraints like <code>min</code>, <code>max</code>, and <code>step</code> values.',
                    'range: Renders as a slider control interface. Instead of requiring precise numerical typing, it captures approximate numeric data mapped between strict <code>min</code> and <code>max</code> parameters.'
                ]}
            />



            <DocH2>Chronological & Selection Types</DocH2>

            <DocH3>1. Date & Time Selection Inputs</DocH3>
            <DocP>
                HTML5 includes built-in calendar and picker inputs that remove the need for heavy external JavaScript picker libraries:
            </DocP>
            <div className="overflow-x-auto my-4 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Input Type</th>
                            <th className="p-3">Data Format Returned</th>
                            <th className="p-3">Browser Control Interface</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">date</td>
                            <td className="p-3 font-mono">YYYY-MM-DD</td>
                            <td className="p-3">Launches a native calendar sheet to select a specific day.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">time</td>
                            <td className="p-3 font-mono">HH:MM (24-hour clock)</td>
                            <td className="p-3">Launches a rolling time selector panel.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">datetime-local</td>
                            <td className="p-3 font-mono">YYYY-MM-DDTHH:MM</td>
                            <td className="p-3">Combines date and time into a single synchronized interface, adjusting to the user\'s local timezone.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">month</td>
                            <td className="p-3 font-mono">YYYY-MM</td>
                            <td className="p-3">Limits selection strictly to a full month and year.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">week</td>
                            <td className="p-3 font-mono">YYYY-Www</td>
                            <td className="p-3">Limits selection to an entire calendar week index.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH3>2. Boolean Options & Data Ingestion Controls</DocH3>
            <DocList
                items={[
                    'checkbox: Represents a binary toggle option. Multiple checkboxes can be linked together under the same <code>name</code> attribute to let users select more than one choice.',
                    'radio: Used for mutually exclusive options. Grouping multiple radio tags under the same identical <code>name</code> attribute ensures that selecting one option automatically unchecks the others in that set.',
                    'color: Opens the operating system\'s native hexadecimal color palette window, returning hex string values (e.g., #0024ff).',
                    'file: Allows users to upload files from their device storage. You can configure it using the <code>accept</code> attribute to restrict uploads to specific file extensions, or add the <code>multiple</code> boolean to let users upload several files at once.'
                ]}
            />

            <DocH2>Form Control Actions & Structural Tokens</DocH2>
            <DocList
                items={[
                    'hidden: Stores internal data strings (such as CSRF security tokens or database primary IDs) inside the form layout. The field is completely hidden from the user\'s view, but its value is submitted alongside the rest of the form.',
                    'submit: Renders a primary execution button that triggers the parent form\'s submit action, gathering all fields and passing them to the destination defined in the form\'s <code>action</code> attribute.',
                    'reset: Resets all interactive input elements within the parent form back to their original default values. Use this carefully, as it can accidentally wipe out a user\'s entered data.',
                    'button: Renders a generic, standard clickable button. It has no default actions inside a form, making it a clean target for linking custom JavaScript click events.',
                    'image: Converts a graphic image asset into a functional submit action element (e.g., <input type="image" src="submit.png" alt="Submit Form">). When clicked, it also submits the precise X and Y coordinates of where the mouse cursor clicked on the image.'
                ]}
            />

            <DocH2>Production Form Grid Architecture Blueprint</DocH2>
            <DocP>
                Below is a production-grade, highly accessible HTML5 form showcasing input verification attributes, semantic layouts, and action groupings:
            </DocP>

            <DocH3>1. Core Interactive Validation Form (form-types-spec.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<form action="/api/v1/telemetry/nodes" method="POST" enctype="multipart/form-data" class="c-form-grid">

  <input type="hidden" name="security_token" value="tkn_2026_cluster_908" />

  <div class="c-form-group">
    <label for="node-name">System Node Code</label>
    <input type="text" id="node-name" name="node_name" required placeholder="e.g. ap-south-20" class="c-input" />
  </div>

  <div class="c-form-group">
    <label for="admin-email">Administrator Email</label>
    <input type="email" id="admin-email" name="admin_email" required autocomplete="email" placeholder="ops@enterprise.com" class="c-input" />
  </div>

  <div class="c-form-group">
    <label for="sync-schedule">Synchronization Timestamp</label>
    <input type="datetime-local" id="sync-schedule" name="sync_schedule" required class="c-input" />
  </div>

  <div class="c-form-group">
    <label for="cluster-weight">Throughput Threshold (Scale: 1-100)</label>
    <input type="number" id="cluster-weight" name="cluster_weight" min="1" max="100" step="5" value="50" class="c-input" />
  </div>

  <fieldset class="c-form-fieldset">
    <legend>Network Routing Tier</legend>
    <div class="c-choice-row">
      <input type="radio" id="tier-standard" name="routing_tier" value="std" checked />
      <label for="tier-standard">Standard Pipeline</label>
    </div>
    <div class="c-choice-row">
      <input type="radio" id="tier-priority" name="routing_tier" value="pri" />
      <label for="tier-priority">Priority Route</label>
    </div>
  </fieldset>

  <div class="c-form-group">
    <label for="log-dump">Upload Device Log Logs (.txt, .log)</label>
    <input type="file" id="log-dump" name="log_dump" accept=".txt,.log" multiple class="c-input-file" />
  </div>

  <div class="c-form-actions">
    <input type="reset" value="Clear Form Fields" class="c-btn c-btn--secondary" />
    <input type="submit" value="Register System Node" class="c-btn c-btn--primary" />
  </div>

</form>`}
            />

            <DocH3>2. Interactive Forms Sandbox View (HTMLInputTypesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLInputTypesWorkspace() {
  const [rangeVal, setRangeVal] = useState(50);
  const [colorVal, setColorVal] = useState('#0024ff');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Input Controls Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Interact with this workspace panel to test native field behaviors, constraints, and picker engines.
        </p>
      </header>

      {/* Inputs Interaction Module */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Live Input DOM
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-[11px]">
          
          {/* 1. Password & Text Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">type="text"</label>
              <input type="text" placeholder="Standard string" className="w-full bg-slate-50 border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">type="password"</label>
              <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          {/* 2. Chrono Data Node */}
          <div>
            <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">type="datetime-local"</label>
            <input type="datetime-local" className="w-full bg-slate-50 border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono" />
          </div>

          {/* 3. Color & Range Configuration Area */}
          <div className="grid grid-cols-3 gap-3 items-center border-t pt-4">
            <div className="col-span-2">
              <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">
                type="range" ({rangeVal})
              </label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={rangeVal} 
                onChange={(e) => setRangeVal(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">type="color"</label>
              <div className="flex items-center gap-2">
                <input 
                  type="color" 
                  value={colorVal} 
                  onChange={(e) => setColorVal(e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border overflow-hidden bg-transparent"
                />
                <span className="font-mono text-[9px] text-gray-600">{colorVal}</span>
              </div>
            </div>
          </div>

          {/* 4. Binary Toggles Row */}
          <div className="flex gap-6 border-t pt-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-blue-600 rounded" />
              <span>Checkbox Toggle</span>
            </label>
            
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input type="radio" name="sandbox_radio" defaultChecked className="w-3.5 h-3.5 accent-blue-600" />
              <span>Radio Selection</span>
            </label>
          </div>

          {/* 5. Custom Button & Submit Group */}
          <div className="flex gap-3 border-t pt-4">
            <input type="button" value="Generic Button" className="w-1/2 p-2 bg-slate-100 hover:bg-slate-200 border rounded-lg font-bold text-slate-700 cursor-pointer transition-colors" />
            <input type="submit" value="Submit Form" className="w-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold cursor-pointer transition-colors shadow-sm" />
          </div>

        </form>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}