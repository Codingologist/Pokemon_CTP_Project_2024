


let preview;
let tensor;
let model;
let labels;
let predictedLabel

 async function loadModel() {
     try {
         model = await tf.loadLayersModel('/static/tfjs_model/model.json');
         console.log('Model loaded');
         //document.getElementById('predictBtn').disabled = false; // Enable button after loading
     } catch (error) {
         console.error('Error loading model:', error);
     }
   
 }
loadModel()
//calling M.L. Model working on this still.
 

//drag and drop functionaility code
const dropZone = document.getElementById('drop-zone'); 



dropZone.addEventListener('dragover', (e) => { 
  e.preventDefault(); 
  dropZone.classList.add('hover'); 
}); 
 
dropZone.addEventListener('dragleave', () => { 
  dropZone.classList.remove('hover'); 
}); 
 
dropZone.addEventListener('drop', (e) => { 
  e.preventDefault(); 
  dropZone.classList.remove('hover'); 
 
  const files = e.dataTransfer.files; 
  handleFiles(files); 
}); 
 
const fileInput = document.getElementById('file-input'); 
 
fileInput.addEventListener('change', () => { 
  const files = fileInput.files; 
  handleFiles(files); 
  
  
}); 

function handleFiles(files) {
  for (const file of files) {
    console.log('Uploading file:', file.name); 
    console.log(files)
    // Initializing the FileReader API and reading the file
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // Once the file has been loaded, fire the processing
    reader.onloadend = function (e) {
    const preview = document.createElement('img');
    preview.src = e.target.result;
    preview.onload = () => {




    // Apply styling
    preview.classList.add('preview-image');
    const previewContainer = document.getElementById('canv1');
    previewContainer.appendChild(preview);
    
 
    // image convert to tensor after the image loads
    const tensor = tf.browser.fromPixels(preview);
    console.log('Tensor shape:', tensor.shape);
    

    
if (tensor) {
  
  //preprocessImage(tensor);

  predictImage(tensor);
  }
  else {
    console.error('The tensor is null. Check the image loading process.');
  
}
}}};
function preprocessImage(Image) {


  // Resize the image to match the model's input shape
  const height = 180; // Change to your model's expected height
  const width = 180;  // Change to your model's expected width
  const resized = tf.image.resizeBilinear(Image, [height, width]);
  
  
  console.log('Tensor shape after resizing:', resized.shape);
  

  // Add a batch dimension (if required by the model)
  const batched = resized.expandDims(0);
  
  return batched;
  }
  
  
  async function predictImage(Image) {
  
  const preprocessedImage = preprocessImage(Image);
  
  // Call the predict function
  
  const predictions = await model.predict(preprocessedImage);
  
  // Process the predictions to get the labels
  const labels = ['Bug', 'Bug Electric', 'Bug Fighting', 'Bug Fire', 'Bug Flying', 'Bug Ghost', 'Bug Grass', 'Bug Ground', 'Bug Poison', 'Bug Rock', 'Bug Steel', 'Bug Water', 'Dark', 'Dark Dragon', 'Dark Fighting', 'Dark Fire', 'Dark Flying', 'Dark Ghost', 'Dark Ice', 'Dark Psychic', 'Dark Steel', 'Dragon', 'Dragon Electric', 'Dragon Fairy', 'Dragon Fire', 'Dragon Flying', 'Dragon Ground', 'Dragon Ice', 'Dragon Psychic', 'Electric', 'Electric Dragon', 'Electric Fairy', 'Electric Fire', 'Electric Flying', 'Electric Ghost', 'Electric Grass', 'Electric Ice', 'Electric Normal', 'Electric Steel', 'Electric Water', 'Fairy', 'Fairy Flying', 'Fighting', 'Fighting Dark', 'Fighting Flying', 'Fighting Psychic', 'Fighting Steel', 'Fire', 'Fire Dragon', 'Fire Fighting', 'Fire Flying', 'Fire Ground', 'Fire Normal', 'Fire Psychic', 'Fire Rock', 'Fire Steel', 'Fire Water', 'Flying', 'Flying Dragon', 'Ghost', 'Ghost Dark', 'Ghost Dragon', 'Ghost Fire', 'Ghost Flying', 'Ghost Grass', 'Ghost Poison', 'Grass', 'Grass Dark', 'Grass Dragon', 'Grass Fairy', 'Grass Fighting', 'Grass Flying', 'Grass Ground', 'Grass Ice', 'Grass Poison', 'Grass Psychic', 'Grass Steel', 'Ground', 'Ground Dark', 'Ground Dragon', 'Ground Electric', 'Ground Fire', 'Ground Flying', 'Ground Ghost', 'Ground Psychic', 'Ground Rock', 'Ground Steel', 'Ice', 'Ice Flying', 'Ice Ghost', 'Ice Ground', 'Ice Psychic', 'Ice Water', 'Normal', 'Normal Fairy', 'Normal Fighting', 'Normal Flying', 'Normal Grass', 'Normal Ground', 'Normal Psychic', 'Normal Water', 'Poison', 'Poison Bug', 'Poison Dark', 'Poison Dragon', 'Poison Fighting', 'Poison Flying', 'Poison Ground', 'Poison Water', 'Psychic', 'Psychic Dark', 'Psychic Fairy', 'Psychic Fighting', 'Psychic Fire', 'Psychic Flying', 'Psychic Ghost', 'Psychic Grass', 'Rock', 'Rock Bug', 'Rock Dark', 'Rock Dragon', 'Rock Fairy', 'Rock Fighting', 'Rock Flying', 'Rock Grass', 'Rock Ground', 'Rock Ice', 'Rock Psychic', 'Rock Steel', 'Rock Water', 'Steel', 'Steel Dragon', 'Steel Fairy', 'Steel Fighting', 'Steel Flying', 'Steel Ghost', 'Steel Ground', 'Steel Psychic', 'Steel Rock', 'Water', 'Water Dark', 'Water Dragon', 'Water Electric', 'Water Fairy', 'Water Fighting', 'Water Flying', 'Water Ghost', 'Water Grass', 'Water Ground', 'Water Ice', 'Water Poison', 'Water Psychic', 'Water Rock', 'Water Steel'];
  const predictionArray = await predictions.array();
  
  const predictedIndex = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
  const predictedLabel = labels[predictedIndex];
  console.log (predictedLabel)
 
  (document.getElementById('predicted').innerText = 'Prediction: ' + predictedLabel);
  
  console.log(files);
  return predictedLabel
  }
}


    
    


    












// We’ll discuss `isValidFileType` function down the road
function isValidFileType(file) {
const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
return allowedTypes.includes(file.type);
}


   
  
