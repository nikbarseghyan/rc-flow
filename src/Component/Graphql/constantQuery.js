import gql from "graphql-tag";

export const GET_REQUEST = gql`
{
 allUsers {
   id
   name
   password
 }
}
`;

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      launches {
        id
        name
        isBooked
        rocket {
          id
          name
        }
      }
    }
  }
`;