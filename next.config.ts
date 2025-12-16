import { withWorkflow } from "workflow/next"; 
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // … rest of your Next.js config
  reactCompiler: true,
};

export default withWorkflow(nextConfig);
