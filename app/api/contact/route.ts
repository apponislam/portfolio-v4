import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Connect to database
    const client = await clientPromise;
    const db = client.db(); // Uses db name from the connection string ("portfoliov4")
    
    // Save contact message
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      subject: subject || '',
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact Form Database Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
