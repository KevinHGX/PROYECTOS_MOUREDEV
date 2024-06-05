#ifndef CELLS_HPP_
#define CELLS_HPP_

#pragma once

#include <vector>
#include <string>

//#include "RenderManager.hpp"
#include "../Config/Exception.hpp"
#include "../Util/MemoryCleanup.hpp"

#ifdef __cplusplus
extern "C" {
#endif

	#include "SDL.h"
	#include "SDL_image.h"

#ifdef __cplusplus
}
#endif

class Cells{
public:
	Cells(SDL_Renderer* _renderer){
		textureStack.resize(4,NULL);
		init(_renderer);
	}
	~Cells(){
		for (auto texture : textureStack) {
        	MemoryCleanUp(texture);
    	}
    	textureStack.clear(); // Limpiar el vector de texturas
	}

	inline void init(SDL_Renderer* _renderer){
		std::string file = "../res/icons/CA.png";
		textureStack[0] = IMG_LoadTexture(_renderer,file.c_str());
		ASSERT(textureStack.at(0),__FILE__,__LINE__);
		file = "../res/icons/CR.png";
		textureStack[1] = IMG_LoadTexture(_renderer,file.c_str());
		ASSERT(textureStack.at(1),__FILE__,__LINE__);
		file = "../res/icons/CW.png";
		textureStack[2] = IMG_LoadTexture(_renderer,file.c_str());
		ASSERT(textureStack.at(2),__FILE__,__LINE__);
		file = "../res/icons/plus [#1513].png";
		textureStack[3] = IMG_LoadTexture(_renderer,file.c_str());
		ASSERT(textureStack.at(3),__FILE__,__LINE__);

	}

	SDL_Texture* getTexture(int _index) const {
		return this->textureStack.at(_index);
	}


private:
	std::vector<SDL_Texture*> textureStack;
public:
	inline static SDL_Rect select{115,100,10,10};
};


#endif