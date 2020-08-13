var ClickCnt;
var myPicture;
GameFlg = false;
board = [];

function myVisi(myID,VFlg){
  if( VFlg ){
    document.getElementById(myID).style.visibility = "visible";
  }else{
    document.getElementById(myID).style.visibility = "hidden";
  }
}

function myStart(){
  GameFlg = true;
  myVisi("message",false);
  document.GForm.GSelect.disabled = true;
  document.GForm.GStart.disabled = true;
  document.GForm.GGive.disabled = false;

  ClickCnt = 0;
  document.getElementById("click").innerHTML= "クリック回数 "+ClickCnt+"回";

  for(h=0;h<=5;h++){
    board[h] = [];
    for(i=0;i<=5;i++){
      board[h][i] = 0;
    }
  }

  for(x=1;x<=4;x++){
    for(y=1;y<=4;y++){
      board[x][y] = x+(y-1)*4;
    }
  }

  x = 4;
  y = 4;

  for(i=0;i<1000;i++){
    myRandom = Math.floor(Math.random()*4)+1;

    if((myRandom==1)&&(board[x+1][y]>0)){
    NumA = board[x][y];
    NumB = board[x+1][y];
    board[x][y] = NumB;
    board[x+1][y] = NumA;
    x++;
    }

    if((myRandom==2)&&(board[x-1][y]>0)){
    NumA = board[x][y];
    NumB = board[x-1][y];
    board[x][y] = NumB;
    board[x-1][y] = NumA;
    x--;
    }

    if((myRandom==3)&&(board[x][y+1]>0)){
    NumA = board[x][y];
    NumB = board[x][y+1];
    board[x][y] = NumB;
    board[x][y+1] = NumA;
    y++;
    }

    if((myRandom==4)&&(board[x][y-1]>0)){
    NumA = board[x][y];
    NumB = board[x][y-1];
    board[x][y] = NumB;
    board[x][y-1] = NumA;
    y--;
    }
  } 

  myPicture = document.GForm.GSelect.selectedIndex;

  for(x=1;x<=4;x++){
    for(y=1;y<=4;y++){
    document.getElementById("x"+x+"y"+y).src ="images/"+board[x][y]+".gif";
    }
  }
}

function myExchange(x,y){
  if( !GameFlg ){
    return;
  }

  if(board[x+1][y]==16){
    NumA = board[x][y];
    NumB = board[x+1][y];
    board[x][y] = NumB;
    board[x+1][y] = NumA;
    ClickCnt++;
  }

  if(board[x-1][y]==16){
    NumA = board[x][y];
    NumB = board[x-1][y];
    board[x][y] = NumB;
    board[x-1][y] = NumA;
    ClickCnt++;
  }

  if(board[x][y+1]==16){
    NumA = board[x][y];
    NumB = board[x][y+1];
    board[x][y] = NumB;
    board[x][y+1] = NumA;
    ClickCnt++;
  }

  if(board[x][y-1]==16){
    NumA = board[x][y];
    NumB = board[x][y-1];
    board[x][y] = NumB;
    board[x][y-1] = NumA;
    ClickCnt++;
  }

  for(x=1;x<=4;x++){
    for(y=1;y<=4;y++){
      document.getElementById("x"+x+"y"+y).src ="images/"+board[x][y]+".gif";
    }
  }

  document.getElementById("click").innerHTML= "クリック回数 "+ClickCnt+"回";
  ClearCheck();
}

function ClearCheck(){
  for(x=1;x<=4;x++){
    for(y=1;y<=4;y++){
      if(board[x][y] != x+(y-1)*4){
        return;
      }
    } 
  }

  GameFlg = false;
  myVisi("message",true);
  document.GForm.GSelect.disabled = false;
  document.GForm.GStart.disabled = false;
  document.GForm.GGive.disabled = true;
}

function myGive(){
  for(x=1;x<=4;x++){
    for(y=1;y<=4;y++){
      board[x][y] = x+(y-1)*4;
      document.getElementById("x"+x+"y"+y).src ="images/"+board[x][y]+".gif";
    }
  }

  GameFlg = false;
  myVisi("message",false);
  document.GForm.GSelect.disabled = false;
  document.GForm.GStart.disabled = false;
  document.GForm.GGive.disabled = true;
}

