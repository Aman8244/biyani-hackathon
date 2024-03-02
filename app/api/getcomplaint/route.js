import Complaints from "../models/Complaints";
import { NextResponse } from "next/server";

export async function POST(req,res){
    const data = await req.json();
    const {email} = data;
    const find = await Complaints.find({email:email});
    console.log(find)
    if(find){
        return NextResponse.json({data:find})
    }
    return NextResponse.json({
        status:201,
        message:"Bad Request"
    })
}