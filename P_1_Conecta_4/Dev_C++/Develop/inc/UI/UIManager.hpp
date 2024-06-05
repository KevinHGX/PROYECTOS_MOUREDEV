#ifndef UIMANAGER_HPP_
#define UIMANAGER_HPP_

#pragma once

#include <string>
#include <memory>

#ifdef __cplusplus
extern "C" {
#endif

	#include "SDL.h"
	#include "SDL_ttf.h"

#ifdef __cplusplus
}
#endif

//IMGUI
#include "imgui.h"
#include "imgui_impl_sdl.h"
#include "imgui_impl_sdlrenderer.h"
//IMPLOT
//#include "implot.h"
//#include "implot_internal.h"

#include "../Config/Exception.hpp"
#include "../Util/MemoryCleanup.hpp"
#include "../Graphics/Board.hpp"

enum Confg{
	TTF_SIZE = 25
};

class UIManager{
public:
	UIManager(std::shared_ptr<Board> _board){
		this->board = _board;
	}

	~UIManager(){
		//Close();
	}

	inline void SetUp(SDL_Window* _window,SDL_Renderer* _renderer){
		this->renderer = _renderer;
		ImGui_ImplSDL2_InitForSDLRenderer(_window,renderer);
    	ImGui_ImplSDLRenderer_Init(renderer);
    	setUpTTF();
    	board->SetRenderer(_renderer);
	}

	static inline void InputEvent(const SDL_Event& _event){	
		ImGui_ImplSDL2_ProcessEvent(&_event);
	}

	inline void ImGui(){
		ImGui::Begin("Interfaz");{
			static int clickedResetBoard = 0;
	        if (ImGui::Button("Resetear Matriz"))
	            clickedResetBoard++;
	        if (clickedResetBoard & 1){ board->initAndReset(); clickedResetBoard++; }
	        ImGui::SameLine();
	        static int clickedResetScore = 0;
	        if (ImGui::Button("Resetear Puntaje"))
	            clickedResetScore++;
	        if (clickedResetScore & 1){ 
	        	board->ScoreReset(); 
	        	clickedResetScore++; }

			ImGui::Separator();
			ImGui::Text("Player RED: %d",board->getScore(PLAYER_1));ImGui::SameLine();
			ImGui::Text("Player YELLOW: %d",board->getScore(PLAYER_2));

		}ImGui::End();
	}

	/*=============================================
	=            Section comment block            =
	=============================================*/
	
	inline void setUpTTF(){
		
		font = TTF_OpenFont("../res/fonts/Azonix.otf",60);
		ASSERT(font,__FILE__,__LINE__);

		SDL_Surface* fontSurface = nullptr;
		SDL_Color setColor = {255,255,255,200};
		std::string title_text = "CONECTA 4";

		fontSurface = TTF_RenderText_Solid(font,title_text.c_str(),setColor); 
    	fontTexture = SDL_CreateTextureFromSurface(renderer,fontSurface);  
    
		dest = {abs((fontSurface->w/2)-(350)), 21, fontSurface->w, fontSurface->h};

	    MemoryCleanUp(fontSurface);
	}

	inline void renderFont(){
		SDL_RenderCopy(this->renderer,fontTexture,NULL,&this->dest);
	}

	/*=====  End of Section comment block  ======*/	

	inline void UpdateNewFrame(){
   		ImGui_ImplSDLRenderer_NewFrame();
    	ImGui_ImplSDL2_NewFrame();
    	ImGui::NewFrame();
	}

	inline void Render(){
		ImGui::Render();
	    ImGui_ImplSDLRenderer_RenderDrawData(ImGui::GetDrawData());
	    renderFont();
	}

	void Close(){
		TTF_CloseFont(font);
		font = NULL;
		MemoryCleanUp(fontTexture);
	}

private:
	//bool show_demo_window = true;
	SDL_Renderer* renderer{NULL};
	TTF_Font* font{nullptr};
	SDL_Texture* fontTexture{nullptr};
	SDL_Rect dest;

	std::shared_ptr<Board> board;

};

#endif