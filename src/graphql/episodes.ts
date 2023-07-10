import { gql, TypedDocumentNode } from '@apollo/client';

import type { Episodes } from '../types/Episode';
import type { Filter } from '../types/Character';

export const GET_EPISODES: TypedDocumentNode<Episodes, Filter> = gql`
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
