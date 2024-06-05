#MACROS
CXX       := clang++

BIN_DIR   := ./bin
ARC_DIR   := ./arc
INC_DIR   := ./inc
LIB_DIR   := ./lib
SRC_DIR   := ./src
BUILD_DIR := ./build

CORE_DIR  := $(LIB_DIR)/Core
GRAP_DIR  := $(LIB_DIR)/Graphics
INPU_DIR  := $(LIB_DIR)/Input
UI_DIR    := $(LIB_DIR)/UI

#---------------------- SDL2 -----------------------------------
# Asegurae de descomprimir los archivos .Zip alojados en "arc/SDL2" para generar el ejecutable del proyecto
LIBS = 	-L"./arc/SDL2/SDL2-devel-2.28.3-mingw/SDL2-2.28.3/x86_64-w64-mingw32/lib" \
 		-L"./arc/SDL2/SDL2_ttf-devel-2.22.0-mingw/SDL2_ttf-2.22.0/x86_64-w64-mingw32/lib"\
		-L"./arc/SDL2/SDL2_image-devel-2.0.5-mingw/SDL2_image-2.0.5/x86_64-w64-mingw32/lib" -static-libgcc -lmingw32 -lSDL2main -lSDL2 -lSDL2_test -lSDL2_image -lSDL2_ttf

INC_SDL := 	-I"./arc/SDL2/SDL2-devel-2.28.3-mingw/SDL2-2.28.3/x86_64-w64-mingw32/include/SDL2" \
		-I"./arc/SDL2/SDL2_ttf-devel-2.22.0-mingw/SDL2_ttf-2.22.0/x86_64-w64-mingw32/include/SDL2" \
		-I"./arc/SDL2/SDL2_image-devel-2.0.5-mingw/SDL2_image-2.0.5/x86_64-w64-mingw32/include/SDL2"


#---------------------- CXXFLAGS ----------------------------------
DEPFLAGS  := -MP -MD

CXXFLAGS  = -ggdb 
CXXFLAGS += -O2 
CXXFLAGS += -Wall -Wextra -Werror -Wpedantic 
CXXFLAGS += $(addprefix -I,$(INC_DIR)) 
CXXFLAGS += $(DEPFLAGS) $(INC_SDL) 
CXXFLAGS += $(addprefix -I,$(DIR_INC_IMGUI)) 
#CXXFLAGS += $(addprefix -I,$(DIR_INC_PLOT))

#---------------------- ImGui -------------------------------------
IMGUI = ./arc/ImGui
DIR_INC_IMGUI  = $(IMGUI)/inc
DIR_LIB_IMGUI  = $(IMGUI)/lib
DIR_BUILD_IMGUI = $(IMGUI)/build

STATIC_LIBRARY = $(DIR_LIB_IMGUI)/libm_biblioteca.a

#Sub-Makefile
LIB_LIST_IMGUI = $(wildcard $(DIR_LIB_IMGUI)/*.cpp) 
LIB_OBJ_IMGUI = $(wildcard $(DIR_BUILD_IMGUI)/*.o)  

.PHONY: sub_make_ImGui
sub_make_ImGui: 
	@echo "+++++++ Create Objs Dear ImGui +++++++"
	$(MAKE) -C $(IMGUI)

#---------------------- ImPlot -------------------------------------
#DIR_INC_PLOT = $(CONAN_INCLUDE_DIRS_IMPLOT)
#DIR_LIB_PLOT = -L $(CONAN_LIB_DIRS_IMPLOT) -limplot

#---------------------- Project -----------------------------------
#Todos los Archivos Cpp
ALL_LIST_CPP = $(wildcard $(SRC_DIR)/*.cpp) $(wildcard $(LIB_DIR)/**/*.cpp) 

#Archivos Cpp (/lib y /src)
SRC_LIST  = $(wildcard $(SRC_DIR)/*.cpp) 
LIB_LIST  = $(wildcard $(LIB_DIR)/**/*.cpp) 

#Dependencias
DEP_LIST = $(addprefix $(BUILD_DIR)/,$(notdir $(ALL_LIST_CPP:.cpp=.d))) 

#Objetos
SRC_OBJ =  $(addprefix $(BUILD_DIR)/,$(notdir $(SRC_LIST:.cpp=.o))) 
LIB_OBJ =  $(addprefix $(BUILD_DIR)/,$(notdir $(LIB_LIST:.cpp=.o))) 

.PHONY: build   
build: sub_make_ImGui sub-make-SDL

.PHONY: sub-make-SDL
sub-make-SDL: $(SRC_OBJ) $(LIB_OBJ) 

#Regla implicita
#SRC
$(SRC_OBJ): $(SRC_LIST) #Main.cpp
	@echo "+++++ Target $@ fired with deps $^..."
	$(CXX) $(CXXFLAGS) -c $< -o $@  

#LIB
COMPILE.cc = ${CXX} $(CXXFLAGS) -c $< -o $@

#CORE
${BUILD_DIR}/%.o: ${CORE_DIR}/%.cpp 
	@echo "+++++ Target $@ fired with deps $^..."
	${PRECOMPILE}
	${COMPILE.cc}
	${POSTCOMPILE}
#GRAPHICS
${BUILD_DIR}/%.o: ${GRAP_DIR}/%.cpp 
	@echo "+++++ Target $@ fired with deps $^..."
	${PRECOMPILE}
	${COMPILE.cc}
	${POSTCOMPILE}
#INPUT
${BUILD_DIR}/%.o: ${INPU_DIR}/%.cpp 
	@echo "+++++ Target $@ fired with deps $^..."
	${PRECOMPILE}
	${COMPILE.cc}
	${POSTCOMPILE}
#UI
${BUILD_DIR}/%.o: ${UI_DIR}/%.cpp 
	@echo "+++++ Target $@ fired with deps $^..."
	${PRECOMPILE}
	${COMPILE.cc}
	${POSTCOMPILE}

	
#---------------------- .EXE ------------------------------------
PROG_NAME = Application
.PHONY: ${PROG_NAME}

.PHONY: bin
bin: $(PROG_NAME) 
#--------------------- Create Bin -----------------------------------
#Regla explicita
$(PROG_NAME): $(SRC_OBJ) $(LIB_OBJ) $(LIB_OBJ_IMGUI)
	@echo ">>> Generating executable $@ <<<"
	$(CXX) $(SRC_OBJ) $(LIB_OBJ) -o $(BIN_DIR)/$@ $(STATIC_LIBRARY) $(LIBS) 

#-------------------- Clean Project ----------------------
.PHONY: cleanAll
cleanAll:
	rm -f $(BIN_DIR)/$(PROG_NAME) $(BUILD_DIR)/*.o $(BUILD_DIR)/*.d $(DIR_BUILD_IMGUI)/*.o

.PHONY: clean
clean:
	rm -f $(BIN_DIR)/$(PROG_NAME) $(BUILD_DIR)/*.o $(BUILD_DIR)/*.d 

#---------------------------------------------------------
# Let's include dependencies calculated by CC
-include $(DEPFLAGS)
