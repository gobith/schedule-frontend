const statusToColorOpen = {
  iCan: "rgba(0 ,255 ,0 , 0.75)",
  iCanNot: "rgba(255 ,0 ,0 , 0.75)",
  confirmedScheduling: "rgba(0 ,0 ,235 , 0.75)",
  scheduled: "rgba(7 ,7 ,255 , 0.75)",
  neutral: "rgba(0 ,255 ,0 , 0.75)",
};

const statusToColorClosed = {
  iCan: "rgba(0 ,255 ,0 , 0.3)",
  iCanNot: "rgba(255 ,0 ,0 , 0.3)",
  confirmedScheduling: "rgba(0 ,0 ,235 , 0.3)",
  scheduled: "rgba(7 ,7 ,255 , 0.3)",
  neutral: "rgba(0 ,255 ,0 , 0.3)",
};

const eventStatus = {
  archived: statusToColorClosed,
  closed: statusToColorOpen,
  open: statusToColorOpen,
  finished: statusToColorClosed,
};

export const scheduleColor = (event, userStatus) => {
  if (!event) {
    return "#fff";
  }
  if (!userStatus) {
    return "#fff";
  }

  return eventStatus[event.status][userStatus.status];
};
