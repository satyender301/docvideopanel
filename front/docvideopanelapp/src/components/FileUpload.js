import React, { Fragment, useState } from 'react';
import Message from './Message';
//  import Progress from './Progress';
import axios from 'axios';

function FileUpload() {

     const [state, setState] = useState({

        title: "",
        keyword: "",
         summary: "",
        })


  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
//    const [uploadPercentage, setUploadPercentage] = useState(0);

  const handlevideoChange = e => {
    setFile(e.target.files[0]);
     setFilename(e.target.files[0].name);
    
  };

  const handleChange = e =>{
    const value = e.target.value;
    setState({
        ...state,
         [e.target.name]: value
      });
  }

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    // const {  title, keyword, summary } = state;

    // formData.append('state',JSON.stringify(state));

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
          
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        //  onUploadProgress: progressEvent => {
        //    setUploadPercentage(
        //      parseInt(
        //        Math.round((progressEvent.loaded * 100) / progressEvent.total)
        // )
        //    );

        //   //   // Clear percentage
        //    setTimeout(() => setUploadPercentage(0), 10000);
        //  }
      });


      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } 
    
    catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
         
        Add Video <input
            type='file'
            className='custom-file-input'
            id='customFile' 
            onChange={handlevideoChange}
          />
           <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>

           {/* <label className="p-3">
               
               Title
                <input type="text" name="title" required value={state.title} onChange={handleChange} />
           </label><br/><br/>

           <label>
               Keywords
               <textarea type="tel" name="keyword"  required value={state.keyword}  placeholder="Keywords" onChange={handleChange}></textarea>
           </label><br/><br/>

           <label>
               Summary
               <textarea type="tel" name="summary"  required value={state.summary}  placeholder="Summary" onChange={handleChange} ></textarea>
           </label><br/><br/>  */}

        </div>

         {/* <Progress percentage={uploadPercentage} />  */}

        <input
          type='submit'
          value='Upload/Submit'
          className='btn btn-primary btn mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
            <video style={{ width: '100%' }} src={uploadedFile.filePath} alt='' controls></video>
          </div>
        </div>
        
      ) : null}
    </Fragment>
  );
}

export default FileUpload
