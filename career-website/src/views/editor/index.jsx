// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// //Loader
// //Images
// import logo from "../../assets/images/softuvo_logo_green.png";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import { useState } from "react";
// // import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
// // import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
// // import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// // import RichTextEditor from 'react-rte/lib/RichTextEditor';
// import { useEffect } from "react";

// const Editor = () => {


//   const navigate = useNavigate();
// const [form,setForm]= useState({
//   content:' ',
//   })
//   const [editorState,setEditorState]= useState(false)
//   const OnChangeHandler = (value)=>{
//     console.log("Recieved",value)
//   }
//   useEffect(()=>{

//     // setTimeout(()=>{
//     //   setEditorState(true)
//     //   alert('Time Set')
//     // },3000)
//   },[])
               
//   const custom_config = {
//    toolbar: {
//       items: [
//         'heading',
//         '|',
//         'bold',
//         'italic',
//         'link',
//         'bulletedList',
//         'numberedList',
//         '|',
//         'blockQuote',
//         'insertTable',
//         '|',
//         'imageUpload',
//         'undo',
//         'redo'
//       ]
//     },
//     table: {
//       contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
//     }
//   }
            


//     return (
//       <React.Fragment>
//       <section className="login-wrapper">
//         <div className="login-main">
//           <div className="container">
//             <div className="logo-div">
//               <Link to="/">
//                 {" "}
//                 <img src={logo} alt="login-page" />{" "}
//               </Link>
//               <h5> This page is unknown or does not exist</h5>
//               <p>
//                 Sorry about that, but the page you looking for is not available
//               </p>
//               <h2>Editor</h2>

//       <CKEditor 
//       editor={ClassicEditor}
//       data="<p>Hello from CKEditor 5!</p>"
    
//       onReady={ editor => {
//         // You can store the "editor" and use when it is needed.
//         console.log( 'Editor is ready to use!', editor );
//       } }
//       onChange={ ( event, editor ) => {
//         const data = editor.getData();
//         console.log( "data",{ event, editor, data } );
//         setForm((prevData)=>({
//           ...prevData,
//         }))
//                     } }
//                   onBlur={ ( event, editor ) => {
//                       console.log( 'Blur.', editor );
//                     } }
//                   onFocus={ ( event, editor ) => {
//                     console.log( 'Focus.', editor );
//                   } }
//                   />
//             </div>
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   );
// };
// export default Editor;
