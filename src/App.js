
import './App.css';
import {Col, Container, Row} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { getAllByRole } from '@testing-library/dom';


function App() {

  
  
  const [text, setText] = useState("RNDM");
  const [author, setAuthor] = useState("Author");
  //const [quoteList, setQuoteList] = useState([]);
  let quoteList;
  
//Funcion fadeIn

function fadeIn(segs, id){
  let element = document.getElementById(id);
  let op = 0.0;
  element.style.opacity = op;
  let interval = setInterval(aparecer,segs);
  function aparecer(){
      if(op<1){
          op = op+0.01;
          
          element.style.opacity = op;
      }
      else{
          clearInterval(interval);
      }
  }
}

  async function apiCall({
    url,
    method = "get",
    body,
    headers
}){
    try{
        const response = await fetch(url,{
        method, body, headers
    });
    return response.json();
    }
    
    catch (err){
        Promise.reject(err);
    }
}

  const getQuotes = async () => {
    const quotesResult = await apiCall({url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"});
    quoteList = (quotesResult.quotes);
    fadeIn(5,"quote-box")
    setText(quoteList[Math.floor(Math.random()*quoteList.length)].quote);
    setAuthor(quoteList[Math.floor(Math.random()*quoteList.length)].author);
  }

  useEffect(getQuotes,[]);

  function getRandomQuote(){
    getQuotes();
  }

 




  return (
    <>
    <div className="mainDiv">
      <Container>
        <Row>
          <Col>
            <div id="quote-box" className="mainCard">
              <h1 id="text">{text}</h1>
              <p id="author">{author}</p>
              <div  className="cardFooter">
                <a target="_blank" href={`https://twitter.com/intent/tweet?text=${text + " --- " + author}`} id="tweet-quote"><i className="bi bi-twitter"></i></a>
                <button onClick={getRandomQuote} id="new-quote">New Quote</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <footer>
      <Row>
        <a className="footerA" href="https://nahuelfedyszyn.github.io/nahuelfedy/">by Nahuel Fedyszyn</a>
      </Row>
      <Row>
        <a href="https://www.linkedin.com/in/nahuel-fedyszyn-a95764186/" className="icon footerA"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/NahuelFedyszyn" className="footerA icon"><i className="bi bi-github"></i></a>
      </Row>
    </footer>
    </>
  );
}

export default App;
