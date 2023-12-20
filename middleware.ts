import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

 function myMiddleware(request: NextRequest) {
     // Your Middleware logic here
    const response = NextResponse.next()
     if (response.status === 401) {
      //   console.log('response===>>>',response);
     }
    
    
    
  return NextResponse.next(); // Pass control to the next Middleware or route handler
}
export default myMiddleware;