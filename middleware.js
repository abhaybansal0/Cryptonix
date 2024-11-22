import { NextRequest, NextResponse } from "next/server";

export function middleware(request){
    const isLoggedin = request.cookies.get("auth-ticket");

    const url = request.nextUrl.clone();


    if(url.pathname == '/'){

        if(isLoggedin){
            ulr.pathname = '/dashboard';
            return NextResponse.redirect(url);
        } else {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}

