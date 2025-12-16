import { start } from "workflow/api";
import { testWorkflow } from "@/app/workflows/test-workflow";

// can't do it during build has the await hangs
export const dynamic = "force-dynamic";

// The issue might come from caching the fetch call in the render
export const fetchCache = 'force-no-store'

export default async function TestWorkflowPage() {
  console.log("[TestPage] 1. Starting");
  
  const run = await start(testWorkflow, ["world"]);
  console.log("[TestPage] 2. Started, runId:", run.runId);
  
  const status = await run.status;
  console.log("[TestPage] 3. Status:", status);
  
  console.log("[TestPage] 4. Awaiting returnValue...");
  const result = await run.returnValue;
  console.log("[TestPage] 5. Got result:", result);
  
  return (
    <div className="p-8">
      <h1>Test Workflow Result</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
