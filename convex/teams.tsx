
import {v} from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTeam=query({
    args:{email:v.string()},
    handler:async(ctx, args) =>{
        const result=await ctx.db.query('teams')
        .filter(q=>q.eq(q.field('createdBy'),args.email))
        .collect();

        return result;
    },
})

export const createTeam=mutation({
    args:{teamName:v.string(),createdBy:v.string()},
    handler:async(ctx, args) =>{
        const result=await ctx.db.insert('teams',args);
        return result;
    },
})





/**
 * createTeam Mutation:
createTeam is a GraphQL mutation operation.
It takes arguments teamName and createdBy, both of type string.
Inside the handler function:
It inserts a new record into the "teams" collection/table with the provided args using ctx.db.insert('teams', args).
Returns the result of the insertion operation.


getTeam Query:
getTeam is a GraphQL query operation.
It takes an argument email of type string.
Inside the handler function:
It queries the "teams" collection/table from the database using ctx.db.query('teams').
Filters the results to include only teams where the createdBy field matches the provided args.email.
Collects the filtered results.
Returns the result.

 */