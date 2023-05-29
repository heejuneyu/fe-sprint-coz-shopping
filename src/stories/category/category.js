import classes from "./category.module.css";
function Category({ text1, img1}) {
  return (
    <div>
      <div className={classes.circle}>
        <img src={img1}></img>
        <div className={classes.title}>{text1}</div>
      </div>
    </div>
  );
}

export default Category;
