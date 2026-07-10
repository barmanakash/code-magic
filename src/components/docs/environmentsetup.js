import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';



export default function EnvironmentSetup() {
    return (
        <>
            <DocTitle eyebrow="Get started">Environment Setup</DocTitle>
            <DocP>To build React applications, you need a JavaScript runtime and a package manager installed on your machine:</DocP>

            <DocH2>Runtimes & Package Managers</DocH2>
            <DocList
                items={[
                    'Node.js: The industry-standard JavaScript runtime built on Chrome\'s V8 engine, allowing you to run JavaScript code outside of a web browser.',
                    'npm (Node Package Manager): The default package manager installed automatically alongside Node.js, used to download and manage project dependencies.',
                    'Yarn: A fast, secure, and reliable alternative package manager created by Meta to optimize dependency caching and parallel installations.',
                    'pnpm (Performant npm): A highly efficient package manager that saves disk space by using a content-addressable store and hard-linking identical files.',
                    'Bun: A modern, ultra-fast all-in-one JavaScript runtime, bundler, test runner, and package manager designed from scratch for extreme speed.'
                ]}
            />

            <DocH2>Installation & Verification Commands</DocH2>
            <DocP>Run these commands in your terminal to install alternative package managers globally or verify your current installation setup:</DocP>
            <DocList
                items={[
                    'node -v : Verifies the installed version of Node.js.',
                    'npm -v : Verifies the installed version of npm.',
                    'npm install -g yarn : Command to install Yarn globally on your machine.',
                    'npm install -g pnpm : Command to install pnpm globally on your machine.',
                    'curl -fsSL https://bun.sh/install | bash : Command to install Bun globally on macOS/Linux/WSL.',
                    'bun -v : Verifies the installed version of Bun.'
                ]}
            />
        </>
    )
} 