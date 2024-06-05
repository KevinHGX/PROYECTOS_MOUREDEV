#ifndef TIMER_HPP_
#define TIMER_HPP_

#ifdef __cplusplus
extern "C" {
#endif

	#include "SDL.h"

#ifdef __cplusplus
}
#endif

class Timer{
public:
	explicit Timer():t_start(0){}

	inline void start(){ this->t_start = SDL_GetTicks64(); }

	inline Uint32 GetTicks(){ return (SDL_GetTicks64()-this->t_start);}

private:
	Uint32 t_start;
};

struct FPS{
	Timer fpsTimer,capTimer;

	float avgFPS = 0;
	int contFrames = 0,fpsCap = 60, frameTicks;
   	int screenTicksPerFrame = 1000 / fpsCap;
   	//-----------------------

   	void Update(){
   		avgFPS = contFrames/ (fpsTimer.GetTicks() / 1000.f);
   		contFrames++;
   	}

 	void Delay(){
 		frameTicks = capTimer.GetTicks();
 		if(frameTicks < screenTicksPerFrame){
 			SDL_Delay(screenTicksPerFrame - frameTicks);
 		}
 	}  	
};



#endif