#ifndef RenderManager_HPP_
#define RenderManager_HPP_

#pragma once

#include <iostream>
#include <string>

/*============================
=            SDL2            =
============================*/

#ifdef __cplusplus
extern "C" {
#endif

	#include "SDL.h"
	#include "SDL_image.h"

#ifdef __cplusplus
}
#endif

/*=====  End of SDL2  ======*/

#include "../Config/Complements.hpp"

/*----------  Class principal  ----------*/

class RenderManager{
public:
	static RenderManager& getInstance(){
		static RenderManager instance;
		return instance;
	}

public:
	RenderManager(){}
	RenderManager(const RenderManager&)=delete;
	RenderManager& operator=(const RenderManager&)=delete;
	~RenderManager(){
		Cleanup();
	}

	void SetUpWindow();
	void Cleanup();

	inline SDL_Renderer* getRenderer() const {
		return this->renderer;
	}

	inline SDL_Window* getWindow() const {
		return this->window;
	}

	inline int getScreenWidth() const {
		return this->SCREEN_WIDTH;
	}

	inline int getScreenHeight() const {
		return this->SCREEN_HEIGHT;
	}


private:
	SDL_Window* window{NULL};
	SDL_Renderer* renderer{NULL};	
	const int SCREEN_WIDTH = 700;
	const int SCREEN_HEIGHT = 700;

};


#endif
