import { ReactNode } from 'react';

interface ChoiceButtonProps {
	children: ReactNode;
	dimensions?: '-lg' | '-sm';
	color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
	margin?: 'm-1' | 'm-2' | 'm-3' | 'm-4' | 'm-5';
	onButtonClick?: () => void;
}

function ChoiceButton({
	children,
	dimensions,
	color = 'success',
	margin,
	onButtonClick,
}: ChoiceButtonProps) {
	return (
		<button
			type="button"
			className={`btn btn-${color} btn${dimensions} ${margin}`}
			onClick={onButtonClick}>
			{children}
		</button>
	);
}

export default ChoiceButton;
