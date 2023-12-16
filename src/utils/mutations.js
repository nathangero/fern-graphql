import { gql } from "@apollo/client";

export const SET_NAME = gql`
mutation SetName($newName: String!) {
  setName(newName: $newName)
}
`;