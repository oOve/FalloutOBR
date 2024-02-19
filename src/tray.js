import OBR from "@obr"



  OBR.onReady(() => {
    OBR.popover.open({
      url: "./popover.html",
      width: 0,
      height: 0,
      anchorOrigin: { horizontal: "RIGHT", vertical: "BOTTOM" },
      transformOrigin: { horizontal: "RIGHT", vertical: "BOTTOM" },
      disableClickAway: true,
      hidePaper: false,
      marginThreshold: 0,
    });
  });

