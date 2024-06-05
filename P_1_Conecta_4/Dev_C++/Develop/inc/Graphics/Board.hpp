#ifndef BOARD_HPP_
#define BOARD_HPP_

#pragma once

#include <vector>
#include <memory>
#include <map>
#include <iostream>

#include "Cells.hpp"

enum Size{      //   Rojo      Amarillo
	ROW=6 ,COL=7, PLAYER_1 = 1, PLAYER_2 = 2, CONECT = 4
};

using Matrix = std::vector<std::vector<int>>;
using MAP = std::map<int, int>;

class Board{
public:
	Board(){ 
		this->player = PLAYER_1;
		initAndReset(); 
	}
	~Board(){}

	inline void SetRenderer(SDL_Renderer* _renderer){
		this->aux_renderer = _renderer;
		cell= std::make_unique<Cells>(_renderer);
	}
	void initAndReset();
	void selectedCol(const int _col);
	bool checkWins(int _x,int _y);
	bool DiagonalLeftUp_RightDown(int _x,int _y);
	bool DiagonalLeftDown_RightUp(int _x,int _y);


	void render();

	inline void changeTurns(){
		this->player = (player == PLAYER_1)? PLAYER_2 : PLAYER_1 ;
	}

	inline int getScore(const int _player) const{
		return this->Score.at(_player);	
	}
	
	inline void ScoreReset(){
		this->Score.at(PLAYER_1) = 0;
		this->Score.at(PLAYER_2) = 0;
	} 

private:
	SDL_Rect rectMesh{50,80,600,525};
	MAP Score={{PLAYER_1,0},{PLAYER_2,0}};
	bool FinishGame = false;
	Matrix board;
	int player;
	std::unique_ptr<Cells> cell;
	SDL_Renderer* aux_renderer{NULL};
	
};

#endif