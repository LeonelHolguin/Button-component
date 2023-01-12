export const COLORS = {
    default: "#E0E0E0",
    default_text: "#3F3F3F7",
    default_hover: "#AEAEAE",
    default_shadow: "rgba(51, 51, 51, 0.2)",
    primary: "#2962FF",
    primary_text: "#FFFFFF",
    primary_hover: "#0039CB",
    primary_shadow: "rgba(41, 98, 255, 0.2)",
    secondary: "#455A64",
    secondary_text: "#FFFFFF",
    secondary_hover: "#1C313A",
    secondary_shadow: "rgba(69, 90, 100, 0.2)",
    danger: "#D32F2F",
    danger_text: "#FFFFFF",
    danger_hover: "#9A0007",
    danger_shadow: "rgba(211, 47, 47, 0.2)",
    border_color: "1px solid #3D5AFE",
    variant: "#FFFFFF",
    variant_text: "#3D5AFE",
    variant_hover: "rgba(41, 98, 255, 0.1)",
    disabled: "#E0E0E0",
    disabled_text: "#9E9E9E",
  };
  
export const buttonCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  
  button {
      width = 81px;
      height = 36px;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-align: center;
      justify-content: center;
      border: none;
      border-radius: 6px;
  
  }
  
  .startIcon {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      text-align: center;
      padding: 7.5px;
      padding-left: 1px;
  
  }
  
  .startIcon i {
      padding: 4px;
      padding-right: 12px;
  
  }
  
  .endIcon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
      padding: 7.5px;
      padding-right: 1px;
  
  }
  
  .endIcon i {
      padding: 4px;
      padding-left: 12px;
  
  }
  
  
  
  /* fallback */
  @font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v75/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1n-q_4MrImHCIJIZrDCvHOej.woff2) format('woff2');
  }
  
  .material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  }`;