
# Project Metar Search

The METAR is an hourly weather report used widely in the aviation industry.

The idea of Project Metar Search is for people passionate about aviation to have a site where they can learn the METAR code with real METARS from anywhere in the world.

![Metar sample image](./IMG/Readme%20Metar.jpg)

If you want to see what I've done so far, you can click [here](https://jay-juan.github.io/Metar-search/)
To see the METAR you will have to:

  - Click a button or use the searchbar
  - Reload the site
  - Click any button

## A Work in Progress

As a work in progress, I'm aware I still have a lot to do. 
Here are some present features and features to come.

### What I have right now

This is the current state of project Metar Search.

  - Functional API call
  - Array with relevant data correctly saved
  - Function with the METAR button layout and the modal created
  - Displaying METAR information on screen (initial implementation, enhancements coming soon)
  - Searchbar functional

### Immediate "to-dos"

Here's what I see when I open Jira. Thank Tim Berners-Lee for Jira!

  - 1: Bring the METAR properly and replace it when you search for another one
  - 2: Add the information the API doesn't receive to the array
  - 3: Order the data in the array using the standard METAR order

## And many more "to-dos"

Project Metar Search is just starting, and I have a general direction of where I want it to go (with some room for adjustment). The next section shows some of what I've planned so far.

### Making JS efficient

The ammount of data received from the API is huge and most is not used. Here's what I plan to do about it (and am currently working on).

  - Add METAR data not present in the API
  - Order the data in the standard METAR order
  - Save the array in localStorage
  - Show the METAR on screen properly

### Making JS work properly

The next step after saving all the info I will use is making it visible. As such, I will have to make sure the JS calls it properly. Here's the plan.

  - Use the built structure to make the buttons appear in order
  - Make sure when I call for another METAR the previous buttons are erased and replaced by new ones.

### Getting the definitions right

There is no way to learn to decipher METAR correctly without a proper explanation. For such a task, this is what I have planned.

  - Use aeronautic documentation to get all the definitions
  - Create a Json with concise explanations for each code you can encounter in the METAR
  - Run what I have with many people working in aviation to fact-check


### Giving HTML some attention

HTML is not the focus of the project yet, most of the features listed below are expected to be added near the end of the project.

  - Give the site aesthetic cohesion
  - Center the METAR properly
  - Decide on a position for the buttons
  - Decide the text on the site

### The buttons have to go... For now...

The buttons currently present are for me to have a fast way to test the site. As such, they are (probably) not the final preset buttons to be added. Here's what I plan to do about it.

  - Search for varied climates and airports
  - Decide on the amount of buttons per climate
  - Using what I find to decide the final preset buttons

## Built With

  - HTML
  - JavaScript
  - Bootstrap
  - Passion for the topic

## Next next steps

I have many ideas to expand upon this project, but to do that I first need to have this project working, so until then I'll keep them as that, ideas.

Thank you for reading and taking an interest in my project.
