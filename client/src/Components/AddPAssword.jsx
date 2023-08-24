import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import "../Assests/style/Home.css";
import { getRandomChar, getSpecialChar } from "./GetRandom";
import { useForm } from "./UseForm";
import { PasswordGenerator } from "../API/ApiCall";
function AddPAssword({ setPopup }) {
  const [result, setResult] = useState('');

  const [Errormsg, setErrormsg] = useState(false)
  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: true,
    symbol: false,
  });

  const [Name, setName] = useState('')

  const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar(),
    },
  ];


const FormSubmit=async (e)=>
{
  e.preventDefault()
  let generatedPassword = '';
 
  const checkedFields = fieldsArray.filter(({ field }) =>
  
  field
  );
  console.log(checkedFields,'checkfeild');
  console.log(values);
  console.log(Name);
  for (let i = 0; i < values.length; i++) {
    const index = Math.floor(Math.random() * checkedFields.length);
    console.log(index,'index');
    const letter = checkedFields[index]?.getChar();

    if (letter) {
      generatedPassword += letter;
      console.log(generatedPassword,'gpass');
      
 
    }
  }

  if (generatedPassword) {
    setResult(generatedPassword);
    setErrormsg('')
    if(Name)
    {
setErrormsg('')

console.log(result);
await PasswordGenerator(Name,generatedPassword).then(data=>
  {
    console.log(data);
    setPopup(false)
  })


    }
    else{
      setErrormsg('set a name for this')
    }
    console.log('eveything went well');
  } else {
    console.log('error eger'); 
    
    toast.error(' Please select at least one option');
    toast('Here is your toast.');
    setErrormsg('select atleast one box')
  }

}



  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
             <form onSubmit={FormSubmit}>
             <div className="p-4">
                <label
                  for="success"
                  class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  Add name
                </label>

                <input
                required
                  type="text"
                  className="border p-2 mb-2"
                  placeholder="Enter text..."
                  name="name"
                  onChange={(e)=>
                  {
                    setName(e.target.value)
                  }}
                  // value={inputValue}
                  // onChange={handleInputChange}
                />
                {/* length */}
                <div className="mb-2 flex justify-between w-1/2">
                  <span className="ml-2 p-3">Length</span>
                  <label className="inline-flex items-center ">

                     <input className="numberfield"
                type="number"
                id="length"
                min={6}
                max={20}
                name="length"
                value={values.length}
                onChange={setValues}
              />
                  </label>
                  {/* Similar code for checkbox2 and checkbox3 */}
                </div>
                {/* number/////////////// */}
                <div className="mb-2 flex justify-between w-1/2">
                  <div>
                  <span className="ml-2 p-3"> Numbers</span>

                  </div>

                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="number"
                      checked={values.number}
                      onChange={setValues}
                      // checked={checkboxValues.checkbox1}
                      // onChange={handleCheckboxChange}
                      className="form-checkbox"
                    />
                  </label>
                  {/* Similar code for checkbox2 and checkbox3 */}
                </div>

                {/* caps.......................................... */}
                <div className="mb-2 flex justify-between w-1/2">
                  <span className="ml-2 p-3"> Captital Lettters</span>

                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="capital"
                      checked={values.capital}
                      onChange={setValues}
                      // checked={checkboxValues.checkbox1}
                      // onChange={handleCheckboxChange}
                      className="form-checkbox"
                    />
                  </label>

                  {/* Similar code for checkbox2 and checkbox3 */}
                </div>
                {/* small./.................................... */}
                <div className="mb-2 flex justify-between w-1/2">
                  <span className="ml-2 p-3"> Small Letters</span>

                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="small"
                      checked={values.small}
                      onChange={setValues}
                      // checked={checkboxValues.checkbox1}
                      // onChange={handleCheckboxChange}
                      className="form-checkbox"
                    />
                  </label>

                  {/* Similar code for checkbox2 and checkbox3 */}
                </div>
                <div className="mb-2 flex justify-between w-1/2">
                  <span className="ml-2 p-3"> Spacial Charectors</span>

                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="symbol"
                      checked={values.symbol}
                      onChange={setValues}
                      // checked={checkboxValues.checkbox1}
                      // onChange={handleCheckboxChange}
                      className="form-checkbox"
                    />
                  </label>

                  {/* Similar code for checkbox2 and checkbox3 */}
                </div>
           <label htmlFor="" className="text-red-500">{Errormsg}</label>
                <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                    //   onClick={handleOkClick}
                  >
                    OK
                  </button>
                  <button
                  onClick={()=>
                  {
                    setPopup(false)
                  }}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    //   onClick={handleCancelClick}
                  >
                    Close
                  </button>
                </div>
              </div>
             </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPAssword;
