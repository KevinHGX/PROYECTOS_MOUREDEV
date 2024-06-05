#ifndef INPUTMANAGER_HPP_
#define INPUTMANAGER_HPP_

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

	#include "SDL.h"

#ifdef __cplusplus
}
#endif

#include <memory>

/*=======================================
=            Headers Propios            =
=======================================*/

#include "../UI/UIManager.hpp"
#include "../Graphics/Board.hpp"

/*=====  End of Headers Propios  ======*/


class InputManager{
public:
	InputManager(std::shared_ptr<Board> _board){
		board = _board;
	}
	~InputManager(){}

	void WindowEvent(bool& _statusApplication,SDL_Event& _event,SDL_Window* _window){
		if((_event.type == SDL_QUIT) || ((_event.type == SDL_WINDOWEVENT) && (_event.window.event == SDL_WINDOWEVENT_CLOSE) && (_event.window.windowID == SDL_GetWindowID(_window)))){
			_statusApplication = true;
		}
	}

	void ProcessEventKeyBoard(SDL_Event& _event);
	
	static void ProcessEvent(const SDL_Event& _event){
		
		UIManager::InputEvent(_event);//Imgui
	}

private:
	std::shared_ptr<Board> board;
	int current = 0;
};

#endif