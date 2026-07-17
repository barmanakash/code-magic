import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import CodeBlockPreview from '../components/docs/CodeBlock';
import StaticPage from './StaticPage';

export default function ApiReferencePage() {
  return (
    <StaticPage
      eyebrow="Resources"
      title="API Reference"
      subtitle="A quick look at the Code Magic generation API for programmatic access."
    >
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
            Authentication
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            All requests require an API key passed as a bearer token in the Authorization header.
          </Typography>
          <CodeBlockPreview
            language="bash"
            code={`curl https://api.codemagic.dev/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "a login form with email and password"}'`}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
            POST /v1/generate
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Generates code from a natural-language prompt and returns the resulting files.
          </Typography>
          <CodeBlockPreview
            language="json"
            code={`{
  "id": "spell_8f3a2b",
  "status": "completed",
  "files": [
    { "path": "src/components/LoginForm.jsx", "content": "..." }
  ]
}`}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
            GET /v1/spells/:id
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Retrieves the status and output of a previously requested generation job.
          </Typography>
        </Box>
      </Stack>
    </StaticPage>
  );
}
