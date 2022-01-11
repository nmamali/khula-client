import { gql } from "@apollo/client";
import {SCHOOL_FRAGMENT} from "../fragments/ScoolFragment";

export const GET_SCHOOLS_BY_ID= gql`
    query getSchoolsByIds($ids: [String]) {
        getSchoolsByIds(ids: $ids) {
            ...School
        }
    }
    ${ SCHOOL_FRAGMENT }
`;