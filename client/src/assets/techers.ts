// BASE
import art from "../assets/images/teachers/base/art.jpeg";
import biology from "../assets/images/teachers/base/biology.jpeg";
import chemistry from "../assets/images/teachers/base/chemistry.jpeg";
import crafts from "../assets/images/teachers/base/crafts.jpeg";
import english from "../assets/images/teachers/base/english.jpeg";
import geography from "../assets/images/teachers/base/geography.jpeg";
import history from "../assets/images/teachers/base/history.jpeg";
import math from "../assets/images/teachers/base/math.jpeg";
import music from "../assets/images/teachers/base/music.jpeg";
import physics from "../assets/images/teachers/base/physics.jpeg";
import science from "../assets/images/teachers/base/science.jpeg";
import social from "../assets/images/teachers/base/socials.jpeg";
import sport from "../assets/images/teachers/base/sport.jpg";
import swedish from "../assets/images/teachers/base/swedish.jpeg";
import technology from "../assets/images/teachers/base/technology.jpeg";

// THUMBNAILS
import artThumb from "../assets/images/teachers/thumbnails/art-thumbnail.svg";
import biologyThumb from "../assets/images/teachers/thumbnails/biology-thumbnail.svg";
import chemistryThumb from "../assets/images/teachers/thumbnails/chemistry-thumbnail.svg";
import craftsThumb from "../assets/images/teachers/thumbnails/crafts-thumbnail.svg";
import englishThumb from "../assets/images/teachers/thumbnails/english-thumbnail.svg";
import geographyThumb from "../assets/images/teachers/thumbnails/geography-thumbnail.svg";
import historyThumb from "../assets/images/teachers/thumbnails/history-thumbnail.svg";
import mathThumb from "../assets/images/teachers/thumbnails/math-thumbnail.svg";
import musicThumb from "../assets/images/teachers/thumbnails/music-thumbnail.svg";
import physicsThumb from "../assets/images/teachers/thumbnails/physics-thumbnail.svg";
import scienceThumb from "../assets/images/teachers/thumbnails/science-thumbnail.svg";
import socialThumb from "../assets/images/teachers/thumbnails/socials-thumbnail.svg";
import sportThumb from "../assets/images/teachers/thumbnails/sport-thumbnail.svg";
import swedishThumb from "../assets/images/teachers/thumbnails/swedish-thumbnail.svg";
import technologyThumb from "../assets/images/teachers/thumbnails/technology-thumbnail.svg";

// AVATARS
import artAvatar from "../assets/images/teachers/avatars/art-avatar.jpg";
import biologyAvatar from "../assets/images/teachers/avatars/biology-avatar.jpg";
import chemistryAvatar from "../assets/images/teachers/avatars/chemistry-avatar.jpg";
import craftsAvatar from "../assets/images/teachers/avatars/crafts-avatar.jpg";
import englishAvatar from "../assets/images/teachers/avatars/english-avatar.jpg";
import geographyAvatar from "../assets/images/teachers/avatars/geography-avatar.jpg";
import historyAvatar from "../assets/images/teachers/avatars/history-avatar.jpg";
import mathAvatar from "../assets/images/teachers/avatars/math-avatar.jpg";
import musicAvatar from "../assets/images/teachers/avatars/music-avatar.jpg";
import physicsAvatar from "../assets/images/teachers/avatars/physics-avatar.jpg";
import scienceAvatar from "../assets/images/teachers/avatars/science-avatar.jpg";
import socialAvatar from "../assets/images/teachers/avatars/socials-avatar.jpg";
import sportAvatar from "../assets/images/teachers/avatars/sport-avatar.jpg";
import swedishAvatar from "../assets/images/teachers/avatars/swedish-avatar.jpg";
import technologyAvatar from "../assets/images/teachers/avatars/technology-avatar.jpg";
import { Teacher } from "@shared/school.types";

export const teachers: Teacher[] = [
  {
    name: "Kim",
    subject: "matematik",
    image: math,
    thumbNail: mathThumb,
    avatar: mathAvatar,
  },
  {
    name: "Helena",
    subject: "svenska",
    image: swedish,
    thumbNail: swedishThumb,
    avatar: swedishAvatar,
  },
  {
    name: "Tara",
    subject: "engelska",
    image: english,
    thumbNail: englishThumb,
    avatar: englishAvatar,
  },
  {
    name: "Martin",
    subject: "historia",
    image: history,
    thumbNail: historyThumb,
    avatar: historyAvatar,
  },
  {
    name: "Monika",
    subject: "geografi",
    image: geography,
    thumbNail: geographyThumb,
    avatar: geographyAvatar,
  },
  {
    name: "Henrik",
    subject: "biologi",
    image: biology,
    thumbNail: biologyThumb,
    avatar: biologyAvatar,
  },
  {
    name: "Albert",
    subject: "fysik",
    image: physics,
    thumbNail: physicsThumb,
    avatar: physicsAvatar,
  },
  {
    name: "Jonas",
    subject: "kemi",
    image: chemistry,
    thumbNail: chemistryThumb,
    avatar: chemistryAvatar,
  },
  {
    name: "Camilla",
    subject: "samhällskunskap",
    image: social,
    thumbNail: socialThumb,
    avatar: socialAvatar,
  },
  // {
  //   name: "",
  //   subject: "religionskunskap",
  //   image: "",
  // thumbNail:"",
  //     avatar:"",
  // },
  {
    name: "Oscar",
    subject: "idrott och hälsa",
    image: sport,
    thumbNail: sportThumb,
    avatar: sportAvatar,
  },
  {
    name: "Alf",
    subject: "teknik",
    image: technology,
    thumbNail: technologyThumb,
    avatar: technologyAvatar,
  },
  {
    name: "Daniel",
    subject: "musik",
    image: music,
    thumbNail: musicThumb,
    avatar: musicAvatar,
  },
  {
    name: "Joakim",
    subject: "bild",
    image: art,
    thumbNail: artThumb,
    avatar: artAvatar,
  },
  {
    name: "Bo",
    subject: "slöjd",
    image: crafts,
    thumbNail: craftsThumb,
    avatar: craftsAvatar,
  },
  {
    name: "Ebba",
    subject: "naturkunskap",
    image: science,
    thumbNail: scienceThumb,
    avatar: scienceAvatar,
  },
  // {
  //   name: "",
  //   subject: "kunskapsprov",
  //   image: "",
  // },
];
