import React, { Component } from 'react'
import { Container, Card, CardTitle, CardBody, CardText } from 'reactstrap'

const styles = {
  col: {
    maxWidth: '700px',
    margin: '0 auto'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: [] }
  }

  componentDidMount() {
    this.fetchCards()
  }

  fetchCards() {
    fetch('/flash-cards')
      .then(res => res.ok ? res.json() : null)
      .then(cards => cards && this.setState({ cards }))
  }

  render() {
    const $cards = this.state.cards.map((card, i) => {
      return (
        <Card className="my-2 shadow-sm" key={i}>
          <CardBody>
            <CardTitle>{card.question}</CardTitle>
            <CardText>{card.answer}</CardText>
          </CardBody>
        </Card>
      )
    })
    return (
      <Container>
        <div style={styles.col}>{$cards}</div>
      </Container>
    )
  }
  
}