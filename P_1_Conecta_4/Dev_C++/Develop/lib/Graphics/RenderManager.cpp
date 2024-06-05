#include "../inc/Graphics/RenderManager.hpp"
#include "../inc/Config/Exception.hpp"
#include "../inc/Util/MemoryCleanup.hpp"

void RenderManager::SetUpWindow(){

	SDL_WindowFlags window_flags = (SDL_WindowFlags)(SDL_WINDOW_RESIZABLE | SDL_WINDOW_ALLOW_HIGHDPI);
    this->window = SDL_CreateWindow(" ENGINE ", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, this->SCREEN_WIDTH, this->SCREEN_HEIGHT, window_flags);
    ASSERT(window,__FILE__,__LINE__);

    this->renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_PRESENTVSYNC | SDL_RENDERER_ACCELERATED);
    ASSERT(renderer,__FILE__,__LINE__);
    
    std::string file = ICON_BLACK_LOGO;
    SDL_Surface* icon = IMG_Load(file.c_str()); 
    ASSERT(icon,__FILE__,__LINE__);

    SDL_SetWindowIcon(window,icon);  
    MemoryCleanUp(icon);
}

void RenderManager::Cleanup(){
	/*----------  SDL2  ----------*/
	MemoryCleanUp(renderer);
	MemoryCleanUp(window);
}