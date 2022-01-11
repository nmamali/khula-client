import { gql } from "@apollo/client";
import {SCHOOL_FRAGMENT} from "../fragments/ScoolFragment";

export const SCHOOLS = gql`
    query query {
        getAllSchools{
            ...School
        }
    }
    ${ SCHOOL_FRAGMENT }
`;

