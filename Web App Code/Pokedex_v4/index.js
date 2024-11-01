
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
 
//upload image to screen?
function upload(){
  var imgcanvas = document.getElementById("canv1");
  var fileinput = document.getElementById("file-input");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}



function handleFiles(files) { 
  for (const file of files) { 
    
    // Perform operations with each file (e.g., upload, preview, etc.) 
    console.log('Uploading file:', file.name); 
    


   
    //calling M.L. Model working on this still.
 
    async function loadModel() {
      const model = await tf.loadLayersModel('public/model/model.json');
      return model;
      }


      function preprocessImage(Image) {
        // Convert the image to a tensor
        const tensor = tf.browser.fromPixels(Image);

        // Resize the image to match the model's input shape
        const resized = tf.files.resizeBilinear(tensor, [1, 180,180,32]); 

        // Normalize the pixel values (usually between 0 and 1)
        const normalized = resized.div(255); 

        // Add a batch dimension (if required by the model)
        const batched = normalized.expandDims(0);

        return batched;
      }
        

      async function predictImage(Image) {
        const model = await loadModel();
        const preprocessedImage = preprocessImage(Image);

        // Call the predict function
        const predictions = await model.predict(preprocessedImage).data();

        // Process the predictions to get the labels
        const labels = ['Bug', 'Bug Electric', 'Bug Fighting', 'Bug Fire', 'Bug Flying', 'Bug Ghost', 'Bug Grass', 'Bug Ground', 'Bug Poison', 'Bug Rock', 'Bug Steel', 'Bug Water', 'Dark', 'Dark Dragon', 'Dark Fighting', 'Dark Fire', 'Dark Flying', 'Dark Ghost', 'Dark Ice', 'Dark Psychic', 'Dark Steel', 'Dragon', 'Dragon Electric', 'Dragon Fairy', 'Dragon Fire', 'Dragon Flying', 'Dragon Ground', 'Dragon Ice', 'Dragon Psychic', 'Electric', 'Electric Dragon', 'Electric Fairy', 'Electric Fire', 'Electric Flying', 'Electric Ghost', 'Electric Grass', 'Electric Ice', 'Electric Normal', 'Electric Steel', 'Electric Water', 'Fairy', 'Fairy Flying', 'Fighting', 'Fighting Dark', 'Fighting Flying', 'Fighting Psychic', 'Fighting Steel', 'Fire', 'Fire Dragon', 'Fire Fighting', 'Fire Flying', 'Fire Ground', 'Fire Normal', 'Fire Psychic', 'Fire Rock', 'Fire Steel', 'Fire Water', 'Flying', 'Flying Dragon', 'Ghost', 'Ghost Dark', 'Ghost Dragon', 'Ghost Fire', 'Ghost Flying', 'Ghost Grass', 'Ghost Poison', 'Grass', 'Grass Dark', 'Grass Dragon', 'Grass Fairy', 'Grass Fighting', 'Grass Flying', 'Grass Ground', 'Grass Ice', 'Grass Poison', 'Grass Psychic', 'Grass Steel', 'Ground', 'Ground Dark', 'Ground Dragon', 'Ground Electric', 'Ground Fire', 'Ground Flying', 'Ground Ghost', 'Ground Psychic', 'Ground Rock', 'Ground Steel', 'Ice', 'Ice Flying', 'Ice Ghost', 'Ice Ground', 'Ice Psychic', 'Ice Water', 'Normal', 'Normal Fairy', 'Normal Fighting', 'Normal Flying', 'Normal Grass', 'Normal Ground', 'Normal Psychic', 'Normal Water', 'Poison', 'Poison Bug', 'Poison Dark', 'Poison Dragon', 'Poison Fighting', 'Poison Flying', 'Poison Ground', 'Poison Water', 'Psychic', 'Psychic Dark', 'Psychic Fairy', 'Psychic Fighting', 'Psychic Fire', 'Psychic Flying', 'Psychic Ghost', 'Psychic Grass', 'Rock', 'Rock Bug', 'Rock Dark', 'Rock Dragon', 'Rock Fairy', 'Rock Fighting', 'Rock Flying', 'Rock Grass', 'Rock Ground', 'Rock Ice', 'Rock Psychic', 'Rock Steel', 'Rock Water', 'Steel', 'Steel Dragon', 'Steel Fairy', 'Steel Fighting', 'Steel Flying', 'Steel Ghost', 'Steel Ground', 'Steel Psychic', 'Steel Rock', 'Water', 'Water Dark', 'Water Dragon', 'Water Electric', 'Water Fairy', 'Water Fighting', 'Water Flying', 'Water Ghost', 'Water Grass', 'Water Ground', 'Water Ice', 'Water Poison', 'Water Psychic', 'Water Rock', 'Water Steel'];


        return labels;
      }

      loadModel();
      preprocessImage(file);
      predictImage(file);

        
      }
  } 
