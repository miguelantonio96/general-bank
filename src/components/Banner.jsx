import { useState } from "react";
import { LoadingIcon } from "../ui/components/LoadingIcon";
import { useLocation } from "react-router";

const bannerImagesUrl = [
  {
    src: "/img/banner_cliente.png",
    alt: "Alura Account Banner",
    title: "General-account is the first step towards financial freedom!",
  },
  {
    src: "/img/banner_gato.png",
    alt: "Alura Login Banner",
    title: "Welcome to your General account!",
  },
  {
    src: "/img/banner_formulario.png",
    alt: "Alura Home Banner",
    title: "Welcome to General!",
  },
  {
    src: "/img/banner_error.png",
    alt: "Error 404 Banner",
    title: "Oops! The page you are looking for does not exist.",
  },
];

export const Banner = () => {
  const location = useLocation();
  const [bannerImages, setBannerImages] = useState({});

  switch (location.pathname) {
    case "/":
      if (bannerImages !== bannerImagesUrl[0]) {
        setBannerImages(bannerImagesUrl[0]);
      }
      break;

    case "/home/about":
      if (bannerImages !== bannerImagesUrl[1]) {
        setBannerImages(bannerImagesUrl[1]);
      }
      break;
    case "/home/contact-us":
      if (bannerImages !== bannerImagesUrl[1]) {
        setBannerImages(bannerImagesUrl[1]);
      }
      break;
    case "/auth/register":
      if (bannerImages !== bannerImagesUrl[2]) {
        setBannerImages(bannerImagesUrl[2]);
      }
    case "/auth/register-2":
      if (bannerImages !== bannerImagesUrl[2]) {
        setBannerImages(bannerImagesUrl[2]);
      }
    case "/auth/register-3":
      if (bannerImages !== bannerImagesUrl[2]) {
        setBannerImages(bannerImagesUrl[2]);
      }
      break;
    default:
      if (bannerImages !== bannerImagesUrl[3]) {
        setBannerImages(bannerImagesUrl[3]);
      }
      break;
  }

  // if (location.pathname === "/") {
  //   if (bannerImages !== bannerImagesUrl[0]) {
  //     setBannerImages(bannerImagesUrl[0]);
  //   }
  // }
  // if (location.pathname === "/home/services") {
  //   if (bannerImages !== bannerImagesUrl[0]) {
  //     setBannerImages(bannerImagesUrl[0]);
  //   }
  // }

  // if (location.pathname === "/auth/login") {
  //   if (bannerImages !== bannerImagesUrl[1]) {
  //     setBannerImages(bannerImagesUrl[1]);
  //   }
  // }
  // if (location.pathname === "/auth/register-1") {
  //   if (bannerImages !== bannerImagesUrl[2]) {
  //     setBannerImages(bannerImagesUrl[2]);
  //   }
  // }

  // if (location.pathname === "/auth/register-2") {
  //   if (bannerImages !== bannerImagesUrl[2]) {
  //     setBannerImages(bannerImagesUrl[2]);
  //   }
  // }

  // if (location.pathname === "/auth/register-3") {
  //   if (bannerImages !== bannerImagesUrl[2]) {
  //     setBannerImages(bannerImagesUrl[2]);
  //   }
  // }

  return (
    <div className="banner">
      {bannerImages.src ? (
        <img
          className="banner__img"
          src={bannerImages.src}
          alt={bannerImages.alt}
        />
      ) : (
        <LoadingIcon />
      )}
      <h1 className="banner__titulo">{bannerImages.title}</h1>
    </div>
  );
};
