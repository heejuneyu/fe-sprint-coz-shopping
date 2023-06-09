import Category, { category as Template } from "./category.js";

export default {
  title: "Basic/category", // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(ItemBox)
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const Withcategory = (args) => <Category {...args} />;
Withcategory.args = {
  text1: "전체",
  img1 : "./titleimage/all.png"
};
