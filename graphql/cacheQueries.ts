import { gql } from "@apollo/client";

export const FAV_COUNTER = gql`
    query favCounterVar {
        favCounterVar @client
    }
`;