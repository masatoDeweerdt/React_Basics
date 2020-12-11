import React, { Component } from 'react'
import './App.css'

import marked from 'marked'

import { sampleText } from './sampleText'

class App extends Component {

  state = {
    text: sampleText
  }

  // methode lié à un component stateful, qui contient un state
  componentDidMount() {
    // permet de garder la valeur du textarea à jour même après avoir rechargé la page
    // en appelant les données dans le local storage avec "getItem"
    const text = localStorage.getItem('text')
    // mets à jour le state et reset avec le contenu par défaut du sampleText quand le champ est totalement vide
    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  componentDidUpdate() {
    // enregistrer le contenu dans le local storage
    const { text } = this.state
    // localStorage fonctionne avec 'setItem' (pour enregistrer une donnée) ou 'getItem' (pour récupérer une donnée)
    // et prend 2 paramètres à savoir : 1. le nom(clef) qu'on donne au paramètre 2. la valeur qu'aura ce paramètre
    localStorage.setItem('text', text)
  }

  // Update/changement du state
  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  // fonction qui affiche le texte markdown grâce la libraire "marked"
  renderText = text => {
    const __html = marked(text, { markdownString: true })
    return { __html }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea

              onChange={this.handleChange}
              className="form-control"
              rows="35"
              value={this.state.text}>

            </textarea>
          </div>
          <div className="col-sm-6">
            {/* dangerouslySetInnerHTM prends en paramètre ce qui vient dans la div à savoir le texte processé */}
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}>

            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
