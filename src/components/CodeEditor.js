import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-cpp';
import 'prismjs/themes/prism.css';
import code_snippet_dic from '../util/codeSnippets';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const code2 = `function add(a, b) {
  return a + b;
}
`;
const code = `#include<iostream.h>
int main(){
  return 2;
}
`;

class CodeEditor extends React.Component {
  constructor(props){
    super(props);
    this.state ={ code:code_snippet_dic.cpp, language:"cpp" };
    if(this.props.onEditorChange)
      this.props.onEditorChange(this.state.language,this.state.code);
  }
  render() {
    return (
    <div>
      <div style={{padding:"1em"}}>
        <Select
          id="language"
          value={this.state.language}
          onChange={this.handleChangelang=(e)=>{this.setState({language:e.target.value,code:code_snippet_dic[e.target.value]});
          if(this.props.onEditorChange)
          this.props.onEditorChange(this.state.language,this.state.code);
          }}>
          <MenuItem value={"cpp"}>cpp</MenuItem>
          <MenuItem value={"c"}>c</MenuItem>
          <MenuItem value={"java"}>java</MenuItem>
        </Select>
      </div>
      <div style={{backgroundColor:"#f1f1f1", margin:"1em", minHeight:"450px",maxHeight:"450px",overflowY:"scroll"}}>
      <Editor
        value={this.state.code}
        onValueChange={c => {this.setState({ code:c },()=>{
          if(this.props.onEditorChange)
          this.props.onEditorChange(this.state.language,this.state.code);
        });
      }}
        highlight={code => highlight(code, languages.cpp)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
      </div>

    </div>
    );
  }
}

export default CodeEditor;