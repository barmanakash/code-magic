import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLVideoDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Video: Rich Media Integration, Streaming Frameworks, and Accessible Captions</DocTitle>

            <DocP>
                The HTML5 <code>&lt;video&gt;</code> element introduced native video playback directly to browser rendering engines, eliminating the need for legacy third-party multimedia plugins. Operating as an interactive DOM node, the video element supports highly detailed attributes for handling custom pre-load configurations, responsive media sources, and timed text tracks for accessibility (captions and subtitles).
            </DocP>

            <DocH2>The Video Specification & Container Formats</DocH2>

            <DocH3>1. Common Web Video Codecs</DocH3>
            <DocP>
                Digital video files consist of a container format (the file extension) wrapping compressed video and audio streams. To ensure reliable playback across all devices, developers should understand the three primary modern codecs:
            </DocP>
            <DocList
                items={[
                    'MP4 (H.264 / AAC): The most universally compatible container format across legacy and modern platforms.',
                    'WebM (VP9 / Opus): An open, royalty-free media file format developed by Google, optimized specifically for fast streaming performance over web protocols.',
                    'OGG (Theora / Vorbis): An open source container format, primarily supported as a legacy fallback.'
                ]}
            />

            <DocH3>2. Multi-Source Resolution Engine</DocH3>
            <DocP>
                Because no single codec is universally supported on every browser, the <code>&lt;video&gt;</code> element uses nested <code>&lt;source&gt;</code> tags. The browser engine parses these sources sequentially from top to bottom, downloading the first format it understands and ignoring the rest.
            </DocP>



            <DocH2>Video Behavior & Control Attributes</DocH2>
            <DocP>
                The playback window and user experience are customized through key attributes added directly to the video element:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Attribute</th>
                            <th className="p-3">Behavior & Function</th>
                            <th className="p-3">UX / Browser Policies</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">controls</td>
                            <td className="p-3">Displays default browser overlay controls (Play/Pause, scrub timeline, volume adjustments, picture-in-picture, and fullscreen toggles).</td>
                            <td className="p-3">If omitted, the video acts as a static image unless you build a custom interface with JavaScript.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">poster="path/img.png"</td>
                            <td className="p-3">Specifies a placeholder image to display in the video box before the media content begins playing.</td>
                            <td className="p-3">If omitted, the browser displays a blank box or attempts to render the very first frame of the video, which might be a black screen.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">autoplay</td>
                            <td className="p-3">Instructs the browser to start playing the video track automatically as soon as the page loads.</td>
                            <td className="p-3">Modern browsers block unmuted autoplay. To make autoplay work reliably, you must pair it with the <code>muted</code> attribute.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">loop</td>
                            <td className="p-3">Loops the video clip back to the beginning once it reaches the end.</td>
                            <td className="p-3">Great for ambient background videos, landing page headers, and UI animations.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">muted</td>
                            <td className="p-3">Forces the audio track to be silent by default when the page loads.</td>
                            <td className="p-3">Essential for modern UX compliance and bypasses browser autoplay restrictions.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">playsinline</td>
                            <td className="p-3">Instructs mobile browsers to play the video inline inside the web layout rather than opening the device's native full-screen media viewer.</td>
                            <td className="p-3">Crucial for maintaining a consistent UI on iOS and Android platforms.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Accessibility & Localization: Timed Text Tracks</DocH2>
            <DocP>
                To ensure videos are fully accessible to hearing-impaired users and search engine indexers, you should include timed text layouts using the <code>&lt;track&gt;</code> element. This element references a standard web subtitle file, typically in the **WebVTT (Web Video Text Tracks)** format (using the <code>.vtt</code> extension).
            </DocP>
            <DocList
                items={[
                    'kind="captions": Displays translated dialog along with secondary audio events (e.g., "[Laughter]" or "[Doorbell rings]") for hearing-impaired viewers.',
                    'kind="subtitles": Displays translation tracks for viewers who can hear the audio but do not understand the spoken language.',
                    'srclang: Specifies the two-letter language code of the track file (e.g., "en" or "es").',
                    'label: The text string displayed to the user in the video player\'s caption selection menu.'
                ]}
            />

            <DocH2>Production-Grade Video System Implementation</DocH2>
            <DocP>
                Below is a production-ready HTML5 video element configuration complete with responsive fallback formats, an accessible WebVTT caption track, and mobile inline playback setups:
            </DocP>

            <DocH3>1. Optimized Semantic Video Core (video-player.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="c-video-container">
  
  <video 
    controls 
    preload="metadata" 
    poster="images/dashboard-preview.jpg"
    playsinline
    class="c-video-player"
  >
    <source src="media/telemetry-guide.webm" type="video/webm">
    
    <source src="media/telemetry-guide.mp4" type="video/mp4">

    <track 
      kind="captions" 
      src="media/captions-en.vtt" 
      srclang="en" 
      label="English Captions" 
      default
    >
    <track 
      kind="captions" 
      src="media/captions-es.vtt" 
      srclang="es" 
      label="Spanish Captions"
    >

    <p class="c-video-fallback">
      Your web browser does not support native HTML5 video playback. 
      You can <a href="media/telemetry-guide.mp4" download>download the video file directly</a> instead.
    </p>
  </video>

</div>`}
            />

            <DocH3>2. Layout Integration View (HTMLVideoWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLVideoWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Video System Laboratory</h3>
        <p className="text-gray-500 mt-1">
          Explore how the browser integrates native video frames, poster placeholders, and accessibility caption systems.
        </p>
      </header>

      {/* Video Simulated Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Video DOM Node
        </div>

        {/* Physical simulation of a video player with poster & captions */}
        <div className="border rounded-xl overflow-hidden bg-slate-900 relative aspect-video flex flex-col justify-between p-3">
          
          {/* Simulated Video Poster Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-center justify-center">
            <span className="text-slate-400 font-mono text-[10px] tracking-wide uppercase">
              Poster Image: [ dashboard-preview.jpg ]
            </span>
          </div>

          <div className="z-10 flex justify-between items-start">
            <span className="bg-blue-600 text-white font-mono text-[8px] font-bold px-2 py-0.5 rounded uppercase">
              WebM Active
            </span>
            <span className="text-slate-300 font-mono text-[9px]">0:00 / 2:45</span>
          </div>

          {/* Simulated Active Caption Text */}
          <div className="z-10 text-center pb-2">
            <span className="bg-black/80 text-white font-medium text-[11px] px-3 py-1 rounded border border-white/10 tracking-wide inline-block">
              [Operator]: System is starting telemetry node synchronization...
            </span>
          </div>

          {/* Native Controls HUD */}
          <div className="z-10 bg-white/10 backdrop-blur p-2 rounded-lg flex items-center justify-between border border-white/10">
            <button className="w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-[10px]">
              ▶
            </button>
            <div className="w-1/2 h-1 bg-white/30 rounded-full mx-2 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-500"></div>
            </div>
            <div className="flex gap-2 text-white text-[9px] font-mono">
              <span>[CC]</span>
              <span>1080p</span>
            </div>
          </div>

        </div>

        {/* Informative Diagnostic Checklist */}
        <div className="p-3 bg-slate-50 border rounded-xl space-y-2 text-gray-600">
          <span className="font-bold text-gray-800 text-[10px] uppercase block">Interactive Properties Checklist</span>
          <ul className="list-disc pl-4 text-[11px] space-y-1">
            <li><strong>autoplay + muted:</strong> Modern browsers require <code>muted</code> for autoplay to launch immediately on page load.</li>
            <li><strong>playsinline:</strong> Crucial for mobile viewports to prevent browsers from hijacking the video into full-screen mode.</li>
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