import connectDB from '@/app/lib/db';
import PasswordModel from '@/app/lib/models/Password';

export async function GET(request) {
    try {
        await connectDB();
        // const passwords = await PasswordModel.find({});
        // return new Response(JSON.stringify(passwords), {
        //     status: 200,
        //     headers: { 'Content-Type': 'application/json' },
        // });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching passwords' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const data = await request.json();
        const newPassword = await PasswordModel.create(data);
        return new Response(JSON.stringify(newPassword), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
        
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error saving password' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
