import { LevelTwo } from "@/models/Tables";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
      const get2 = await LevelTwo.find({}).countDocuments();
      return NextResponse.json(get2);
    } catch (error) {
      return NextResponse.json('Result not found')
    }
  }