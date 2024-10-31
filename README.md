# Pokemon_CTP_Project
Hosts the main files for the Pokemon CTP  group project. :)

UPDATE DASHBOARD

10/31/2024 Femi: 
Started to add functionality to the front-end of our application with a manual file upload (which displays file name) /drag and drop option. Additionally, a prediction button is currently in the works. For now, it outputs a given value “FIRE”, as a test, with the hopes to add our model output instead.

10/30/2024 Carmen:
<br>
<img width="500" height="300" alt="v3_pokedex" src="https://github.com/user-attachments/assets/3d12b992-240c-4120-9143-24ebd1600015">
<br>
Completed version 3 of Pokedex interface. Added background image, pokedex offset shading to give “floating” effect, transparent header with logo and useful links.
Looking to add buttons, Title, and “Pokemon-esque” font in V4

10/29/2024 Carmen:
<br>
<img width="500" height="300" alt="v2_pokedex" src="https://github.com/user-attachments/assets/bd33aa2d-faa8-457e-8dc2-704d005810d6">
<br>
Completed version 2 of Pokedex interface with screens, shading, and rounded borders. Looking into adding buttons in next phase and potentially a header for useful links.

10/20/2024 Carmen:
<br>
<img width="500" height="300" alt="v1_ mockup" src="https://github.com/user-attachments/assets/c69ffd4c-792a-41b5-b0eb-b4dd8601e902">
<br>
Started on version 1 mock-up of front-end design for Pokedex using HTML & CSS. Looking into how to incorporate JavaScript and AI integration to code. 

9/23/2024 Femi: 
Found a way to derive a Python script, who's goal was to web scrap Pokemon images from Google images. At this time, the script has web-scrapped over 40,000 + images. This is good so far, and once fed to our model
should make it more accurate. Lastly, the aim is web scrap over 100k + images, within a reasonable time frame, to improve the robustness of our model!

9/21/2024(2) Femi:
Found a current work around to automate cleaning the image data from our datasets, classify them into the 150 + types, and create class folders for them, so that it could be fed into the model.
I believe we still need a larger data set, and may have to web scrapping, albiet not advised. LOL


9/21/2024 Femi:
Found a current work around to imporove the model's accuracy, but only in respect to single pokemon type classification. 
For the model to output "true" values we will need to clean up the data and derive new classes for these attributes. We can divi up this task
and talk about how we can do this, so that our model can input true value. :)

Albiet not reccomended, we may have to do some web scrapping as we need a larger training set of images to train our model on.
If start early and run it daily whenever, we are not using out devices, we could obtain a substatial amount of data!






9/20/2024 Femi:


At this point in time, I have was able to implement(still working /playing around with it) a base image classification model using a smaller dataset.
However, the classification is not that accurate, so in order to improve the model's effort I had obtained a larget image set of Pokemons, almost 10k +, vs. the orginal 1k
The downside is, they are not classified into proper types and their are around 150 pokemon on this list, mainly Gen 1.
Thus, the aim is to utilize divide and conquer by tasking ourselves with classifying each pokemon and copying their respective imaage into the correct type file.
Hopefully we can get this done ASAP, then aggreate the dataset and hopefully from there, be able to re-run the model and see if it's accuracy improves! :)
