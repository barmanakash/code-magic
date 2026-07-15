import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLGeolocationDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Geolocation API: Client-Side Telemetry, Active Position Tracking, and Hardened Exception Handling</DocTitle>

            <DocP>
                The HTML5 Geolocation API allows web applications to discover the user's exact geographical position. By accessing native hardware layers—including GPS, Wi-Fi tri-angulation, and IP routing telemetry—the browser can expose high-precision latitude and longitude coordinates. For security and user privacy, this feature is strictly restricted to secure contexts (HTTPS) and requires explicit runtime permission from the user.
            </DocP>

            <DocH2>Core Architectural Methods</DocH2>
            <DocP>
                The geolocation subsystem is exposed globally through the <code>navigator.geolocation</code> object. It relies primarily on two core execution patterns depending on whether the application requires a single snapshot or a continuous stream of position updates:
            </DocP>

            <DocH3>1. One-Time Coordinate Snapshots (`getCurrentPosition`)</DocH3>
            <DocP>
                This method retrieves the device's current geographical location via a single asynchronous request. It takes a success callback function, an optional error callback function, and a high-level configuration options object.
            </DocP>



            <DocH3>2. Continuous Real-Time Telemetry Tracking (`watchPosition` & `clearWatch`)</DocH3>
            <DocP>
                For navigation interfaces or location-aware tracking systems, <code>watchPosition()</code> registers an active listener wrapper. The browser automatically fires the success callback function whenever the device's physical coordinates change significantly.
            </DocP>
            <DocList
                items={[
                    'Registration: <code>watchPosition()</code> returns an integer ID tracking index, similar to standard browser <code>setInterval</code> loops.',
                    'Tear-Down: To conserve battery charge and stop location tracking, you pass the captured index into <code>navigator.geolocation.clearWatch(watchId)</code>.'
                ]}
            />

            <DocH2>The Configuration Interface Matrix</DocH2>
            <DocP>
                Both tracking methods accept a structural options configuration map that controls hardware priority profiles:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Configuration Key</th>
                            <th className="p-3">Type / Default</th>
                            <th className="p-3">Internal Operational Mechanics</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">enableHighAccuracy</td>
                            <td className="p-3">Boolean / false</td>
                            <td className="p-3 font-sans">Forces the browser to request high-precision coordinates (like native device GPS). Enabling this increases tracking accuracy but causes longer response times and higher battery drain.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">timeout</td>
                            <td className="p-3">Number / Infinity</td>
                            <td className="p-3 font-sans">The maximum time limit (in milliseconds) the application is allowed to wait for coordinates before throwing a timeout error.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">maximumAge</td>
                            <td className="p-3">Number / 0</td>
                            <td className="p-3 font-sans">Tells the browser it can return a cached location if that location is newer than the specified age (in milliseconds). Setting it to 0 forces the browser to fetch fresh location data every time.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Geolocation Error Handling</DocH2>
            <DocP>
                Location requests can fail for many reasons, including strict user privacy choices or weak satellite connections. A production-ready application must catch these failures using the integer error code mappings provided by the `GeolocationPositionError` object:
            </DocP>
            <DocList
                items={[
                    'PERMISSION_DENIED (Code 1): The user clicked "Block" or explicitly disabled location tracking in their browser security settings.',
                    'POSITION_UNAVAILABLE (Code 2): The network is down or the device cannot establish a satellite/cell tower lock.',
                    'TIMEOUT (Code 3): The device took longer to resolve the coordinates than the time limit specified in the `timeout` configuration option.'
                ]}
            />

            <DocH2>Production-Grade Geolocation Architecture Blueprint</DocH2>
            <DocP>
                Below is a clean, production-ready implementation showing how to safely initialize geolocation requests, handle runtime errors, and manage clean component teardowns inside a React environment:
            </DocP>

            <DocH3>1. Complete Geolocation Integration Script (geolocation-engine.js)</DocH3>
            <CodeBlock
                language="javascript"
                code={`// PRODUCTION GEOLOCATION MANAGEMENT ENGINE
const GeolocationEngine = {
  options: {
    enableHighAccuracy: true,
    timeout: 10000, // 10 seconds maximum wait time
    maximumAge: 0   // Force fresh coordinate computation
  },

  // One-time coordinate retrieval pipeline
  fetchCurrentLocation(onSuccess, onError) {
    if (!navigator.geolocation) {
      onError({ code: 0, message: "Geolocation is not supported by this browser." });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => onSuccess(position.coords),
      (error) => this.handleErrorFault(error, onError),
      this.options
    );
  },

  // Standardized error parsing utility
  handleErrorFault(error, callback) {
    let parsedMessage = "";
    switch (error.code) {
      case 1: // PERMISSION_DENIED
        parsedMessage = "Access Denied. Please enable location permissions in your browser settings.";
        break;
      case 2: // POSITION_UNAVAILABLE
        parsedMessage = "Network failure or device satellite link lost.";
        break;
      case 3: // TIMEOUT
        parsedMessage = "Location request timed out before securing a coordinate lock.";
        break;
      default:
        parsedMessage = "An unexpected telemetry error occurred.";
    }
    callback({ code: error.code, message: parsedMessage });
  }
};`}
            />

            <DocH3>2. Interactive Location Tracker Panel (HTMLGeolocationWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect } from 'react';

interface CoordinateState {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export default function HTMLGeolocationWorkspace() {
  const [coords, setCoords] = useState<CoordinateState | null>(null);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [isWatching, setIsWatching] = useState(false);
  const [watchId, setWatchId] = useState<number | null>(null);

  // Safe tracking clean up on component unmount
  useEffect(() => {
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [watchId]);

  // Handler for one-time location check
  const handleSingleFetch = () => {
    setErrorStatus(null);
    if (!navigator.geolocation) {
      setErrorStatus("Geolocation unsupported in this environment.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        });
      },
      (err) => {
        setErrorStatus("Error (" + err.code + "): " + err.message);
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  };

  // Handler to toggle live streaming position telemetry tracking
  const toggleLiveWatch = () => {
    setErrorStatus(null);
    
    if (isWatching && watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
      setIsWatching(false);
      return;
    }

    if (!navigator.geolocation) {
      setErrorStatus("Geolocation unsupported in this environment.");
      return;
    }

    const id = navigator.geolocation.watchPosition(
      (pos) => {
        setCoords({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        });
      },
      (err) => {
        setErrorStatus("Watch Error: " + err.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    setWatchId(id);
    setIsWatching(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Geolocation Instrument Deck</h3>
        <p className="text-gray-500 mt-1">
          Interact with the controls below to safely query the browser's location framework and view real-time data logs.
        </p>
      </header>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative text-[11px]">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Device Telemetry
        </div>

        <div className="space-y-3 pt-4">
          {/* DISPLAY COORDINATE DATA OUTPUT */}
          <div className="p-4 border rounded-xl bg-slate-50 space-y-2 font-mono text-[10px]">
            <span className="text-[8px] text-slate-400 font-bold uppercase block tracking-wider">Live Coordinates Output</span>
            {coords ? (
              <div className="space-y-1 text-slate-800">
                <p>Latitude: <strong className="text-blue-600">{coords.latitude.toFixed(6)}°</strong></p>
                <p>Longitude: <strong className="text-blue-600">{coords.longitude.toFixed(6)}°</strong></p>
                <p>Accuracy Variance: <span className="text-slate-500">{coords.accuracy} meters</span></p>
              </div>
            ) : (
              <p className="text-slate-400 italic">No coordinates captured yet. Request access below.</p>
            )}
          </div>

          {/* DYNAMIC ERROR STATUS CONTAINER */}
          {errorStatus && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl font-medium">
              ⚠️ {errorStatus}
            </div>
          )}

          {/* SYSTEM BUTTON ACTIONS */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button 
              onClick={handleSingleFetch}
              disabled={isWatching}
              className="px-3 py-2 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 text-white font-bold rounded-lg transition-colors text-center shadow-sm"
            >
              Get Current Position
            </button>
            <button 
              onClick={toggleLiveWatch}
              className={"px-3 py-2 text-white font-bold rounded-lg transition-colors text-center shadow-sm " + (isWatching ? "bg-rose-600 hover:bg-rose-700" : "bg-blue-600 hover:bg-blue-700")}
            >
              {isWatching ? "Stop Watch Stream" : "Watch Position Live"}
            </button>
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-[10px] leading-relaxed">
          <strong>Privacy Controls Note:</strong> Location data is highly sensitive. Browsers enforce strict prompt flows that let users deny location tracking permanently. Your application must always include a clear error-handling fallback UI to handle cases where users deny access.
        </div>
      </div>
    </div>
  );
}`}
            />
        </>
    );
}