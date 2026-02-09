import { useRef, useState, type FormEvent } from 'react';
import './App.css';
import { mockCallAPI } from './api';

type Inputs = 'input1' | 'input2' | 'input3';

export const App = () => {
  const [inputs, setInputs] = useState<Record<Inputs, string>>({
    input1: '',
    input2: '',
    input3: '',
  });

  const [validationResult, setValidationResult] = useState<{ status: number }>({
    status: 200,
  });

  const controllerRef = useRef<AbortController>(new AbortController());

  async function onChangeForm(event: FormEvent) {
    event.preventDefault();

    controllerRef.current.abort();

    controllerRef.current = new AbortController();

    const validationObj = {
      ...inputs,
      [event.target.name]: event.target.value,
    };

    setInputs(validationObj);

    const validationResult = await mockCallAPI(
      [validationObj.input1, validationObj.input2, validationObj.input3],
      {
        signal: controllerRef.current.signal,
      }
    );

    console.log(validationResult.status);

    setValidationResult(validationResult);
  }

  return (
    <div className="App">
      <h1>My form</h1>

      <form className="App__inputs" onChange={onChangeForm}>
        <input
          name="input1"
          value={inputs.input1}
          onChange={(e) =>
            setInputs((inputs) => ({ ...inputs, input1: e.target.value }))
          }
          autoFocus
        />

        <input
          name="input2"
          value={inputs.input2}
          onChange={(e) =>
            setInputs((inputs) => ({ ...inputs, input2: e.target.value }))
          }
        />

        <input
          name="input3"
          value={inputs.input3}
          onChange={(e) =>
            setInputs((inputs) => ({ ...inputs, input3: e.target.value }))
          }
        />
      </form>

      {validationResult.status === 400 && (
        <p className="App__error">Inputs are not valid</p>
      )}

      {validationResult.status !== 400 && validationResult.status !== 200 && (
        <p className="App__error">Something went wrong</p>
      )}
    </div>
  );
};
