import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query Episodes($name: String){
    episodes(filter: { name: $name }) {
      info {
        count
      }
      results {
        name
        air_date
        episode
        characters {
          name
          origin {
            name
            type
            dimension
          }
          image
        }
      }
    }
  }
`;
