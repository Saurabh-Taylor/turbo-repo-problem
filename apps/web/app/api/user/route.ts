import { PrismaClient } from '@repo/db';
import { NextResponse } from 'next/server';
 
const client = new PrismaClient();



export async function GET() {
    await client.user.create({
        data:{
            email: "asd",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message:"healthy server"
    })
}