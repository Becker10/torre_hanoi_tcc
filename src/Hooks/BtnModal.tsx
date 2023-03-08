import "../components/Modal/index.css";
import Modal from "../components/Modal";
import useModal from ".";

export default function BtnModal() {
  const { isOpen, toggle } = useModal();
  return (
    <div className="box-text-info">
      <button className="box-text-btn-info" type='button' id="btn-info" onClick={toggle}>INFO</button>
      <div className="modals">
        <Modal isOpen={isOpen} toggle={toggle} title="INSTRUCTIONS TO PLAY">
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum eget metus eu semper. Ut accumsan risus non sagittis fermentum. Proin justo dolor, rhoncus vitae viverra ac, pellentesque vel sem. Fusce tempor ipsum a leo rhoncus, ut consequat odio tempus. Cras eget auctor metus. Ut lobortis arcu nibh, quis sagittis tortor facilisis sit amet. Fusce in velit id sapien consectetur eleifend. Mauris consequat nulla ipsum, et dignissim mi porta in. Fusce nec justo ut enim euismod ullamcorper. Nulla lacus dui, dapibus nec justo quis, semper malesuada nulla. Nam porttitor ligula nec justo tempor, efficitur consequat erat placerat. Duis ultrices, libero nec scelerisque vestibulum, lorem odio hendrerit nibh, ut congue est ligula eu dolor. Nunc hendrerit molestie orci, iaculis gravida tortor viverra sit amet. Donec efficitur iaculis libero, in congue ligula commodo pharetra. Mauris viverra nisl non tincidunt gravida. Fusce aliquam tellus at dui scelerisque, vitae convallis est sagittis.
          </div>
        </Modal>
      </div>
    </div>
  );

}