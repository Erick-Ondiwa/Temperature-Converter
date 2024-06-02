const display_area = document.getElementById('display');
const temp = display_area.value;
let input = Number(temp);


const c_to_f = document.getElementById('c_to_f');
const f_to_c = document.getElementById('f_to_c');

function compte_result(result){
  if(c_to_f.checked){
    result = (input * 9/5) + 32;
  }
  else if(f_to_c.checked){
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
