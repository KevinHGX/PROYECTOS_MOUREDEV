#ifndef MEMORYCLEANUP_HPP_
#define MEMORYCLEANUP_HPP_

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

	#include "SDL.h"

#ifdef __cplusplus
}
#endif

#include <type_traits>

// Definición parcial de MemoryCleanUp para T = SDL_Window
template<typename T>
typename std::enable_if<std::is_same<T, SDL_Window>::value>::type
MemoryCleanUp(T*& puntero) {
    if (puntero != nullptr) {
        SDL_DestroyWindow(puntero);
        puntero = nullptr;
    }
}

// Definición parcial de MemoryCleanUp para T = SDL_Renderer
template<typename T>
typename std::enable_if<std::is_same<T, SDL_Renderer>::value>::type
MemoryCleanUp(T*& puntero) {
    if (puntero != nullptr) {
        SDL_DestroyRenderer(puntero);
        puntero = nullptr;
    }
}

// Definición parcial de MemoryCleanUp para T = SDL_Texture
template<typename T>
typename std::enable_if<std::is_same<T, SDL_Texture>::value>::type
MemoryCleanUp(T*& puntero) {
    if (puntero != nullptr) {
        SDL_DestroyTexture(puntero);
        puntero = nullptr;
    }
}

// Definición parcial de MemoryCleanUp para T = SDL_Surface
template<typename T>
typename std::enable_if<std::is_same<T, SDL_Surface>::value>::type
MemoryCleanUp(T*& puntero) {
    if (puntero != nullptr) {
        SDL_FreeSurface(puntero);
        puntero = nullptr;
    }
}


#endif