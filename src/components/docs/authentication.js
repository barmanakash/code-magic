import React, { useState, useEffect } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock'; // Assuming standard import path

export default function AuthenticationDoc() {
    return (
        <>
            <DocTitle eyebrow="Security Architecture">Authentication & Session Management</DocTitle>

            <DocP>
                Securing frontend applications requires establishing a robust mechanism to verify identity tokens, maintain sessions securely, and protect sensitive resource streams from vulnerabilities like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).
            </DocP>

            <DocH2>Identity & Storage Mechanics</DocH2>
            <DocList
                items={[
                    'JSON Web Tokens (JWT): An open, industry-standard RFC 7519 method for representing claims securely between two parties. Structurally split into three base64-encoded segments: Header (algorithm metadata), Payload (user claims and expiration metrics), and Signature (verification hash generated via a private server key).',
                    'Local Storage: A browser-native web storage engine that persists string data across sessions with no built-in expiration date. While highly accessible, it is completely vulnerable to Cross-Site Scripting (XSS) script injections and should never store sensitive credentials.',
                    'HttpOnly Cookies: Specialized, small text data structures transmitted automatically via HTTP headers on every network request. Appending the HttpOnly flag blocks client-side JavaScript execution access completely, mitigating XSS risks, while the SameSite attribute mitigates CSRF attacks.',
                    'Refresh Tokens: Long-lived operational credential strings stored securely (ideally inside an HttpOnly cookie) used exclusively to request fresh, short-lived JWT Access Tokens behind the scenes when they expire, keeping the user securely logged in without friction.'
                ]}
            />

            <DocH2>Enterprise Silent Re-Authentication Blueprint</DocH2>
            <DocP>
                Below is a clean, practical Axios interceptor implementation mapping out automated header injection alongside a thread-safe silent refresh execution pattern to handle expiring access tokens seamlessly:
            </DocP>

            <DocH3>1. Global Response Interceptor Configuration</DocH3>
            <CodeBlock
                language="javascript"
                code={`import axios from 'axios';

// Construct standard API pipeline instance
export const authApi = axios.create({
  baseURL: 'https://api.example.com/v1/auth',
  withCredentials: true // Automatically routes HttpOnly refresh cookies under request headers
});

let isRefreshing = false;
let failedQueue = [];

// Interceptor helper to process requests queued up during an active refresh cycle
const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) { prom.reject(error); } 
    else { prom.resolve(token); }
  });
  failedQueue = [];
};

authApi.interceptors.response.use(
  (response) => response, // Directly pass safe, successful resolutions through
  async (error) => {
    const originalRequest = error.config;

    // Intercept 401 Unauthorized status codes (Signaling token expiration)
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If a refresh operation is currently in flight, queue up simultaneous requests
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers['Authorization'] = \`Bearer \${token}\`;
            return authApi(originalRequest);
          })
          .catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Request a fresh access token from the auth gateway via HttpOnly cookies
        const refreshResponse = await axios.post('https://api.example.com/v1/auth/refresh', {}, { withCredentials: true });
        const { newAccessToken } = refreshResponse.data;

        // Broadcast the new token to the queue components and unlock the interceptor thread
        processQueue(null, newAccessToken);
        isRefreshing = false;

        // Apply the new token directly to the failed request and retry execution immediately
        originalRequest.headers['Authorization'] = \`Bearer \${newAccessToken}\`;
        return authApi(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;
        
        // Wipe local states or redirect to login interface if refresh sequence fails completely
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);`}
            />

            <DocH3>2. Simple Interface Wrapper Representation</DocH3>
            <CodeBlock
                language="jsx"
                code={`import React, { useState } from 'react';
import { authApi } from './authInterceptor';

export default function AuthGateController() {
  const [sessionUser, setSessionUser] = useState(null);

  const fetchSecureProfile = async () => {
    try {
      const res = await authApi.get('/me');
      setSessionUser(res.data.username);
    } catch (err) {
      console.error('Session invalidation tracked:', err);
    }
  };

  return (
    <div style={{ padding: '24px', background: '#fff', border: '1px solid #e2e8f0' }}>
      <h4>Secure Authorization Framework</h4>
      <p>Active Verified Session: <strong>{sessionUser || 'Anonymous Unauthenticated State'}</strong></p>
      <button onClick={fetchSecureProfile}>Fetch Protected Account Data</button>
    </div>
  );
}`}
            />
        </>
    );
}