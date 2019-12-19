export const setActiveStyle = ({ active, boxType }) => {
  const activeStyle = {
    width: "20px",
    height: "20px",
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.521)",
    borderStyle: "solid"
  };

  if (active === boxType) return activeStyle;
  return null;
};
