import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

export async function POST(req) {
    try {
        const { name, email, password, role } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        const userRole = role || "user"; 

        await User.create({
            name,
            email,
            password: hashedPassword,
            role: userRole, 
        });

        
        return NextResponse.json({ msg: "User Registered." });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "User Not Registered" });
    }
}
