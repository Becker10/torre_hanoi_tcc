import React, { useState } from 'react';
import './index.css'
import Swal from 'sweetalert2'
import BtnModal from '../../hooks/BtnModal';

class BoxText extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   let textarea = (document.getElementById('text') as HTMLInputElement).value;

  //   if (textarea == "" || textarea == null || textarea == undefined) {
  //     Swal.fire({
  //       title: '<strong>Você precisa digitar uma instrução para jogar, meu jovem gafanhoto!</strong>',
  //       icon: 'warning',
  //       showCloseButton: false,
  //       showCancelButton: false,
  //       focusConfirm: false,
  //       iconColor: '#3f5ca7',
  //       confirmButtonColor: '#3f5ca7',
  //       color: '#30395a',
  //     })
  //   } else {
  //     textarea = textarea.replace(/\s/g, '')
  //     if (textarea == "MOVEATOB") {
  //       move(0,1)
  //       console.log('Movi A pra B')
  //     }
  //     if (textarea == "MOVEATOC") {
  //       move(0, 2)
  //       console.log('Movi A pra C')
  //     }
  //     if (textarea == "MOVEBTOC") {
  //       move(1, 2)
  //       console.log('Movi B pra C')
  //     }
  //     if (textarea == "MOVEBTOA") {
  //       move(1, 0)
  //       console.log('Movi B pra A')
  //     }
  //     if (textarea == "MOVECTOA") {
  //       move(3, 0)
  //       console.log('Movi C pra A')
  //     }
  //     if (textarea == "MOVECTOB") {
  //       move(3, 2)
  //       console.log('Movi C pra B')
  //     }
  //     else {
  //       alert('esse movimento é proibido')
  //     }
  //   }
  // }


  render() {
    return (
      <div className="box-text">
        <div className="box-text-area">
          <textarea className="box-text-input" id="text" placeholder="Enter the instructions..." />
        </div>
        <button className="box-text-btn" type='button' id="btn2" >SUBMIT</button>
        <BtnModal />
      </div>
    )
  }
}
export default BoxText
