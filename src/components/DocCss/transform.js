import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSTransformDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Coordinate Transformations & 3D Spatial Engines</DocTitle>

            <DocP>
                The CSS Transform engine alters the visual geometric shape, scaling context, orientation, and spatial coordinates of DOM elements along two-dimensional ($X$, $Y$) or three-dimensional ($X$, $Y$, $Z$) planes. Because transforms manipulate the element's rendering layer directly on the GPU without altering its physical layout footprint in the normal document flow, they are highly optimized for building ultra-smooth, 120fps animated interfaces.
            </DocP>

            <DocH2>2D Transform Primitive Matrix</DocH2>

            <DocH3>1. Spatial Vector Functions</DocH3>
            <DocList
                items={[
                    'translate(x, y): Shifts the visual coordinate position of an element along the horizontal and vertical axes. Passing a percentage calculates offsets based on the element\'s own internal physical dimensions (e.g., translate(-50%, -50%)), which is useful for asset centering tricks.',
                    'scale(x, y): Multiplies the structural size scaling factor of an element. A value of 1.0 represents nominal native dimensions; values below 1.0 contract the card, while values above 1.0 scale it up without shifting neighboring blocks.',
                    'rotate(deg/rad/turn): Spins the element around its chosen origin vector anchor point based on standard angle increments (e.g., rotate(45deg) or rotate(0.25turn)).',
                    'skew(x, y): Shears the element along its primary coordinate tracks, tilting its structural lines by a designated angular factor.',
                    'matrix(a, b, c, d, e, f): The fundamental low-level mathematical engine underlying all 2D transformations. It combines translation, scaling, rotation, and shearing configurations into a single chainable affine transformation matrix.'
                ]}
            />



            <DocH3>2. Origin Configuration Anchors</DocH3>
            <DocList
                items={[
                    'transform-origin: Configures the base coordinate anchor point where spatial transformations (specifically rotations and scaling) root themselves. Defaults cleanly to the exact geometric center (50% 50%), but can be mapped to explicit edges or pixel metrics (e.g., transform-origin: left top;).'
                ]}
            />

            <DocH2>3D Transformation Matrices & Depth Fields</DocH2>
            <DocP>
                To break elements out of the flat browser canvas and project them into genuine three-dimensional spatial environments, the rendering engine utilizes depth-axis calculations paired with perspective tracking.
            </DocP>



            <DocH3>3D Mechanics & Depth Activators</DocH3>
            <DocList
                items={[
                    'perspective: Establishes the perceived distance between the user\'s viewport plane and the $Z=0$ space matrix. Applying perspective: 800px; on a parent container activates a real 3D depth field for its nested children.',
                    'translateZ() & rotateX() / rotateY(): Manipulates elements along the spatial depth axis ($Z$-axis) or flips them backward and forward across horizontal and vertical axes, which is essential for building card-flipping interactions.',
                    'transform-style: preserve-3d: Injected onto parent containers to force nested child sub-layers to retain their independent 3D coordinate arrangements rather than flattening flat into a 2D sheet boundary.'
                ]}
            />

            <DocH2>Production-Grade 3D Perspective Blueprint</DocH2>
            <DocP>
                Below is an advanced layout sheet detailing production-grade 3D perspective roots, preserve-3d card structures, axis flips, and GPU-accelerated coordinate centering routines:
            </DocP>

            <DocH3>1. The Spatial Transform Sheet (transform-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION ACCELERATED 3D TRANSFORMATION ENGINE
   ======================================================= */

/* A. 3D INTERACTION ROOT FRAMEWORK CONTAINER */
.perspective-depth-stage {
  /* Activates a 3D coordinate space for all nested child boxes */
  perspective: 1000px;
  width: 100%;
  max-width: 320px;
  margin: 40px auto;
}

/* B. THE MULTI-LAYER PRESERVE-3D INTERACTIVE CARD */
.interactive-flippable-card {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  cursor: pointer;
  
  /* Enforces full 3D layout retention for front and back sub-panels */
  transform-style: preserve-3d;
  
  /* Smooth hardware-accelerated transformation routing */
  will-change: transform;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* TRIGGER THE HORIZONTAL AXIS FLIP ON CONTAINER HOVER */
.perspective-depth-stage:hover .interactive-flippable-card {
  transform: rotateY(180deg);
}

/* C. FACE PANEL SHIELDS CONFIGURATION */
.card-face-panel {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 24px;
  
  /* Hides the structural reverse side of elements when flipped away from the camera */
  backface-visibility: hidden;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-face-panel.is-front {
  background-color: oklch(0.2 0.02 240);
  color: #ffffff;
  border: 1px solid oklch(0.3 0.02 240);
  z-index: 2; /* Locks front sheet to upper visual hierarchy */
}

.card-face-panel.is-back {
  background-color: #ffffff;
  color: oklch(0.2 0.02 240);
  border: 1px solid oklch(0.9 0.01 240);
  
  /* Pre-rotates the rear panel so it faces correctly upon card inversion */
  transform: rotateY(180deg);
}

/* D. STATIC ELEMENT POSITIONING CENTERING VIA TRANSLATE */
.absolute-center-utility {
  position: absolute;
  top: 50%;
  left: 50%;
  /* Shift coordinate frames backward by exactly half of their own width/height boundaries */
  transform: translate(-50%, -50%);
}`}
            />

            <DocH3>2. Layout Implementation View (TransformWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './transform-engine.css';

export default function TransformWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      
      {/* Perspective Stage Box */}
      <div className="perspective-depth-stage">
        <div className="interactive-flippable-card">
          
          {/* Front Face Panel Card */}
          <div className="card-face-panel is-front shadow-xl">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold">
                Secure Token ID
              </span>
              <h4 className="text-base font-bold mt-1">Cluster Root Core</h4>
            </div>
            <span className="text-xs text-right font-mono text-gray-400">Hover to Invert →</span>
          </div>

          {/* Reverse Back Face Panel Card */}
          <div className="card-face-panel is-back shadow-xl">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-600 font-bold">
                Administrative Keys
              </span>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Asymmetric cluster signature verified. Direct hardware pipeline promoted to active status.
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded text-center border font-mono text-[10px] font-bold text-gray-700">
              SECRET_PHRASE_TOKEN
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}