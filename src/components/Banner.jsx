import { useState } from "react";
import { LoadingIcon } from "../ui/components/LoadingIcon";
import { useLocation } from "react-router";

const bannerImagesUrl = [
  {
    src: "/img/banner_home.jpg",
    alt: "General Home Banner",
    title: "Welcome to General Bank!",
  },
  {
    src: "/img/banner_about.jpg",
    alt: "General About Banner",
    title: "We are more than just a bank!",
  },
  {
    src: "/img/banner_service.jpg",
    alt: "General Services Banner",
    title: "Our services are under construction!",
  },
  {
    src: "/img/banner_contact.jpeg",
    alt: "General Contact Banner",
    title: "We are here to help you!",
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
      if (bannerImages !== bannerImagesUrl[3]) {
        setBannerImages(bannerImagesUrl[3]);
      }
      break;
    case "/auth/register":
      if (bannerImages !== bannerImagesUrl[2]) {
        setBannerImages(bannerImagesUrl[2]);
      }
      break;
    case "/services/under-construction":
      if (bannerImages !== bannerImagesUrl[2]) {
        setBannerImages(bannerImagesUrl[2]);
      }
      break;
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
      <h1 className="banner__title">{bannerImages.title}</h1>
    </div>
  );
};
