import React, { useState } from 'react';
import './index.css'
import Swal from 'sweetalert2'
import BtnModal from '../../hooks/BtnModal';

class BoxText extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let botao = document.querySelector("#btn");
    let textarea = (document.getElementById('text') as HTMLInputElement).value;

    if (textarea == "" || textarea == null || textarea == undefined) {
      Swal.fire({
        title: '<strong>Você precisa digitar uma instrução para jogar, meu jovem gafanhoto!</strong>',
        icon: 'warning',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        iconColor: '#3f5ca7',
        confirmButtonColor: '#3f5ca7',
        color: '#30395a',
      })
    } else {
      botao?.addEventListener('click', () => {
        textarea = textarea.replace(/\s/g, '');
        var valor = textarea;
        console.log(valor);
      })
    }
  }


  render() {
    return (
      <div className="box-text">
        <div className="box-text-area">
            <textarea className="box-text-input" id="text" placeholder="Enter the instructions..." />
        </div>
        <button className="box-text-btn" type='button' id="btn" onClick={this.handleClick}>SUBMIT</button>
        <BtnModal />
      </div>
    )
  }
}
export default BoxText

