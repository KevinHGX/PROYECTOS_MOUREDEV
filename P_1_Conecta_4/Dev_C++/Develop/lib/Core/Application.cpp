#include "../inc/Core/Application.hpp"
#include "../inc/Config/Exception.hpp"

void Application::StartUp(){
	ConfWindow->SetUpWindow();
    UI->SetUp(ConfWindow->getWindow(),ConfWindow->getRenderer());
    time.fpsTimer.start();
	time.capTimer.start();
}

void Application::Execute(){
	while(!this->statusApplication){
		
		Events();
		Update();
		Clear();
		Render();

		this->time.Delay();
		//SDL_Delay(50);
    }
}

/*----------  Private Functions  ----------*/

void Application::Events(){
	SDL_PollEvent(&(event));
	Input->WindowEvent(statusApplication,event,ConfWindow->getWindow());//Window
	Input->ProcessEventKeyBoard(event);//KeyBoard
	Input->ProcessEvent(event);//Imgui
}

void Application::Update() {
	UI->UpdateNewFrame();
	this->time.capTimer.start();
	this->time.Update();
}

void Application::Clear() {
	SDL_SetRenderDrawColor(ConfWindow->getRenderer(),0,0,0,255);
	SDL_RenderClear(ConfWindow->getRenderer());
}

void Application::Render() {
	board->render();
	UI->ImGui();
	UI->Render();



	SDL_RenderPresent(ConfWindow->getRenderer());
}