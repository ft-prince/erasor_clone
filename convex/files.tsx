import {v} from 'convex/values';
import { mutation, query } from './_generated/server';

export const createFile=mutation({
    args:{
        fileName:v.string(),
        teamId:v.string(),
        createdBy:v.string(),
        archive:v.boolean(),
        document:v.string(),
        whiteboard:v.string()
    },
    handler:async(ctx, args) =>{
        const result=await ctx.db.insert('files',args);
        return result;
    },
})


/**
 * createFile Mutation:

This mutation operation creates a new file.
It takes arguments such as fileName, teamId, createdBy, archive, document, and whiteboard.
Inside the handler function, it inserts a new record into the "files" collection/table with the provided arguments.
It returns the result of the insertion operation
 */



export const getFiles=query({
    args:{
        teamId:v.string()
    },
    handler:async(ctx, args)=> {
        const result=ctx.db.query('files')
        .filter(q=>q.eq(q.field('teamId'),args.teamId))
        .order('desc')
        .collect();

        return result;
    },
})



/**
 * getFiles Query:

This query operation retrieves files based on a provided teamId.
It takes the teamId as an argument.
Inside the handler function, it queries the "files" collection/table filtering by the provided teamId, orders the results in descending order, and collects them.
It returns the resulting list of files.

 */

export const updateDocument=mutation({
    args:{
        _id:v.id('files'),
        document:v.string()
    },
    handler:async(ctx, args) =>{
        const result =await ctx.db.patch(args._id,{document:args.document});
        return result;
    },
})


/**
 * updateDocument Mutation:

This mutation operation updates the document field of a file specified by _id.
It takes arguments _id (the ID of the file to update) and document.
Inside the handler function, it patches the specified file's document field with the new document value.
It returns the result of the patch operation.

 */



export const updateWhiteboard=mutation({
    args:{
        _id:v.id('files'),
        whiteboard:v.string()
    },
    handler:async(ctx, args) =>{
        const result =await ctx.db.patch(args._id,{whiteboard:args.whiteboard});
        return result;
    },
})

/**
 * updateWhiteboard Mutation:

This mutation operation updates the whiteboard field of a file specified by _id.
It takes arguments _id (the ID of the file to update) and whiteboard.
Inside the handler function, it patches the specified file's whiteboard field with the new whiteboard value.
It returns the result of the patch operation.

 */

export const getFileById=query({
    args:{
        _id:v.id('files')
    },
    handler:async(ctx, args)=> {
        const result=await ctx.db.get(args._id);
        return result;
    },
})



/**
 * etFileById Query:

This query operation retrieves a file based on its _id.
It takes the _id of the file as an argument.
Inside the handler function, it retrieves the file from the database based on the provided _id.
It returns the resulting file.
 */







/**
 * These operations appear to interact with a database (ctx.db) to perform CRUD (Create, Read, Update, Delete) operations on files. The ctx parameter likely contains context information, including a reference to the database service or client.
 */