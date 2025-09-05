import { useEffect } from "react";
import { ButtonBankingApp } from "../../ui/components/ButtonBankingApp";

export const RegisterFaceRecognitionView = () => {
  useEffect(() => {
    const cameraElement = document.querySelector("[data-camera]");
    const messageElement = document.querySelector("[data-message]");
    const photoValidationElement = document.querySelector(
      "[data-photo-validation]"
    );
    const photoConfirmedElement = document.querySelector(
      "[data-photo-confirmed]"
    );
    cameraElement.style.display = "none";
    messageElement.style.display = "none";
    photoValidationElement.style.display = "none";
    photoConfirmedElement.style.display = "none";
  }, []);

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
      cameraElement.style.display = "flex";
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
    const messageElement = document.querySelector("[data-message]");
       const photoValidationElement = document.querySelector(
      "[data-photo-validation]"
    );
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
    photoValidationElement.style.display = "flex";
    messageElement.style.display = "flex";
    console.log("Foto tomada:", fotoURL);
  };

  const handlePhotoConfirmed = () => {
    const photoValidationElement = document.querySelector(
      "[data-photo-validation]"
    );
    const photoConfirmedElement = document.querySelector(
      "[data-photo-confirmed]"
    );
    console.log("validation");
    // let imagenURL = "";
    // const localUserData = localStorage.getItem("register");
    // const userData = JSON.parse(localUserData);
    // userData.img_url = imagenURL;
    // localStorage.setItem("registro", JSON.stringify(userData));
    photoValidationElement.style.display = "none";
    photoConfirmedElement.style.display = "flex";
  };

  const handleRetakePhoto = () => {
    const cameraElement = document.querySelector("[data-camera]");
    const messageElement = document.querySelector("[data-message]");
    cameraElement.style.display = "flex";
    messageElement.style.display = "none";
  };

  // const botonEnviar = document.querySelector("[data-send]");

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
    <section className="face-recognition__container">
      <div className="face-recognition__content">
        <img
          src="/img/status-2.png"
          alt="Step two of three"
          className="face-recognition__stepper"
        />
        <div className="face-recognition__items" data-open-camera>
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

        <div className="face-recognition__items" data-camera>
          <video width="640" height="480" autoPlay data-video></video>
          <ButtonBankingApp
            name="Take photo"
            className="face-recognition__button"
            onClick={() => {
              handleTakePhoto();
            }}
            data-take-photo
          />
        </div>

        <div className="face-recognition__items" data-message>
          <canvas  className="image-captured__canvas"  width="480" height="480" data-photo-canvas></canvas>

          <div className="image-captured__validation" data-photo-validation>
            <h2 className="face-recognition__title">Is this image okay?</h2>
            <img
              src="/img/icon_check.png"
              alt="Validation icon"
              className="image-captured__button"
              onClick={() => handlePhotoConfirmed()}
            />
            <ButtonBankingApp
              name="Re-take photo"
              className="face-recognition__button"
              onClick={() => handleRetakePhoto()}
              data-take-photo
            />
          </div>

          <div className="image-captured__confirmed" data-photo-confirmed>
            <h2    className="face-recognition__title-green" >That&apos;s it, image captured!</h2>
            <ButtonBankingApp
              name="I want to open my account!"
              className="face-recognition__button"
              onClick={() => handleSendUserData()}
              data-send
            />
          </div>
        </div>
      </div>
    </section>
  );
};
