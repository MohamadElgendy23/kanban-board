/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "query GetBoards {\n  boards {\n    id\n    name\n  }\n}\n\nmutation CreateBoard($name: String!) {\n  insert_boards_one(object: {name: $name}) {\n    id\n    name\n  }\n}\n\nquery GetColumns($boardId: uuid!) {\n  columns(where: {board_id: {_eq: $boardId}}, order_by: {position: asc}) {\n    id\n    name\n    position\n  }\n}\n\nmutation CreateColumn($name: String!, $boardId: uuid!, $position: float8!) {\n  insert_columns_one(\n    object: {name: $name, board_id: $boardId, position: $position}\n  ) {\n    id\n    name\n    position\n  }\n}\n\nquery GetCards($columnId: uuid!) {\n  cards(where: {column_id: {_eq: $columnId}}, order_by: {position: asc}) {\n    id\n    content\n    position\n  }\n}\n\nmutation CreateCard($columnId: uuid!, $content: String!, $position: float8!) {\n  insert_cards_one(\n    object: {column_id: $columnId, content: $content, position: $position}\n  ) {\n    id\n    content\n    position\n  }\n}": typeof types.GetBoardsDocument;
};
const documents: Documents = {
  "query GetBoards {\n  boards {\n    id\n    name\n  }\n}\n\nmutation CreateBoard($name: String!) {\n  insert_boards_one(object: {name: $name}) {\n    id\n    name\n  }\n}\n\nquery GetColumns($boardId: uuid!) {\n  columns(where: {board_id: {_eq: $boardId}}, order_by: {position: asc}) {\n    id\n    name\n    position\n  }\n}\n\nmutation CreateColumn($name: String!, $boardId: uuid!, $position: float8!) {\n  insert_columns_one(\n    object: {name: $name, board_id: $boardId, position: $position}\n  ) {\n    id\n    name\n    position\n  }\n}\n\nquery GetCards($columnId: uuid!) {\n  cards(where: {column_id: {_eq: $columnId}}, order_by: {position: asc}) {\n    id\n    content\n    position\n  }\n}\n\nmutation CreateCard($columnId: uuid!, $content: String!, $position: float8!) {\n  insert_cards_one(\n    object: {column_id: $columnId, content: $content, position: $position}\n  ) {\n    id\n    content\n    position\n  }\n}":
    types.GetBoardsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetBoards {\n  boards {\n    id\n    name\n  }\n}\n\nmutation CreateBoard($name: String!) {\n  insert_boards_one(object: {name: $name}) {\n    id\n    name\n  }\n}\n\nquery GetColumns($boardId: uuid!) {\n  columns(where: {board_id: {_eq: $boardId}}, order_by: {position: asc}) {\n    id\n    name\n    position\n  }\n}\n\nmutation CreateColumn($name: String!, $boardId: uuid!, $position: float8!) {\n  insert_columns_one(\n    object: {name: $name, board_id: $boardId, position: $position}\n  ) {\n    id\n    name\n    position\n  }\n}\n\nquery GetCards($columnId: uuid!) {\n  cards(where: {column_id: {_eq: $columnId}}, order_by: {position: asc}) {\n    id\n    content\n    position\n  }\n}\n\nmutation CreateCard($columnId: uuid!, $content: String!, $position: float8!) {\n  insert_cards_one(\n    object: {column_id: $columnId, content: $content, position: $position}\n  ) {\n    id\n    content\n    position\n  }\n}",
): (typeof documents)["query GetBoards {\n  boards {\n    id\n    name\n  }\n}\n\nmutation CreateBoard($name: String!) {\n  insert_boards_one(object: {name: $name}) {\n    id\n    name\n  }\n}\n\nquery GetColumns($boardId: uuid!) {\n  columns(where: {board_id: {_eq: $boardId}}, order_by: {position: asc}) {\n    id\n    name\n    position\n  }\n}\n\nmutation CreateColumn($name: String!, $boardId: uuid!, $position: float8!) {\n  insert_columns_one(\n    object: {name: $name, board_id: $boardId, position: $position}\n  ) {\n    id\n    name\n    position\n  }\n}\n\nquery GetCards($columnId: uuid!) {\n  cards(where: {column_id: {_eq: $columnId}}, order_by: {position: asc}) {\n    id\n    content\n    position\n  }\n}\n\nmutation CreateCard($columnId: uuid!, $content: String!, $position: float8!) {\n  insert_cards_one(\n    object: {column_id: $columnId, content: $content, position: $position}\n  ) {\n    id\n    content\n    position\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
