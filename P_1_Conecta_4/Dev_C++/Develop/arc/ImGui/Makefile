CXX := clang++
SUB_INC_DIR   := ./inc

INC_SDL2 := -I"../SDL2/SDL2-devel-2.28.3-mingw/SDL2-2.28.3/x86_64-w64-mingw32/include/SDL2" #SDL.h

SUB_CXXFLAGS  := -ggdb -O2 -Wall -Wextra $(addprefix -I,$(SUB_INC_DIR)) $(INC_SDL2)# incluir headers

SUB_LIB_DIR   := ./lib
SUB_BUILD_DIR := ./build

STATIC_LIBRARY := $(SUB_LIB_DIR)/libm_biblioteca.a

COMPILE.cc = ${CXX} $(SUB_CXXFLAGS) -c $< -o $@

SUB_LIB_LIST  := $(wildcard $(SUB_LIB_DIR)/*.cpp) 
SUB_LIB_OBJ  :=  $(addprefix $(SUB_BUILD_DIR)/,$(notdir $(SUB_LIB_LIST:.cpp=.o))) 

.PHONY: sub_all 

sub_all: $(STATIC_LIBRARY)

$(SUB_BUILD_DIR)/%.o: ${SUB_LIB_DIR}/%.cpp
	@echo "+++++ Target $@ fired with deps $^..."
	${PRECOMPILE}
	${COMPILE.cc}
	${POSTCOMPILE}

$(STATIC_LIBRARY): $(SUB_LIB_OBJ)
	ar rcs $@ $(SUB_LIB_OBJ)

#....................................................




