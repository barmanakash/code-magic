import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLCanvasDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Canvas: Bitmapped Scripting Surfaces, Immediate-Mode Rendering, and Dynamic Graphics</DocTitle>

            <DocP>
                The <code>&lt;canvas&gt;</code> element provides an empty, scriptable bitmapped surface used to render immediate-mode 2D graphics, complex visualizations, asset charts, and high-performance animations. Unlike SVG, which creates a structured DOM node for every shape, Canvas uses a pixel-based grid. This requires you to draw objects programmatically using JavaScript, resulting in high rendering efficiency for data matrices and interactive graphic designs.
            </DocP>

            <DocH2>The Canvas Rendering Architecture</DocH2>

            <DocH3>1. The Canvas Element Primitive</DocH3>
            <DocList
                items={[
                    'Dimensions: Managed using explicit HTML attributes (<code>width</code> and <code>height</code>). Avoid setting these dimensions through CSS, as doing so will stretch or warp the rendering pixels instead of expanding the underlying pixel canvas.',
                    'Fallback Content: Any content nested between the opening and closing canvas tags serves as an accessibility backup for screen readers or outdated browser profiles that cannot parse the element.'
                ]}
            />

            <DocH3>2. Initializing the 2D Graphics Context</DocH3>
            <DocP>
                To start drawing on the canvas, JavaScript must access the document node and instantiate its internal drawing tool, known as the **Rendering Context**:
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const canvasElement = document.getElementById('telemetry-canvas');
// Accessing the standard 2D immediate-mode rendering API
const ctx = canvasElement.getContext('2d');`}
            />



            <DocH2>Core Drawing APIs: Shapes, Text, and Images</DocH2>

            <DocH3>1. Drawing Geometric Patches and Vector Paths</DocH3>
            <DocList
                items={[
                    'Rectangles: Built using instant layout tools like <code>ctx.fillRect(x, y, w, h)</code> for filled shapes, <code>ctx.strokeRect()</code> for outlines, and <code>ctx.clearRect()</code> to wipe pixels clean.',
                    'Paths & Curves: Created by declaring structural changes using <code>ctx.beginPath()</code>, shifting the drawing target with <code>ctx.moveTo(x, y)</code>, drawing vector paths with <code>ctx.lineTo(x, y)</code> or <code>ctx.arc()</code>, and committing the pixels to the screen using <code>ctx.fill()</code> or <code>ctx.stroke()</code>.'
                ]}
            />

            <DocH3>2. Rendering Raster Images and Styled Typography</DocH3>
            <DocList
                items={[
                    'Typography Matrix: Handled using configurations like <code>ctx.font = "bold 12px sans-serif"</code> and positioning text on the screen using <code>ctx.fillText("String", x, y)</code> or <code>ctx.strokeText()</code>.',
                    'Image Processing: Integrates external image assets using <code>ctx.drawImage(imageObject, x, y, width, height)</code>. This operation can only be executed after the asset\'s file buffer has successfully finished loading.'
                ]}
            />

            <DocH2>The Immediate-Mode Animation Loop</DocH2>
            <DocP>
                Because Canvas operates in immediate-mode, moving a shape across the screen requires you to clear the old pixels and redraw the entire scene in its new position on every frame. To build highly responsive, performance-optimized animations without draining hardware resources, developers use the native browser window ticking loop:
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function executeRenderLoop() {
  // 1. Wipe the entire grid context clean to prep for the next frame
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  
  // 2. Adjust position variables and redraw shapes
  drawSystemMatrixNodes();
  
  // 3. Request the browser to queue this paint operation for the next monitor refresh cycle
  requestAnimationFrame(executeRenderLoop);
}`}
            />

            <DocH2>Production-Grade Canvas Implementation Blueprint</DocH2>
            <DocP>
                Below is a fully validated, self-contained HTML structure alongside a production-ready, highly interactive React workspace component that implements cross-browser pixel management and custom animation loops:
            </DocP>

            <DocH3>1. Scalable Markup Container Shell (canvas-surface.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="c-canvas-container" style="max-width: 100%; overflow: hidden;">
  
  <canvas 
    id="telemetry-display-canvas" 
    width="400" 
    height="200" 
    class="c-render-board"
    style="display: block; width: 100%; height: auto; background-color: #0f172a;">
    
    <div class="c-canvas-fallback-alert" role="region" aria-live="polite">
      <p>Your current browser agent does not support canvas rendering pipelines.</p>
      <p>Active System Configuration Target: Cluster Matrix ap-south-1 Core Baseline logs.</p>
    </div>
    
  </canvas>
  
</div>`}
            />

            <DocH3>2. Interactive Canvas Workspace (HTMLCanvasWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useRef, useEffect, useState } from 'react';

export default function HTMLCanvasWorkspace() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const directionRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      // A. WIPE CONTEXT LAYER
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // B. DRAW BACKGROUND ARCHITECTURE GRID
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      for (let i = 20; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      // C. RENDER STRUCTURAL ACCESSIBILITY TEXT DATA
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('CANVAS_MATRIX_SYSTEM: ACTIVE', 12, 20);

      // D. DRAW DYNAMIC GEOMETRIC PATCH NODE
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(12, 35, 80, 25);
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px sans-serif';
      ctx.fillText('Static Block', 22, 51);

      // E. DRAW DYNAMIC VECTOR PATH CIRCLE
      ctx.beginPath();
      ctx.arc(320, 47, 15, 0, 2 * Math.PI);
      ctx.fillStyle = '#10b981';
      ctx.fill();
      ctx.strokeStyle = '#047857';
      ctx.lineWidth = 2;
      ctx.stroke();

      // F. CALCULATE AND DRAW RENDER FRAME ANIMATION SHAPE
      if (isAnimating) {
        positionRef.current += 2 * directionRef.current;
        if (positionRef.current > 180 || positionRef.current < 0) {
          directionRef.current *= -1; // Reverse directional trajectory on boundary crash
        }
      }

      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(120 + positionRef.current, 120, 12, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#f8fafc';
      ctx.font = '9px monospace';
      ctx.fillText('⚙️ Telemetry_Stream_Node', 12, 160);

      // LOOP NEXT FRAME REFUSE TICK
      animationRef.current = requestAnimationFrame(render);
    };

    // Initialize layout display instance
    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Canvas Immediate-Mode Workspace</h3>
        <p className="text-gray-500 mt-1">
          Toggle the animation controls loop to process pixel updates inside the drawing layer.
        </p>
      </header>

      {/* Canvas Controls Dashboard Module Wrapper */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative flex flex-col items-center">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Live Canvas Pipeline
        </div>

        {/* The Native Interactive Canvas Interface Screen */}
        <div className="w-full border rounded-xl overflow-hidden bg-slate-950 mt-4 shadow-inner">
          <canvas 
            ref={canvasRef} 
            width={400} 
            height={180} 
            className="w-full h-auto block"
          />
        </div>

        {/* Real-time Interaction Frame Dashboard Controller */}
        <div className="w-full flex justify-between items-center border-t pt-4">
          <span className="font-mono text-[10px] text-gray-500">
            Loop Pipeline Engine: <strong className={isAnimating ? 'text-emerald-600' : 'text-amber-600'}>{isAnimating ? 'RUNNING' : 'PAUSED'}</strong>
          </span>
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className={\`px-4 py-2 rounded-lg font-bold shadow-sm transition-colors \${
              isAnimating ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }\`}
          >
            {isAnimating ? 'Halt Animation Loop' : 'Initialize Animation Loop'}
          </button>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}