// // app/api/get-cookie/route.js
// import { NextResponse } from 'next/server';
// import { parse } from 'cookie';

// export async function GET(request) {
//   const cookies = parse(request.headers.get('cookie') || '');

//   return NextResponse.json({
//     message: 'Cookies retrieved successfully',
//     cookies,
//   });
// }



// // app/api/set-cookie/route.js

// import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';

// export async function POST(request) {
//   const { name, value } = await request.json();

//   if (!name || !value) {
//     return NextResponse.json({ message: 'Name and value are required' }, { status: 400 });
//   }

//   const cookie = serialize(name, value, {
//     httpOnly: true, // Prevents JavaScript access
//     secure: process.env.NODE_ENV === 'production', // Only use HTTPS in production
//     sameSite: 'Lax', // CSRF protection
//     maxAge: 60 * 60 * 24, // 1 day
//     path: '/', // Valid across the entire site
//   });

//   const response = NextResponse.json({ message: 'Cookie set successfully' });
//   response.headers.set('Set-Cookie', cookie);

//   return response;
// }
