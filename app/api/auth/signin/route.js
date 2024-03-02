

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/api/models/User";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
    try {
        const data = await req.json();

        var token, password;
        await User.findOne({ email: data.email }).then(response => {
            if (response === null) {
                return NextResponse.json({
                    message: "Not registered",
                    status: 201
                });
            } else {
                password = response.password;

            }
        });
        bcrypt.compare(data.password, password, (err, result) => {
            if (result !== true) {
                return NextResponse.json({
                    message: "Incorrect Password*",
                    status: 201
                });
            }
        });
        const seckey = process.env.secretKey;
        token = jwt.sign({ email: data.email }, seckey, { expiresIn: '24h' })
        return NextResponse.json({
            message: "Authenticated Successfully!",
            token: token,
            status: 200
        });


    } catch (err) {
        console.log(`Catched error: ${err}`);
        return NextResponse.json({
            message: "Something went wrong",
            status: 500
        });
    }
};
