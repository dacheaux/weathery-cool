export const listOfCities = [
  {
    name: "Belgrade",
    image:
      "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/Q7QA-bg.jpg"
  },
  {
    name: "Novi Sad",
    image:
      "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/TIRH-ns.jpg"
  }
];

export const iconUrls = {
  cloud:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/xb6a-cloud.svg",
  cloudy:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/sq-o-cloudy.svg",
  moon:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/lFvW-moon.svg",
  rain:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/4aoT-rain.svg",
  snowing:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/aODy-snowing.svg",
  storm:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/zWvz-storn.svg",
  sun:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/0cip-sun.svg",
  refresh:
    "https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/AXnT-refresh.svg"
};

export const getIconDescription = weather => {
  const { code, description } = weather || {};
  let src = "";
  if (code >= 200 && code < 300) {
    src = iconUrls.storm;
  } else if (code >= 300 && code < 600) {
    src = iconUrls.rain;
  } else if ((code >= 600 && code < 700) || code === 900) {
    src = iconUrls.snowing;
  } else if ((code >= 700 && code < 800) || code === 802) {
    src = iconUrls.cloudy;
  } else if (code === 800 || code === 801) {
    src = iconUrls.sun;
  } else {
    src = iconUrls.cloud;
  }
  return { src, description };
};

export const timeSince = ms => {
  const minutes = Math.floor((Date.now() - ms) / (60 * 1000));
  const hours = Math.floor(minutes / 60);
  if (hours > 1) {
    return hours + " hours";
  }
  return minutes + " minutes";
};
