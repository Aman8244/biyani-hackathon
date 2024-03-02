import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
    const data = await req.json();
    const { token } = data;
    const secretKey = process.env.secretKey;
    const decoded = jwt.verify(token,secretKey)
    return NextResponse.json({
       ...decoded
    })
}