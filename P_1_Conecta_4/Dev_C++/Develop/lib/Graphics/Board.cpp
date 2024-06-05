#include "../../inc/Graphics/Board.hpp"


void Board::initAndReset() {
	this->board.clear();
	this->board.resize(COL);

	for (int i = 0; i < COL; ++i){
		this->board[i].resize(ROW,0);
	}	

	this->FinishGame = false;
}

void Board::selectedCol(const int _col) {

	if(!FinishGame){// veriica si l juego a terminado declarando un ganador

		for (int i = ROW-1; i > -1; --i){
			if(this->board[_col][i] == 0){
				this->board[_col][i] = this->player;
				FinishGame = checkWins(i,_col);//5,6
				break;
			}	
		}

		if(FinishGame){
			this->Score.at(player) += 1; 
		}

	}

}

//Funcion recursiva     3,6
bool Board::checkWins(int _x, int _y) {
	//down
	int cont = 4;
	for (int y = _x; y < ROW; ++y){
		cont = (board[_y][y] == player)? (cont-1) : 4;
		if(cont == 0){ return true;}
	}
	

	//left to right
	cont = 4;
	for (int y = 0; y < COL; ++y){
		cont = (board[y][_x] == player) ? (cont-1) : 4 ;
		if(cont == 0){ return true; }
	}


	//diagonal 1 LEFT_UP <> RIGHT_DOWN
	if((_x == _y) && DiagonalLeftUp_RightDown(0,0)){ return true; }
	if((_y < _x) && DiagonalLeftUp_RightDown(0,(_x - _y))){ return true; }
	if((_y > _x) && DiagonalLeftUp_RightDown((_y - _x),0)){ return true; }

	//diagonal 2 LEFT_DOWN <> RIGHT_UP
	cont = 4;
	if((_x+_y) > (ROW-1)){
		//std::cout<<" mayor 5"<<std::endl;
		_y = (_x+_y) - (ROW-1) ;//y
		_x = (ROW-1);//x
	}else{
		//std::cout<<" menor 5"<<std::endl;
		_x = (_x+_y);//x
		_y = 0;//y
	}
	while((_y <= (COL-1)) && (_x >= 0)){
		cont = (board[_y][_x] == player) ? (cont-1) : 4 ;
		//std::cout<<_y<<"::"<<_x<<":"<<cont<<std::endl;
		if(cont == 0){ return true; }
		--_x;++_y;
	}

	return false;
    
}

bool Board::DiagonalLeftUp_RightDown(int _x,int _y){
	int cont = 4;
	while((_x <= (COL-1)) && (_y <= (ROW-1))){
		cont = (board[_x][_y] == player) ? (cont-1) : 4 ;
		++_x; ++_y;
	}

	if(cont == 0){ return true; }

	return false;
}

void Board::render(){
	SDL_SetRenderDrawColor(this->aux_renderer,255,255,255,255);
	SDL_RenderDrawRect(aux_renderer, &this->rectMesh);
	SDL_SetRenderDrawColor(this->aux_renderer,0,0,0,255);
	SDL_Rect rect;

	for (int i = 0; i < COL; ++i){
		for (int j = 0; j < ROW; ++j){
			switch(this->board[i][j]){
				case 0://WHITE
					rect.x = ((75*i)+75);
					rect.y = ((75*j)+105);
					rect.w = rect.h = 95;
					SDL_RenderCopy(this->aux_renderer, cell->getTexture(2), NULL, &rect);
					break;
				case PLAYER_1://RED
					rect.x = ((75*i)+80);
					rect.y = ((75*j)+110);
					rect.w = rect.h = 85;
					SDL_RenderCopy(this->aux_renderer, cell->getTexture(1), NULL, &rect);
					break;
				case PLAYER_2://YELLOW
					rect.x = ((75*i)+85);
					rect.y = ((75*j)+115);
					rect.w = rect.h = 75;
					SDL_RenderCopy(this->aux_renderer, cell->getTexture(0), NULL, &rect);
					break;
			}
		}
	}
	
	SDL_RenderCopy(this->aux_renderer,cell->getTexture(3), NULL,&cell->select);
}



