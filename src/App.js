import React from 'react';
import logo from './logo.svg';
import CodeEditor from './components/CodeEditor';
import {useState} from 'react';
import BasicCompilation from './components/BasicCompilation';
import { languages } from 'prismjs';
import { Container , Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Header from './components/Header';
function App() {
  const [code,setCode]=useState("");
  const [output,setOutput]=useState("");
  const [language,setLanguage]=useState("");
  const onEditorChange=(l,c)=>{
    setLanguage(l);
    setCode(c);
  };
  const onOutputChange=(output)=>setOutput(output);
  return (
    <div>
   <Header/>
    <Container>
      <Row>
    <Col md={7}>
   <CodeEditor onEditorChange={onEditorChange}></CodeEditor>
   </Col>
   <Col md={5}>
     <div style={{ marginTop:"1em" }}>
     <h3>Output</h3>
     </div>
  <p>{ output }</p>
  </Col>
   </Row>
   <Row>
     <Col>
   <BasicCompilation onOutputChange={onOutputChange} isFile={false} code={code} language={language}></BasicCompilation>
   </Col>
   </Row>
 
   </Container>
   </div>
  );
}

export default App;
