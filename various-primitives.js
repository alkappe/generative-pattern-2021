circle( x+5,y+5, 10 );
square( x,y, 10 );
line( x+5,y, x+5,y+10 );                   // |
line( x,y+5, x+10,y+5 );                   // —
quad( x+5,y, x+10,y+5, x+5,y+10, x,y+5 );  // 🝔
arc( x+5,y, 10,10, 0,PI );                 // ︶
arc( x+5,y+10, 10,10, PI,TWO_PI );         // ︵