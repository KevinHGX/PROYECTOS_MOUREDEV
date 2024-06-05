#ifndef APPLICATION_HPP_
#define APPLICATION_HPP_

#pragma once

#include <iostream>
#include <memory>

#include "../Config/Exception.hpp"
#include "../Graphics/RenderManager.hpp"
#include "../Input/InputManager.hpp"
#include "../UI/UIManager.hpp"
#include "../Util/Timer.hpp"

/*==================================
=            Dear ImGUI            =
==================================*/


#include "imgui.h"
#include "imgui_impl_sdl.h"
#include "imgui_impl_sdlrenderer.h"

//#include "imgui_stdlib.hpp" INPUT


/*=====  End of Dear ImGui  ======*/

/*----------  Class principal  ----------*/
class Application{

public:
	static Application& getInstance(){
		static Application instance;
        return instance;
	}

public:
	Application(){
		ConfWindow = std::make_unique<RenderManager>();
		board = std::make_shared<Board>();
		UI = std::make_unique<UIManager>(board);
		Input = std::make_unique<InputManager>(board);
	}
	Application(const Application&)=delete;
	Application& operator = (const Application&) = delete;
	~Application(){}

	void StartUp();
	void Execute();

private:
	void Events();
	void Update();
	void Clear();
	void Render();

private:
	
	FPS time;
	bool statusApplication = false;
	SDL_Event event;
	
	std::unique_ptr<RenderManager> ConfWindow;
	std::unique_ptr<UIManager> UI;
	std::unique_ptr<InputManager> Input;
	std::shared_ptr<Board> board;

};

#endif


