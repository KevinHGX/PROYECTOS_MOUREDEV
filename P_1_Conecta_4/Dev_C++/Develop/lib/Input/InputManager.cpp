#include "../../inc/Input/InputManager.hpp"

void InputManager::ProcessEventKeyBoard(SDL_Event& _event) {
	if(_event.type == SDL_KEYDOWN){
		switch(_event.key.keysym.sym){
			case SDLK_RIGHT:
				current = (current == 6)? 6 : current+1; 
				Cells::select.x= (75 * current)+115;
				break;
			case SDLK_LEFT:
				current = (current == 0)? 0 : current-1; 
				Cells::select.x= (75 * current)+115;
				break;
			case SDLK_RETURN:
				board->selectedCol(current);
				board->changeTurns();
				break;
		}
	}		
}