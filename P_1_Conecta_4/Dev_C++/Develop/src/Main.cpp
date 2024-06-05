//sdl_ic63aaeff0c6e6

#include "../inc/Core/Application.hpp"
#include "../inc/Config/General.hpp"

int main(int, char**) {//SDL Main

    InitImGUI();

    try {

        InitSDL();

        Application::getInstance().StartUp();
        Application::getInstance().Execute();

    } catch (const Exception &ex) {

        std::cerr << "Error: " << ex.what() << std::endl;
        CloseSDL();
        CloseImGUI();

        return 1;
    }

    CloseSDL();
    CloseImGUI();
    
    return EXIT_SUCCESS;
}
