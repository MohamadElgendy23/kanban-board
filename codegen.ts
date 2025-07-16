import "dotenv/config";

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NHOST_GRAPHQL_URL as string]: {
        headers: {
          "x-hasura-admin-secret": "KP0nW88iF966)$@Iw'JB_p3_&zuYT5(M",
        },
      },
    },
  ],
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  ignoreNoDocuments: true,
};

export default config;
