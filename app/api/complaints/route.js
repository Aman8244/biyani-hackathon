import { NextResponse } from "next/server";
// import express from 'express';
// const app = express();
import dbConnect from "@/app/utils/dbConnect";
import Complaint from "../models/Complaints"



export async function POST(req, res) {
    await dbConnect();
    const data = await req.json();
    console.log(data.image)
    const { contactNumber, details ,image} = data;
    const newCard = new Complaint({
        image: image,
        contactNumber,
        details,
    })
    const cardData = await newCard.save();
    console.log(data)
    return NextResponse.json({ message: 'POST request handled',cardData });
}