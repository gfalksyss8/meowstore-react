import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container'

export default function PaginationButtons() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }

    return (
        <Container className="d-flex justify-content-center">
            <Pagination size="sm">{items}</Pagination>
        </Container>
    );
}