import { ReactNode } from 'react';
import ChoiceButton from './ChoiceButton';

interface OptionsListProps {
	children: ReactNode;
}

const OptionsList = ({ children }: OptionsListProps) => {
	return (
		<div className="mx-auto container text-center">
			<h4 className="mt-5 display-4">Scegli la tua operazione</h4>

			<div>{children}</div>
		</div>
	);
};

export default OptionsList;
