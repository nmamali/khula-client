import {  InMemoryCache } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
    addTypename: true, //adds __typename fields to all objects in outgoing queries
    typePolicies: {
        Query: {
            fields: {
                savedDeals: {
                    read() {
                        return favCounterVar();
                    },
                }
            },
        },
    },
});
export const favCounterVar = cache.makeVar<Array<string>>([]);



