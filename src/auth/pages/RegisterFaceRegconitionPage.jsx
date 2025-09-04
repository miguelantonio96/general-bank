export const RegisterFaceRecognitionView = () => {
  const handleOpenCamera = async () => {
    try {
      const openCameraElements =
        document.querySelectorAll("[data-open-camera]");
      const cameraElement = document.querySelector("[data-camera]");
      const videoElement = document.querySelector("[data-video]");
      const streamVideo = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      videoElement.srcObject = streamVideo;
      videoElement.play();
      cameraElement.style.display = "block";
      openCameraElements.forEach((element) => {
        element.style.display = "none";
      });
    } catch (error) {
      console.error("Error al acceder a la cámara:", error);
    }
  };

  const handleTakePhoto = () => {
    const videoElement = document.querySelector("[data-video]");
    const photoCanvasElement = document.querySelector("[data-photo-canvas]");
    const messageElement = document.querySelector("[data-mensaje]");
    const cameraElement = document.querySelector("[data-camera]");

    const context = photoCanvasElement.getContext("2d");
    photoCanvasElement.width = videoElement.videoWidth;
    photoCanvasElement.height = videoElement.videoHeight;
    context.drawImage(
      videoElement,
      0,
      0,
      photoCanvasElement.width,
      photoCanvasElement.height
    );
    const fotoURL = photoCanvasElement.toDataURL("image/jpeg");
    // Aquí puedes guardar la foto o realizar otras acciones con ella
    photoCanvasElement.src = fotoURL;
    cameraElement.style.display = "none";
    messageElement.style.display = "flex";
    console.log("Foto tomada:", fotoURL);
  };

  const handlePhotoCaptured = () => {
    let imagenURL = "";
    const localUserData = localStorage.getItem("register");
    const userData = JSON.parse(localUserData);
    userData.img_url = imagenURL;
    localStorage.setItem("registro", JSON.stringify(userData));
  };

  // const botonEnviar = document.querySelector("[data-enviar]");

  // botonEnviar.addEventListener("click", () => {
  //   const recibirDatosGuardados = localStorage.getItem("registro");
  //   const convertirDatos = JSON.parse(recibirDatosGuardados);
  //   convertirDatos.img_url = imagenURL;
  //   localStorage.setItem("registro", JSON.stringify(convertirDatos));

  //   window.location.href = "./abrir-cuenta-form-3.html";
  // });

  const handleSendUserData = () => {
    const localUserData = localStorage.getItem("register");
    const userData = JSON.parse(localUserData);
    console.log(userData);

    window.location.href = "/auth/register/step-3";
  };

  return (
    <section className="formulario">
      <div className="form__container">
        <img
          src="/img/status-2.png"
          alt="Step two of three"
          className="formulario__etapas"
        />
        <div className="formulario__header" data-open-camera>
          <h2 className="form__title">Facial recognition</h2>
          <p className="formulario__texto">
            Click the image below to capture your photo!
          </p>

          <img
            src="/img/reconocimento.png"
            alt="Face with eyes and a smile inside a frame."
            data-video-boton
            className="open-camera__button"
            onClick={() => handleOpenCamera()}
          />
        </div>

        <div className="form__camera" data-camera>
          <video width="420" height="340" autoPlay data-video></video>
          <button
            className="take-photo__button"
            onClick={() => {
              handleTakePhoto();
            }}
            data-tomar-foto
          >
            Take photo
          </button>
        </div>

        <div className="form_message" data-mensaje>
          <canvas width="320" height="240" data-photo-canvas></canvas>
          <img
            src="/img/icon_check.png"
            alt="Validation icon"
            className="image-captured__button"
            onClick={() => handlePhotoCaptured()}
          />
          <p>That&apos;s it, image captured!</p>

          <a
            className="formulario__boton formulario__boton--enlace"
            data-enviar
            onClick={() => handleSendUserData()}
          >
            I want to open my account!
          </a>
        </div>
      </div>
    </section>
  );
};
