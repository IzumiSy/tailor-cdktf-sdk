# CDKTF SDK for Tailor Platform

## Setup

Initialize cdktf project without providers

```bash
cdktf init --template=typescript --local
```

Install package

```bash
npm install --save @izumisy/tailor-barebone-cdktf-sdk
```

NOTE: `module` and `moduleResolution` in tsconfig.json should be specified to `Node16`.

## Usage

```ts
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { createBarebone, defineTable } from "@izumisy/tailor-barebone-cdktf-sdk/sdk";
import "dotenv/config";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Creates a workspace and an application in it
    const barebone = createBarebone(this, process.env.PAT, {
      workspace: "my-tailor-todoapp",
      app: "my-tailor-todoapp",
    });

    // Define tables
    barebone.addTables(
      {
        Todo: defineTable({
          fields: {
            name: {
              type: "string"
              required: true,
            },
            assigneeName: {
              type: "string"
            },
            dueDate: {
              type: "date"
            }
          }
        }),
      },
    );
  }
}
```
