import React from 'react';
import { Editor } from '@tinymce/tinymce-react'
import './App.css';
// import renderHTML from 'html-react-parser';
import axios from 'axios'
// import Loading from './Loading';
import h2m from 'h2m';
import CloudinaryFileManagerPlugin from './compoment/cloudinaryPlugin';
import CloudinaryFileManagerPlugin1 from './compoment/myEditor';
import MyEditor from './compoment/myEditor';
// import CloudinaryFileManagerPlugin from './compoment/myEditor';
const cloudName = 'dpnlgxwkp';
const unsignedUploadPreset = 'octe1lva';



function App() {
  const [state, setState] = React.useState({
    content: "",
    saved: false,
    post: {
      description: ""
    },
    urlImage: '',
    loading: false
  })
  const _handleEditorChange = e => {
    console.log('Content was updated:', h2m(e.target.getContent()))
    setState({ ...state, content: e.target.getContent() })
  }

  const _handSave = () => {
    //Let push state.content which you got to server
    //can view result at console window :)
    console.log(state.content)
    setState({ ...state, saved: true })

  }

  React.useEffect(() => {
    const input = document.getElementsByTagName("input")
    if (state.loading && input) {

      input.disabled = true
    }
    else if (!state.loading && input) {
      input.disabled = false
    }
  })


  return (
    <div className="App">
        <MyEditor/>
    </div>
  );
}

export default App;
