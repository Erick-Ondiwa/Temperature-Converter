const display_area = document.getElementById('display');

const c_to_f = document.getElementById('c_to_f');
const f_to_c = document.getElementById('f_to_c');

function notANumber(temp){
  if(isNaN(temp)){
    display_area.value = "";
    alert(`Please enter a valid number. ${temp} is not a number.`);
   
    return;
  }
}

let input;
function compte_result(result){
  if(c_to_f.checked){
    const temp = display_area.value;
   notANumber(temp);
 
    let input = Number(temp);
    result = (input * 9/5) + 32;
  }
  else if(f_to_c.checked){
    const temp = display_area.value;
    if(isNaN(temp)){
      alert(`Please enter a valid number. ${temp} is not a number.`);
      converted = "";
      return;
    }
    let input = Number(temp);
    result = (input - 32) * 5/9;
  }

  else{
    alert(`You need to select atleast one buton to convert`);
  }

  return result;
}

const convert_button = document.getElementById('convert_button');
convert_button.addEventListener('click', () =>{
  let converted = compte_result(input);
  display_area.value = `${converted}`;
});
