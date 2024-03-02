import User from "@/app/api/models/User";
import { NextResponse } from "next/server";

export async function POST(req,res){
    const data = await req.json();
    const {email} = data;
    var result;
    const find = await User.findOne({email:email})
    if(find){
        return NextResponse.json(find);
    }
    return NextResponse.json({
        status:201,
        message:"not logged In"
    })

}