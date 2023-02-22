import { gql, useQuery } from "@apollo/client"

export const GET_USERS = gql`
query{
  search(type: REPOSITORY, query: "language:javascript", first:10) {
    userCount
    edges {
      node {
        ... on Repository {
          name
          url
          stargazers {
            totalCount
          }
          owner{
            login
          }
        }
      }
    }
  }
}`


