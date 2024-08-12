import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/data.json`) 

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return NextResponse.json(data)
    }
    catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' });
    }
}
