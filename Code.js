const form = document.querySelector('form')
// This use-case will give empty value as we are extracting value outside form
//we only need values when the user clicks the submit button
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const weightGuide = document.querySelector('#weight-guide');
    
    
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        
        result.innerHTML = `<span> Body Mass Index : ${bmi}</span>`;
        
        
       // Compare BMI with weight guide ranges
       if (bmi < 18.6) {
        weightGuide.innerHTML = `<h3>BMI Weight Guide</h3><p>Under Weight</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        weightGuide.innerHTML = `<h3>BMI Weight Guide</h3><p>Normal Range</p>`;
    } else {
        weightGuide.innerHTML = `<h3>BMI Weight Guide</h3><p>Overweight</p>`;
    } 
        
    }
    
   
    
    
});

