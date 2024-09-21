# Pokemon_CTP_Project
Hosts the main files for the Pokemon CTP  group project.


9/21/2024:
Found a current work around to imporove the model's accuracy, but only in respect to single pokemon type classification. 
For the model to output "true" values we will need to clean up the data and derive new classes for these attributes. We can divi up this task
and talk about how we can do this, so that our model can input true value. :)

Albiet not reccomended, we may have to do some web scrapping as we need a larger training set of images to train our model on.
If start early and run it daily whenever, we are not using out devices, we could obtain a substatial amount of data!






9/20/2024:


At this point in time, I have was able to implement(still working /playing around with it) a base image classification model using a smaller dataset.
However, the classification is not that accurate, so in order to improve the model's effort I had obtained a larget image set of Pokemons, almost 10k +, vs. the orginal 1k
The downside is, they are not classified into proper types and their are around 150 pokemon on this list, mainly Gen 1.
Thus, the aim is to utilize divide and conquer by tasking ourselves with classifying each pokemon and copying their respective imaage into the correct type file.
Hopefully we can get this done ASAP, then aggreate the dataset and hopefully from there, be able to re-run the model and see if it's accuracy improves! :)
