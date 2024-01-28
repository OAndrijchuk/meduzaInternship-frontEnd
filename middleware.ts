import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

 function myMiddleware(request: NextRequest) {
     // Your Middleware logic here
  return NextResponse.next(); 
}
export default myMiddleware;