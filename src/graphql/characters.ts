import { gql, TypedDocumentNode } from '@apollo/client';

import type { Characters, Filter } from '../types/Character';

export const GET_CHARACTERS: TypedDocumentNode<Characters, Filter> = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
      info {
        count
      }
      results {
        name
        origin {
          name
          type
          dimension
        }
        image
        episode {
          name
          air_date
          episode
        }
      }
    }
  }
`;
