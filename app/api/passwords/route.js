import connectDB from '@/app/lib/db';
import mongoose from 'mongoose';

export async function GET(request, res) {
    try {
        
        await connectDB();
        const url = new URL(request.url);
        let email = url.searchParams.get('email').split('@')[0];
        let passwords = [];
        
        
        const collections = await mongoose.connection.db.listCollections().toArray();
        const users = collections.map((collection) => collection.name);
        
        
        
        console.log("Sending all the Passwords");

        for(const user of users) {
            try {
                
                if(user === email)  passwords = await mongoose.connection.db.collection(`${email}`).find({}).toArray();
                console.log(passwords);
            } catch (error) {
                console.log('Error was:', error);
                
            }   
        }
        
        

        
        return new Response(JSON.stringify(passwords), {
            status: 200,
            header: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching passwords' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function POST(request, res) {
    try {

        function sanitizeEmailForCollection(email) {
            return email.replace(/[^a-z0-9@]/gi, '_').toLowerCase();
        }

        await connectDB();
        const url = new URL(request.url);
        let email = url.searchParams.get('email').split('@')[0];
        sanitizeEmailForCollection(email);
        toString(email);
        console.log(email);


        const UserSchema = new mongoose.Schema({
            email: { type: String, required: true, default: "None" },
            site: { type: String, required: true, default: 'None' },
            username: { type: String, required: true, default: "None" },
            password: { type: String, required: true, default: "None" },
            id: { type: String, required: true, default: 0 }
        }, {
            collection: email
        });

        const Users = mongoose.models[email] || mongoose.model(email, UserSchema);


        const data = await request.json();

        for (const curr_data of data) {
            try {
                const newPassword = new Users(curr_data);
                await newPassword.save();
                // full_data.push(newPassword);
                // console.log('A password was saved');
            } catch (error) {
                console.error('Error saving password:', error); 
            }
            
        }

        console.log(`The Passwords For the user: ${email} were saved!!`);

        return new Response(JSON.stringify({ message: 'Passwords Succesfully Saved!' }), {
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


export async function DELETE(req, res) {

    try {
        
        await connectDB();
        const url = new URL(req.url);
        const email = url.searchParams.get('email').split('@')[0];
        const id = url.searchParams.get('id');
        
        
        const collections = await mongoose.connection.db.listCollections().toArray();
        const users = collections.map((collection) => collection.name);
        
        
        

        for(const user of users) {
            try {
                
                if(user === email)  mongoose.connection.db.collection(`${email}`).deleteMany({id: `${id}`});
                console.log(`Password with id ${id} was deleted`);
            } catch (error) {
                console.log('Error was:', error);
                
            }   
        }
        return new Response(JSON.stringify(passwords), {
            status: 200,
            header: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching passwords' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
