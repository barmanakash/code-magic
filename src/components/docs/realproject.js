import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function RealProjectsDoc() {
    return (
        <>
            <DocTitle eyebrow="Practical Engineering">Real-World Application Architectures</DocTitle>

            <DocP>
                Moving from isolated components to production-grade applications requires integrating multiple architectural layers. True project mastery involves orchestrating state management, asynchronous data caching pipelines, complex UI components, and secure payment integrations within single, unified systems.
            </DocP>

            <DocH2>Production Project Tier Matrix</DocH2>

            <DocH3>1. Core State & Dynamic Fetching Foundations</DocH3>
            <DocList
                items={[
                    'Todo & Notes Planners: Ideal blueprints for mastering pure local state CRUD mechanics, structural list animations, and client side data persistence patterns using local storage sync layers.',
                    'Weather & Movie Engines: Focuses on third-party public API ingestion, advanced asynchronous error parsing, dynamic asset mapping based on climate metrics, and complex query debounce pipelines.',
                    'Blog Systems: Deepens comprehension of markdown rendering parsers, dynamic slug routing parameters, search engine optimization metadata adjustments, and content pagination grids.'
                ]}
            />

            <DocH3>2. Scalable Enterprise Management Platforms</DocH3>
            <DocList
                items={[
                    'Admin & Operational Dashboards: Comprehensive analytical ecosystems managing complex data visualizations, persistent multi-role access control guards, data grids with custom filtering, and exportable data tools.',
                    'Real-Time Chat Frameworks: Full-stack applications built around bi-directional WebSocket connections (such as socket.io) managing connection connection monitoring, thread multiplexing, and optimistic UI messages.'
                ]}
            />

            <DocH3>3. High-Throughput E-Commerce Ecosystems</DocH3>
            <DocList
                items={[
                    'E-Commerce & Digital Marketplaces: Complex multi-tier architectures coordinating globally managed product listings, state-driven shopping carts, real-time stock sync limits, and server-side payment processing pipelines (such as Stripe Elements tokens).'
                ]}
            />



            <DocH2>Enterprise E-Commerce Stripe Blueprint</DocH2>
            <DocP>
                Below is an advanced implementation outlining a secure checkout interface using **Stripe Elements** combined with an internal asynchronous API gateway to initialize a secure payment intent:
            </DocP>

            <DocH3>1. Full-Stack Payment Flow Component (CheckoutWorkflow.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-stripe';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize the global background Stripe execution thread
const stripePublishablePromise = loadStripe('pk_test_51Prod_sample_key_hash');

interface OrderSummary {
  orderId: string;
  totalAmountCents: number;
}

function SecurePaymentForm({ orderId, totalAmountCents }: OrderSummary) {
  const stripe = useStripe();
  const elements = useElements();
  
  const [processing, setProcessing] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<string>('');

  const executeOrderPayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return; // Verify dependencies are active

    setProcessing(true);
    setPaymentStatus('Initializing secure gateway session...');

    try {
      // 1. Prompt the internal gateway server to register a secure PaymentIntent
      const response = await fetch('https://api.example.com/v1/payments/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, amount: totalAmountCents })
      });
      
      const { clientSecret } = await response.json();

      // 2. Transmit card parameters straight to Stripe nodes, bypassing local servers entirely
      const cardElementNode = elements.getElement(CardElement);
      if (!cardElementNode) throw new Error('DOM attachment failure: CardElement not found');

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElementNode }
      });

      if (paymentResult.error) {
        setPaymentStatus(\`Transaction Refused: \${paymentResult.error.message}\`);
      } else if (paymentResult.paymentIntent?.status === 'succeeded') {
        setPaymentStatus('Success! Transaction processed and settlement finalized.');
      }
    } catch (error: any) {
      setPaymentStatus(\`System Exception: \${error.message}\`);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={executeOrderPayment} className="space-y-4 p-4 border rounded bg-gray-50">
      <h4 className="text-sm font-bold text-gray-800">Secure Payment Gateway Interface</h4>
      <p className="text-xs text-gray-500">Order ID Ref: <code className="bg-gray-200 px-1 rounded">{orderId}</code></p>
      
      <div className="p-3 bg-white border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '14px',
                color: '#1e293b',
                '::placeholder': { color: '#94a3b8' }
              }
            }
          }} 
        />
      </div>

      <button
        type="submit"
        disabled={processing || !stripe}
        className="w-full py-2 bg-emerald-600 text-white rounded text-sm font-semibold transition-colors hover:bg-emerald-700 disabled:bg-gray-400"
      >
        {processing ? 'Processing Settlement...' : \`Pay $ \${(totalAmountCents / 100).toFixed(2)}\`}
      </button>

      {paymentStatus && <p className="text-xs font-medium text-center mt-2 text-blue-600">{paymentStatus}</p>}
    </form>
  );
}

export default function CheckoutWorkflow() {
  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Encapsulating our checkout component layer inside the Stripe Elements context container */}
      <Elements stripe={stripePublishablePromise}>
        <SecurePaymentForm orderId="ORD-2026-X77" totalAmountCents={8999} />
      </Elements>
    </div>
  );
}`}
            />
        </>
    );
}