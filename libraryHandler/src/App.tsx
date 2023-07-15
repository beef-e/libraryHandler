import Header from './components/Header';
import Login from './components/Login';
import ChoiceButton from './components/ChoiceButton';
import OptionsList from './components/OptionsList';
import BorrowBook from './components/BorrowBook';
import ReturnBook from './components/ReturnBook';
import { useState } from 'react';
import './App.css';

function App() {
	const [choiceMade, setChoiceMade] = useState(0);

	return (
		<>
			<Header />

			<OptionsList>
				<ChoiceButton
					dimensions="-lg"
					margin="m-5"
					onButtonClick={() => setChoiceMade(1)}>
					Noleggia un libro
				</ChoiceButton>

				<ChoiceButton
					dimensions="-lg"
					margin="m-5"
					onButtonClick={() => setChoiceMade(2)}>
					Restituisci un libro
				</ChoiceButton>
			</OptionsList>

			{choiceMade === 1 && <BorrowBook />}
			{choiceMade === 2 && <ReturnBook />}
		</>
	);
}

export default App;
