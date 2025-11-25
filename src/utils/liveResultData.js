import ferrari from './../assets/f1-logo/ferrari.svg';
import mercedes from './../assets/f1-logo/mercedes.svg';
import redbull from './../assets/f1-logo/redbull.svg';
import mcLaren from './../assets/f1-logo/mclaren.svg';
import astonmartin from './../assets/f1-logo/astonmartin.png';
import alpine from './../assets/f1-logo/alpine.svg';
import haas from './../assets/f1-logo/haas.svg';
import sauber from './../assets/f1-logo/sauber.svg';
import williams from './../assets/f1-logo/williams.svg';
import rb from './../assets/f1-logo/rb.png';

import doosan from './../assets/kbo-logo/doosan-bears.svg';
import lotte from './../assets/kbo-logo/lotte-giants.svg';
import nc from './../assets/kbo-logo/nc-dinos.svg';
import kiwoom from './../assets/kbo-logo/kiwoom-heroes.svg';
import hanwha from './../assets/kbo-logo/hanwha-eagles.svg';
import samsung from './../assets/kbo-logo/samsung-lions.svg';
import ssg from './../assets/kbo-logo/ssg-landers.svg';
import kt from './../assets/kbo-logo/kt-wiz.svg';
import kia from './../assets/kbo-logo/kia-tigers.svg';
import lg from './../assets/kbo-logo/lg-twins.svg';

const liveResultData = {
  f1: [
    { name: 'Oracle Red Bull Racing', img: redbull },
    { name: 'Mercedes-AMG Petronas', img: mercedes },
    { name: 'Ferrari', img: ferrari },
    { name: 'McLaren', img: mcLaren },
    { name: 'Aston Martin Aramco', img: astonmartin },
    { name: 'Alpine', img: alpine },
    { name: 'Haas F1 Team', img: haas },
    { name: 'Kick Sauber', img: sauber },
    { name: 'Williams', img: williams },
    { name: 'Racing Bulls', img: rb },
  ],
  kbo: [
    { name: '롯데 자이언츠', img: lotte },
    { name: '두산 베어스', img: doosan },
    { name: 'NC 다이노스', img: nc },
    { name: '키움 히어로즈', img: kiwoom },
    { name: '한화 이글스', img: hanwha },
    { name: '삼성 라이온즈', img: samsung },
    { name: 'SSG 랜더스', img: ssg },
    { name: 'KT 위즈', img: kt },
    { name: 'KIA 타이거즈', img: kia },
    { name: 'LG 트윈스', img: lg },
  ],
};

export const getTeamName = (type, teamName) => {
  const list = liveResultData[type];

  const found = list.find(
    (item) =>
      item.name.toLowerCase().includes(teamName.toLowerCase()) ||
      teamName.toLowerCase().includes(item.name.toLowerCase())
  );

  return found.name;
};

export const getTeamLogo = (type, teamName) => {
  const list = liveResultData[type];

  const found = list.find(
    (item) =>
      item.name.toLowerCase().includes(teamName.toLowerCase()) ||
      teamName.toLowerCase().includes(item.name.toLowerCase())
  );

  return found.img;
};
