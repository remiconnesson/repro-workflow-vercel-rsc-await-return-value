import { sleep } from "workflow";

export async function testWorkflow(input: string) {
  "use workflow";
  
  console.log("[testWorkflow] 1. Started with:", input);
  
  await sleep("2 seconds");
  
  console.log("[testWorkflow] 2. After sleep");
  
  return { message: `Hello ${input}`, timestamp: Date.now() };
}
