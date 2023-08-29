import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "../../../../models/Post";

export const GET = async (request,{params}) => { 
    
    const {id} = params
    

    try {
        await connect();
        const post = await Post.findById(id);
        return new NextResponse(post, { status:200 });

    } catch (err) {
        return new NextResponse("It works", {status: 500});
    }



};