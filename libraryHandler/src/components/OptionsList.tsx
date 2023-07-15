import ChoiceButton from './ChoiceButton';

const OptionsList = () => {
	return (
		<div className="mx-auto container text-center">
			<h4 className="mt-5 display-4">Scegli la tua operazione</h4>

			<div>
				<ChoiceButton
					margin="m-2"
					dimensions="-lg">
					Noleggia libro
				</ChoiceButton>

				<ChoiceButton
					margin="m-2"
					dimensions="-lg">
					Restituisci libro
				</ChoiceButton>
			</div>
		</div>
	);
};

export default OptionsList;
