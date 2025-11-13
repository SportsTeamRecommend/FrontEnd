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
// import kiwoom from './../assets/kbo-logo/kiwoom-heroes.svg';
// import hanwha from './../assets/kbo-logo/hanwha-eagles.svg';
// import samsung from './../assets/kbo-logo/samsung-lions.svg';
// import ssg from './../assets/kbo-logo/ssg-landers.svg';
// import kt from './../assets/kbo-logo/kt-wiz.svg';
// import kia from './../assets/kbo-logo/kia-tigers.svg';
// import lg from './../assets/kbo-logo/lg-twins.svg';

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
    { name: 'Lotte Giants', img: lotte },
    { name: 'Doosan Bears', img: doosan },
    { name: 'NC Dinos', img: nc },
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
