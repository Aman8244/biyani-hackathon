import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/api/models/User";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
    
    try {
        const data = await req.json();
        const saltRounds = 10
        bcrypt.hash(data.password, saltRounds, (err, hash) => {
            if (err) {
                return NextResponse.json({
                    message: "something unexpected happened",
                    status: 201
                })
            }
            new User({
                name: data.name,
                password: hash,
                email: data.email,
            }).save();

        })
        const seckey = process.env.secretKey;
        const token = jwt.sign({ email: req.body.email }, seckey, { expiresIn: '24h' })
        return NextResponse.json({
            message: "Registered Successfully!",
            token: token,
            status: 200
        });

    } catch (error) {
        return NextResponse.json({
            message: "error!",
            status: 201
        });
    }
}