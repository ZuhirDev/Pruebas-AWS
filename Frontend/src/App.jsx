import { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    fetch('/api/hello')
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      });
  };

  return (
    <div>
      <h1>Frontend</h1>
      <p>Esta aplicación se conecta al backend pidiéndole una respuesta</p>
      <button onClick={handleClick}>Pedir mensaje al backend</button>
      {showMessage && <p>Backend response: {message}</p>}
    </div>
  );
};

export default App;
