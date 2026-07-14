import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLAudioDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Audio: Native Media Streams, Fallback Engines, and Audio Properties</DocTitle>

            <DocP>
                Before HTML5, playing audio on a web page required external, battery-draining browser plugins like Adobe Flash or Silverlight. The introduction of the native <code>&lt;audio&gt;</code> element standardized media playback across all modern web runtimes. By using standard API controls and structural fallback setups, developers can serve high-performance, compressed audio files directly to browser engines securely.
            </DocP>

            <DocH2>The Audio Specification & Audio Formats</DocH2>

            <DocH3>1. Common Audio Formats</DocH3>
            <DocP>
                Because different browser engines support different media wrappers and codecs, serving audio reliably requires understanding the three primary web formats:
            </DocP>
            <DocList
                items={[
                    'MP3 (MPEG-3): The most widely supported audio format across all platforms, offering excellent compression and quality balance.',
                    'Ogg Vorbis: An open-source, patent-free format supported by Firefox, Chrome, and Opera, making it a reliable alternative.',
                    'WAV (Waveform Audio): A raw, uncompressed format that delivers high audio fidelity but results in massive file sizes—typically avoided for fast-loading web apps.'
                ]}
            />

            <DocH3>2. Multi-Source Fallbacks</DocH3>
            <DocP>
                To ensure your audio plays correctly on every modern browser, nest multiple <code>&lt;source&gt;</code> tags inside the <code>&lt;audio&gt;</code> container. The browser will read these sources from top to bottom and play the first file format it supports, completely bypassing the rest.
            </DocP>



            <DocH2>Audio Control & Behavior Attributes</DocH2>
            <DocP>
                The behavior of the native audio player is controlled through several key HTML attributes:
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
                            <td className="p-3">Displays the browser's default media player interface (Play/Pause button, volume slider, timeline, and track duration).</td>
                            <td className="p-3">If this attribute is omitted, the audio element is completely hidden from view unless you build custom controls using JavaScript.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">autoplay</td>
                            <td className="p-3">Instructs the browser to start playing the audio track automatically as soon as the page loads.</td>
                            <td className="p-3">Modern browsers block unmuted autoplay to prevent annoying users. Autoplay will typically fail unless paired with the <code>muted</code> attribute.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">loop</td>
                            <td className="p-3">A boolean attribute that automatically restarts the audio track from the beginning once it reaches the end.</td>
                            <td className="p-3">Ideal for continuous background music, ambient noise, or sound effects.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">muted</td>
                            <td className="p-3">Forces the audio element to start in a muted state by default.</td>
                            <td className="p-3">Required if you want the track to autoplay without triggering browser security blocks.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">preload</td>
                            <td className="p-3">Tells the browser how much audio data to pre-download (options: <code>none</code>, <code>metadata</code>, or <code>auto</code>).</td>
                            <td className="p-3">Use <code>metadata</code> to load only duration and track info, saving bandwidth for users who don't press play.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Audio Implementations</DocH2>

            <DocH3>1. Standard Multi-Source Audio Component (audio-player.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="c-audio-widget">
  <h4 class="c-audio-widget__title">Alert Notification Broadcast</h4>
  
  <audio 
    controls 
    preload="metadata" 
    loop
    class="c-audio-player"
  >
    <source src="media/broadcast-alert.webm" type="audio/webm">
    
    <source src="media/broadcast-alert.mp3" type="audio/mpeg">
    
    <source src="media/broadcast-alert.ogg" type="audio/ogg">

    <p class="c-audio-fallback-message">
      Your web browser does not support native HTML5 audio playback. 
      You can <a href="media/broadcast-alert.mp3" download>download the audio file directly</a> instead.
    </p>
  </audio>
</div>`}
            />

            <DocH3>2. Layout Integration View (HTMLAudioWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLAudioWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Audio Playback Playground</h3>
        <p className="text-gray-500 mt-1">
          Explore the UI structure of native browser media layouts, attributes, and user-agent audio panels.
        </p>
      </header>

      {/* Visual Simulation of an Audio Integration Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Media Panel
        </div>

        <div className="space-y-3">
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-800 block text-[11px]">Ambient Telemetry Loop</span>
                <span className="text-[9px] text-gray-400 font-mono">Format: audio/webm</span>
              </div>
              <span className="bg-emerald-50 text-emerald-700 text-[8px] font-bold px-2 py-0.5 rounded uppercase font-mono">
                loop active
              </span>
            </div>

            {/* Visual Representation of native controls UI */}
            <div className="bg-white border rounded-lg p-2.5 flex items-center justify-between shadow-sm">
              <button className="w-7 h-7 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors">
                ▶
              </button>
              <div className="w-2/3 h-1.5 bg-slate-200 rounded-full mx-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-600"></div>
              </div>
              <span className="font-mono text-[10px] text-gray-500 shrink-0">0:12 / 1:30</span>
            </div>
          </div>

          {/* Autoplay & Policy Warning Node */}
          <div className="p-3 bg-amber-50/50 border border-amber-200 rounded-xl text-amber-950 leading-relaxed text-[11px]">
            <strong>Autoplay Policy Warning:</strong> Most modern browsers will ignore <code>autoplay</code> if you don't add <code>muted</code>. Playback is paused until the user interacts with the page.
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