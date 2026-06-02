import ProgressBar from 'react-bootstrap/ProgressBar'

export default function RatingBar({ value }) {
    let color;

    if (value > 3) {
        color = "success";
    } else if (value > 1) {
        color = "warning";
    } else {
        color = "danger";
    }

    const bar = value * 20;

    return (
        <ProgressBar 
            variant={color}
            now={bar}
        />
    );
}