#ifndef EXCEPTION_HPP_
#define EXCEPTION_HPP_

#pragma once

#include <exception>
#include <string>


#ifdef __cplusplus
extern "C" {
#endif

	#include "SDL.h" //SDL_GetError()

#ifdef __cplusplus
}
#endif


class Exception: public std::exception{
	public:
		explicit Exception(std::string _file,const char* _msg,int _line){
			std::string aux;
			_file += " ";
			aux.assign(_msg);
			this->messageError += _file + std::to_string(_line)+" -> " + aux; 
		}

		virtual const char* what() const throw() override { return messageError.c_str(); }
        

	private:
		std::string messageError = "";
};


#define ASSERT(_ptr, _file, _line) \
    if (!(_ptr)) { \
        throw Exception(_file, SDL_GetError(), _line); \
    }

#endif