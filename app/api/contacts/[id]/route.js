import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function PUT(request, {params}) {
    const { id } = params;
    const {newName: name, newEmail: email, newPhone: phone, newAddress: address, newProfilePicture: profilePicture} = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {name, email, phone, address, profilePicture})
    return NextResponse.json({message: "Contact data Updated"}, {status: 200});
}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status: 200})
}