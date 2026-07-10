import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';


export default function Style() {
    return (
        <>
            <DocTitle eyebrow="Get started">Styling in React</DocTitle>
            <DocP>React offers a highly flexible architecture for styling components, ranging from traditional CSS methodologies to modern component-scoped compilation and utility-first frameworks.</DocP>

            <DocH2>Traditional & Preprocessor Methods</DocH2>
            <DocList
                items={[
                    'Standard CSS: Global stylesheets imported directly into your JavaScript files (e.g., import "./styles.css"). It is simple but risks global class name collisions across large scale apps.',
                    'Sass (Syntactically Awesome Style Sheets): A CSS preprocessor that introduces powerful features like nested rules, variables, mixins, and mathematical operators to make stylesheets more maintainable.',
                    'CSS Modules: A built-in configuration that scopes styles locally by compiling class names automatically into completely unique hashes (e.g., styles.button becomes .Button_btn__a1b2c), eliminating name conflicts.'
                ]}
            />

            <DocH2>CSS-in-JS (Dynamic Styling)</DocH2>
            <DocList
                items={[
                    'Inline Styles: Styles applied directly to JSX tags as JavaScript objects using camelCase properties (e.g., style={{ display: "flex", gap: "10px" }}). Ideal for fully dynamic values driven by state.',
                    'Styled Components: A library utilizing ES6 tagged template literals to write actual CSS directly inside component files, creating native React components bound tightly to custom layout properties.',
                    'Emotion: A highly flexible CSS-in-JS library that provides performant styling options, featuring both styled component primitives and a custom css prop utility.'
                ]}
            />

            <DocH2>Utility-First Frameworks</DocH2>
            <DocList
                items={[
                    'Tailwind CSS: A utility-first styling system that allows you to construct custom interfaces directly inside your element class names using atomic, pre-configured utility classes (e.g., className="flex items-center p-4 bg-blue-500").'
                ]}
            />

            <DocH2>Installation & Configuration Commands</DocH2>
            <DocP>Run these setup commands in your terminal to integrate popular external styling tools into your React environment:</DocP>
            <DocList
                items={[
                    'npm install -D tailwindcss postcss autoprefixer : Installs Tailwind CSS along with its essential compilation engines for post-processing.',
                    'npx tailwindcss init -p : Generates the necessary configuration files (tailwind.config.js and postcss.config.js) to initialize Tailwind.',
                    'npm install styled-components : Installs the Styled Components library into your project dependencies.',
                    'npm install sass : Installs the native Sass compiler to support parsing .scss and .sass files directly inside your module system.'
                ]}
            />
        </>
    )
}