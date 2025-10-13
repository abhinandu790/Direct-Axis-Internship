import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Basic_3() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Basic_3;