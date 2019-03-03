import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from "react-apollo";
import { GET_REQUEST } from './constantQuery'

export const AllUsers = () => (
  <Query query={GET_REQUEST}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error </p>;

      return (
        <ul key='allUsers'>
          {data.allUsers.map(({ id, name }) => (
            <li key={id}>{`${id} ---> ${name}`}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);

// const getQueryGraphQL =  GraphQlService.query({
//    query: gql`
//        fragment EventDataStructure on Event {
//            id,
//            team_1_name,
//            team_2_name,
//            sport_name,
//        }

//        query getEvents($filters: EventFilters, $limit: Int, $offset: Int, $contentFilters: ContentFilters) {
//            events(filters: $filters, limit: $limit, offset: $offset) {
//                ...EventDataStructure
//                contents(filters: $contentFilters) {
//                    id,
//                    product_id
//                }
//            }
//        }
//    `,
//    variables: {
//        filters: {
//            ids: [1]
//        },
//        offset: 3,
//        contentFilters: {
//            product_ids: [1]
//        }

//    }
//  }).then((data) => {
//    console.log("***11***", data);
// });

// export default getQueryGraphQL;




