import { gql } from "@apollo/client";

export const SCHOOL_FRAGMENT = gql`
    fragment School on School {
        id
        name
        address
        latitude
        longitude
        imageLink
    }
`;
